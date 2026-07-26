/* global console, process */
import { access, readFile } from "node:fs/promises";
import path from "node:path";

const rootDir = process.cwd();
const distDir = path.join(rootDir, "dist");

const manifest = JSON.parse(
  await readFile(path.join(distDir, "routes-manifest.json"), "utf8"),
);
const routeFiles = manifest.routes.map((routePath) => {
  const relativePath = routePath
    .replace(/^\/roadmap\/?/, "")
    .replace(/\/$/, "");
  return relativePath ? `${relativePath}/index.html` : "index.html";
});

const failures = [];

if (routeFiles.length !== 12) {
  failures.push(`routes-manifest.json: expected 12 routes, found ${routeFiles.length}`);
}

for (const relativeFile of routeFiles) {
  const filePath = path.join(distDir, relativeFile);
  let html = "";
  try {
    html = await readFile(filePath, "utf8");
  } catch {
    failures.push(`${relativeFile}: file is missing`);
    continue;
  }

  const requiredSnippets = [
    'lang="ja"',
    'id="root"',
    'id="main-content"',
    'aria-label="メインメニュー"',
    '<h1',
    'rel="canonical"',
  ];

  for (const snippet of requiredSnippets) {
    if (!html.includes(snippet)) {
      failures.push(`${relativeFile}: missing ${snippet}`);
    }
  }

  const h1Count = [...html.matchAll(/<h1(?:\s|>)/g)].length;
  if (h1Count !== 1) {
    failures.push(`${relativeFile}: expected exactly one h1, found ${h1Count}`);
  }

  const rootStart = html.indexOf('<div id="root">');
  const bodyEnd = html.lastIndexOf("</body>");
  if (
    rootStart === -1 ||
    bodyEnd === -1 ||
    bodyEnd - rootStart < 1_000
  ) {
    failures.push(`${relativeFile}: prerendered root content is missing or too short`);
  }

  if (html.includes("/src/")) {
    failures.push(`${relativeFile}: development source path remains`);
  }

  if (
    html.includes("<!--app-html-->") ||
    html.includes("__PAGE_TITLE__") ||
    html.includes("__PAGE_DESCRIPTION__") ||
    html.includes("__PAGE_URL__")
  ) {
    failures.push(`${relativeFile}: an HTML template token remains`);
  }

  const assetMatches = [
    ...html.matchAll(/(?:src|href)="(\/roadmap\/assets\/[^"]+)"/g),
  ];
  for (const match of assetMatches) {
    const relativeAsset = match[1].replace(/^\/roadmap\//, "");
    try {
      await access(path.join(distDir, relativeAsset));
    } catch {
      failures.push(`${relativeFile}: missing asset ${match[1]}`);
    }
  }
}

for (const requiredFile of [
  "legacy/index.html",
  "routes-manifest.json",
  "sitemap.xml",
]) {
  try {
    await access(path.join(distDir, requiredFile));
  } catch {
    failures.push(`${requiredFile}: required published file is missing`);
  }
}

if (failures.length > 0) {
  console.error("Static site verification failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exitCode = 1;
} else {
  console.log(`Verified ${routeFiles.length} prerendered pages and their assets.`);
}
