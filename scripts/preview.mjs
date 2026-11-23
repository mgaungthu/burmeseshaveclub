import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { resolve, extname, sep } from "node:path";

const root = resolve("out");
const port = Number(process.env.PORT || 4173);
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".txt": "text/plain",
  ".xml": "application/xml",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".ttf": "font/ttf",
  ".woff2": "font/woff2",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};
await stat(root).catch(() => {
  throw new Error("Run npm run build before npm run preview.");
});
createServer(async (req, res) => {
  try {
    const url = new URL(req.url, "http://localhost");
    const pathname = decodeURIComponent(url.pathname);
    if (pathname.startsWith("/api/")) {
      res.writeHead(503, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          message:
            "The local preview has no Laravel API. Configure NEXT_PUBLIC_CONTACT_ENDPOINT before building, or email info@burmeseshaveclub.com.",
        }),
      );
      return;
    }
    if (!["GET", "HEAD"].includes(req.method)) {
      res.writeHead(405);
      res.end();
      return;
    }
    const policyPath = pathname.replace(/\/$/, "");
    if (policyPath === "/privacy" || policyPath === "/terms") {
      res.writeHead(301, { Location: policyPath + ".html" + url.search });
      res.end();
      return;
    }
    if (
      pathname.endsWith(".html") &&
      !["/404.html", "/privacy.html", "/terms.html"].includes(pathname)
    ) {
      res.writeHead(301, {
        Location:
          (pathname === "/index.html" ? "/" : pathname.slice(0, -5)) +
          url.search,
      });
      res.end();
      return;
    }
    const file = resolve(
      root,
      "." + (pathname === "/" ? "/index.html" : pathname.replace(/\/$/, "")),
    );
    if (!file.startsWith(root + sep)) {
      res.writeHead(403);
      res.end();
      return;
    }
    let contents, target;
    for (const candidate of [file, file + ".html"]) {
      try {
        if (!(await stat(candidate)).isFile()) continue;
        contents = await readFile(candidate);
        target = candidate;
        break;
      } catch {
        /* Try exported route. */
      }
    }
    if (!target) {
      res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
      res.end(
        req.method === "HEAD"
          ? undefined
          : await readFile(resolve(root, "404.html")),
      );
      return;
    }
    res.writeHead(200, {
      "Content-Type": types[extname(target)] || "application/octet-stream",
    });
    res.end(req.method === "HEAD" ? undefined : contents);
  } catch {
    res.writeHead(400);
    res.end("Bad request");
  }
}).listen(port, "127.0.0.1", () =>
  console.log(`Static preview: http://127.0.0.1:${port}`),
);
