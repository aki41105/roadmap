/* global console, process */
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const rootDir = process.cwd();
const distDir = path.join(rootDir, "dist");
const serverDir = path.join(rootDir, ".roadmap-ssr");
const serverEntry = path.join(serverDir, "entry-server.js");
const templatePath = path.join(distDir, "index.html");

const escapeHtml = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

function outputPathForRoute(routePath) {
  const relativePath = routePath.replace(/^\/roadmap\/?/, "").replace(/\/$/, "");
  return relativePath
    ? path.join(distDir, relativePath, "index.html")
    : path.join(distDir, "index.html");
}

function inject(template, rendered) {
  const title = escapeHtml(rendered.head.title);
  const description = escapeHtml(rendered.head.description);
  const canonicalUrl = escapeHtml(rendered.head.canonicalUrl);

  return template
    .replace("<!--app-html-->", rendered.html)
    .replaceAll("__PAGE_TITLE__", title)
    .replaceAll("__PAGE_DESCRIPTION__", description)
    .replaceAll("__PAGE_URL__", canonicalUrl);
}

async function writeRouteManifest(routePaths) {
  const manifest = {
    generatedAt: new Date().toISOString(),
    routes: routePaths,
  };
  await writeFile(
    path.join(distDir, "routes-manifest.json"),
    `${JSON.stringify(manifest, null, 2)}\n`,
    "utf8",
  );
}

async function writeSitemap(routePaths) {
  const lastModified = new Date().toISOString().slice(0, 10);
  const urls = routePaths
    .map(
      (routePath) =>
        `  <url>\n    <loc>https://aki41105.github.io${routePath}</loc>\n    <lastmod>${lastModified}</lastmod>\n  </url>`,
    )
    .join("\n");
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  await writeFile(path.join(distDir, "sitemap.xml"), sitemap, "utf8");
}

try {
  const [template, serverModule] = await Promise.all([
    readFile(templatePath, "utf8"),
    import(`${pathToFileURL(serverEntry).href}?build=${Date.now()}`),
  ]);

  if (typeof serverModule.render !== "function") {
    throw new TypeError("SSR entry does not export render(pathname).");
  }
  if (
    !Array.isArray(serverModule.prerenderPaths) ||
    serverModule.prerenderPaths.length !== 9
  ) {
    throw new TypeError("SSR entry must export the nine prerenderPaths.");
  }

  const routePaths = serverModule.prerenderPaths;

  for (const routePath of routePaths) {
    const outputPath = outputPathForRoute(routePath);
    const rendered = serverModule.render(routePath);
    await mkdir(path.dirname(outputPath), { recursive: true });
    await writeFile(outputPath, inject(template, rendered), "utf8");
  }

  await Promise.all([writeRouteManifest(routePaths), writeSitemap(routePaths)]);
  console.log(`Prerendered ${routePaths.length} roadmap pages.`);
} finally {
  await rm(serverDir, { recursive: true, force: true });
}
