import http from "node:http";
import { createReadStream, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../out/", import.meta.url));
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || "").replace(/\/$/, "");
const mime = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".svg": "image/svg+xml", ".pdf": "application/pdf", ".woff2": "font/woff2", ".mp4": "video/mp4", ".webp": "image/webp", ".jpg": "image/jpeg", ".png": "image/png", ".txt": "text/plain" };
http.createServer((req, res) => {
  try {
    let requestPath = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
    if (basePath) {
      if (requestPath === basePath) { res.writeHead(308, { Location: `${basePath}/` }).end(); return; }
      if (!requestPath.startsWith(`${basePath}/`)) { res.writeHead(404).end("Not found"); return; }
      requestPath = requestPath.slice(basePath.length);
    }
    let file = path.resolve(root, `.${requestPath}`);
    const relative = path.relative(root, file);
    if (relative.startsWith("..") || path.isAbsolute(relative)) { res.writeHead(403).end(); return; }
    if (statSync(file).isDirectory()) file = path.join(file, "index.html");
    const stat = statSync(file);
    const type = mime[path.extname(file)] || "application/octet-stream";
    const range = req.headers.range?.match(/^bytes=(\d+)-(\d*)$/);
    if (range) {
      const start = Number(range[1]);
      const end = range[2] ? Math.min(Number(range[2]), stat.size - 1) : stat.size - 1;
      if (start > end || start >= stat.size) { res.writeHead(416, { "Content-Range": `bytes */${stat.size}` }).end(); return; }
      res.writeHead(206, { "Content-Type": type, "Content-Length": end - start + 1, "Content-Range": `bytes ${start}-${end}/${stat.size}`, "Accept-Ranges": "bytes" });
      createReadStream(file, { start, end }).pipe(res);
    } else {
      res.writeHead(200, { "Content-Type": type, "Content-Length": stat.size, "Accept-Ranges": "bytes" });
      createReadStream(file).pipe(res);
    }
  } catch { res.writeHead(404).end("Not found"); }
}).listen(3001, "127.0.0.1", () => console.log(`Local: http://127.0.0.1:3001${basePath}/`));
