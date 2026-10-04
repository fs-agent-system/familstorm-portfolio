#!/usr/bin/env node
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const outDir = path.join(rootDir, "out");
const publicDir = path.join(rootDir, "public");
const pdfFileName = "familstorm-capability-onepager.pdf";

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
  ".ttf": "font/ttf",
  ".pdf": "application/pdf",
  ".txt": "text/plain; charset=utf-8",
};

function serveStatic(req, res) {
  let reqPath = decodeURIComponent(req.url?.split("?")[0] || "/");
  if (reqPath === "/" || reqPath === "") {
    reqPath = "/index.html";
  }

  let filePath = path.join(outDir, reqPath);

  // If path doesn't have an extension, try .html or /index.html
  if (!path.extname(filePath)) {
    if (fs.existsSync(filePath + ".html")) {
      filePath = filePath + ".html";
    } else if (fs.existsSync(path.join(filePath, "index.html"))) {
      filePath = path.join(filePath, "index.html");
    }
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[ext] || "application/octet-stream";
    res.writeHead(200, { "Content-Type": contentType });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found: " + reqPath);
  }
}

async function startServer() {
  if (!fs.existsSync(outDir) || (!fs.existsSync(path.join(outDir, "print.html")) && !fs.existsSync(path.join(outDir, "print/index.html")))) {
    throw new Error("Missing static build output in out/. Run 'npm run build' before generating PDF.");
  }

  const server = http.createServer(serveStatic);
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  const address = server.address();
  const port = typeof address === "object" && address ? address.port : 3000;
  return { server, port };
}

async function main() {
  const isPostbuild = process.argv.includes("--postbuild");
  console.log(`[generate-pdf] Generating PDF for Familstorm capability one-pager...`);

  let server;
  let browser;

  try {
    const serverInfo = await startServer();
    server = serverInfo.server;
    const url = `http://127.0.0.1:${serverInfo.port}/print`;
    console.log(`[generate-pdf] Serving print route at ${url}`);

    try {
      browser = await chromium.launch({
        headless: true,
        args: [
          "--no-sandbox",
          "--disable-setuid-sandbox",
          "--disable-dev-shm-usage",
          "--disable-gpu",
        ],
      });
    } catch (err) {
      if (isPostbuild) {
        console.warn(`[generate-pdf] Browser launch skipped in postbuild: ${err.message}`);
        console.warn(`[generate-pdf] Existing public/${pdfFileName} will be used.`);
        if (server) server.close();
        process.exit(0);
      }
      throw err;
    }

    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "networkidle" });
    await page.emulateMedia({ media: "print" });

    // Output destination paths
    const outPdfPath = path.join(outDir, pdfFileName);
    const publicPdfPath = path.join(publicDir, pdfFileName);

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
      preferCSSPageSize: true,
      margin: {
        top: "0mm",
        right: "0mm",
        bottom: "0mm",
        left: "0mm",
      },
    });

    // Write to both out/ and public/
    fs.writeFileSync(outPdfPath, pdfBuffer);
    if (fs.existsSync(publicDir)) {
      fs.writeFileSync(publicPdfPath, pdfBuffer);
    }

    // Mirror official quotation/capability PDF from datas/docs if present
    const quoteSrc = path.join(rootDir, "datas", "docs", "familstorm-onevalue-capability-quote.pdf");
    if (fs.existsSync(quoteSrc)) {
      fs.copyFileSync(quoteSrc, path.join(outDir, "familstorm-onevalue-capability-quote.pdf"));
      if (fs.existsSync(publicDir)) {
        fs.copyFileSync(quoteSrc, path.join(publicDir, "familstorm-onevalue-capability-quote.pdf"));
      }
    }

    // Verify PDF header and minimum size
    const stats = fs.statSync(outPdfPath);
    const header = fs.readFileSync(outPdfPath, { encoding: "utf8", flag: "r" }).slice(0, 5);

    if (stats.size < 5000 || !header.startsWith("%PDF")) {
      throw new Error(`Generated PDF invalid: size=${stats.size} bytes, header=${header}`);
    }

    console.log(`[generate-pdf] Successfully generated: ${outPdfPath} (${(stats.size / 1024).toFixed(1)} KB)`);
    console.log(`[generate-pdf] Updated static asset: ${publicPdfPath}`);
  } finally {
    if (browser) {
      await browser.close();
    }
    if (server) {
      await new Promise((resolve) => server.close(resolve));
    }
  }
}

main().catch((err) => {
  console.error(`[generate-pdf] ERROR:`, err);
  process.exit(1);
});
