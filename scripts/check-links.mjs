/* global console, process */
import { readFile } from "node:fs/promises";
import path from "node:path";

const distDir = path.join(process.cwd(), "dist");
const siteOrigin = "https://aki41105.github.io";
const manifest = JSON.parse(
  await readFile(path.join(distDir, "routes-manifest.json"), "utf8"),
);

function routeFile(routePath) {
  const relative = routePath
    .replace(/^\/roadmap\/?/, "")
    .replace(/\/$/, "");
  return path.join(distDir, relative ? `${relative}/index.html` : "index.html");
}

const htmlPages = await Promise.all(
  manifest.routes.map((routePath) => readFile(routeFile(routePath), "utf8")),
);
const urls = [
  ...new Set(
    htmlPages.flatMap((html) =>
      [...html.matchAll(/href="(https?:\/\/[^"]+)"/g)].map(
        (match) => match[1],
      ),
    ),
  ),
]
  .filter((url) => new URL(url).origin !== siteOrigin)
  .sort();

const results = [];
let cursor = 0;

async function worker() {
  while (cursor < urls.length) {
    const url = urls[cursor++];
    try {
      const requestOptions = {
        redirect: "follow",
        signal: AbortSignal.timeout(10_000),
        headers: { "user-agent": "doctoral-roadmap-link-check/1.0" },
      };
      let response = await fetch(url, {
        ...requestOptions,
        method: "HEAD",
      });
      if ([400, 405].includes(response.status)) {
        response = await fetch(url, {
          ...requestOptions,
          method: "GET",
          headers: {
            ...requestOptions.headers,
            range: "bytes=0-0",
          },
        });
        await response.body?.cancel();
      }
      const state =
        response.status === 404 || response.status === 410
          ? "broken"
          : response.ok ||
              [401, 403, 405, 429].includes(response.status)
            ? "reachable"
            : "unavailable";
      results.push({ url, status: response.status, state });
    } catch (error) {
      results.push({
        url,
        status: 0,
        state: "unavailable",
        error: error instanceof Error ? error.message : String(error),
      });
    }
  }
}

await Promise.all(Array.from({ length: 8 }, () => worker()));

const broken = results.filter((result) => result.state === "broken");
const unavailable = results.filter((result) => result.state === "unavailable");
console.log(
  `Checked ${results.length} unique external links: ${broken.length} broken, ${unavailable.length} temporarily unavailable.`,
);

for (const result of [...broken, ...unavailable]) {
  console.log(
    `- ${result.state.toUpperCase()} ${result.status || "ERR"} ${result.url}`,
  );
}

if (broken.length > 0) {
  process.exitCode = 1;
}
