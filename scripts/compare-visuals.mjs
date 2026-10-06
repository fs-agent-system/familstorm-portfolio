import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

const args = process.argv.slice(2);
let targetUrl = "https://hagdonit.dev/";
let outDir = path.join(rootDir, "artifacts/visual-qa");

for (const arg of args) {
  if (arg.startsWith("--url=")) targetUrl = arg.split("=")[1];
  if (arg.startsWith("--output-dir=")) outDir = path.resolve(arg.split("=")[1]);
}

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const SECTIONS = [
  "hero",
  "overview",
  "architecture",
  "workflow",
  "showcase",
  "metrics",
  "collaboration",
  "contact",
];

const BREAKPOINTS = [
  { name: "Desktop", key: "desktop", width: 1440, height: 900 },
  { name: "Mobile", key: "mobile", width: 375, height: 812 },
];

async function capture() {
  console.log(`Starting visual capture against: ${targetUrl}`);
  console.log(`Output directory: ${outDir}\n`);

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();

  const mockupHtml = "file://" + path.join(rootDir, "datas/design/generated/m16-landing-redesign/mockup.html");

  for (const bp of BREAKPOINTS) {
    console.log(`[Capture] Processing ${bp.name} (${bp.width}x${bp.height})...`);

    // Live Target
    const pageLive = await context.newPage();
    await pageLive.setViewportSize({ width: bp.width, height: bp.height });
    await pageLive.goto(targetUrl, { waitUntil: "networkidle" });

    // Mockup Reference
    const pageMock = await context.newPage();
    await pageMock.setViewportSize({ width: bp.width, height: bp.height });
    await pageMock.goto(mockupHtml, { waitUntil: "networkidle" });

    // Full-page screenshots
    const liveFull = path.join(outDir, `live-${bp.key}.png`);
    const mockFull = path.join(outDir, `mockup-rendered-${bp.key}.png`);
    await pageLive.screenshot({ path: liveFull, fullPage: true });
    await pageMock.screenshot({ path: mockFull, fullPage: true });

    // Section screenshots
    for (const sec of SECTIONS) {
      const liveLoc = pageLive.locator(`#${sec}`);
      const mockLoc = pageMock.locator(`#${sec}`);

      if ((await liveLoc.count()) > 0) {
        await liveLoc.screenshot({ path: path.join(outDir, `live-${bp.key}-${sec}.png`) });
      }
      if ((await mockLoc.count()) > 0) {
        await mockLoc.screenshot({ path: path.join(outDir, `mockup-${bp.key}-${sec}.png`) });
      }
    }

    await pageLive.close();
    await pageMock.close();
  }

  await browser.close();
  console.log("\nCapture completed successfully.\n");
}

function runDiffs() {
  const pythonBin = fs.existsSync("/home/familstorm/.hermes/hermes-agent/venv/bin/python3")
    ? "/home/familstorm/.hermes/hermes-agent/venv/bin/python3"
    : "python3";

  const pyScript = `
import os, sys, math, json
from PIL import Image, ImageChops

def compare(path1, path2, diff_out, threshold=30):
    if not (os.path.exists(path1) and os.path.exists(path2)):
        return None
    img1 = Image.open(path1).convert('RGB')
    img2 = Image.open(path2).convert('RGB')

    max_w = max(img1.width, img2.width)
    max_h = max(img1.height, img2.height)

    bg_color = (11, 15, 25) # #0B0F19

    c1 = Image.new('RGB', (max_w, max_h), bg_color)
    c1.paste(img1, (0, 0))

    c2 = Image.new('RGB', (max_w, max_h), bg_color)
    c2.paste(img2, (0, 0))

    diff = ImageChops.difference(c1, c2)
    diff_pixels = 0
    total_pixels = max_w * max_h

    pix1 = c1.load()
    pix2 = c2.load()
    diff_img = Image.new('RGB', (max_w, max_h), (0, 0, 0))
    d_pix = diff_img.load()

    for y in range(max_h):
        for x in range(max_w):
            r1, g1, b1 = pix1[x, y]
            r2, g2, b2 = pix2[x, y]
            dr = r1 - r2
            dg = g1 - g2
            db = b1 - b2
            dist = math.sqrt(dr*dr + dg*dg + db*db)
            if dist > threshold:
                diff_pixels += 1
                d_pix[x, y] = (255, 0, 80)
            else:
                d_pix[x, y] = (r1 // 4, g1 // 4, b1 // 4)

    if diff_out:
        diff_img.save(diff_out)
    diff_pct = (diff_pixels / total_pixels) * 100.0
    return {
        'width': max_w,
        'live_h': img1.height,
        'mock_h': img2.height,
        'total': total_pixels,
        'diff': diff_pixels,
        'pct': round(diff_pct, 2)
    }

out_dir = sys.argv[1]
root_dir = sys.argv[2]
results = {}

# Full page vs original exported mockups
results['full_desktop'] = compare(
    f'{out_dir}/live-desktop.png',
    f'{root_dir}/datas/design/generated/m16-landing-redesign/mockup-desktop.png',
    f'{out_dir}/diff-full-desktop.png'
)
results['full_mobile'] = compare(
    f'{out_dir}/live-mobile.png',
    f'{root_dir}/datas/design/generated/m16-landing-redesign/mockup-mobile.png',
    f'{out_dir}/diff-full-mobile.png'
)

sections = ['hero', 'overview', 'architecture', 'workflow', 'showcase', 'metrics', 'collaboration', 'contact']
for s in sections:
    results[f'desktop_{s}'] = compare(
        f'{out_dir}/live-desktop-{s}.png',
        f'{out_dir}/mockup-desktop-{s}.png',
        f'{out_dir}/diff-desktop-{s}.png'
    )
    results[f'mobile_{s}'] = compare(
        f'{out_dir}/live-mobile-{s}.png',
        f'{out_dir}/mockup-mobile-{s}.png',
        f'{out_dir}/diff-mobile-{s}.png'
    )

print(json.dumps(results))
`;

  const output = execFileSync(pythonBin, ["-c", pyScript, outDir, rootDir], { encoding: "utf-8" });
  const results = JSON.parse(output);

  console.log("### Visual Comparison Report (Numeric Table)\n");
  console.log("| Scope | Breakpoint | Target Size | Ref Size | Total Px | Diff Px | % Diff | Pass/Fail | Notes |");
  console.log("|---|---|---|---|---|---|---|---|---|");

  const printRow = (label, bp, data, threshold, note) => {
    if (!data) return;
    const pf = data.pct <= threshold ? "PASS" : "FAIL";
    console.log(
      `| ${label} | ${bp} | ${data.width}x${data.live_h} | ${data.width}x${data.mock_h} | ${data.total.toLocaleString()} | ${data.diff.toLocaleString()} | ${data.pct}% | ${pf} | ${note} |`
    );
  };

  printRow("Full Page", "Desktop", results["full_desktop"], 30.0, "Includes #33 Top Menu (65px) & #35 PDF Section (489px)");
  printRow("Full Page", "Mobile", results["full_mobile"], 35.0, "Includes #33 Mobile Nav & #35 PDF Section");

  for (const s of SECTIONS) {
    const sName = s.charAt(0).toUpperCase() + s.slice(1);
    printRow(`Section: ${sName}`, "Desktop", results[`desktop_${s}`], 25.0, "Subpixel font & layout alignment");
    printRow(`Section: ${sName}`, "Mobile", results[`mobile_${s}`], 30.0, "Single-column fluid wrap");
  }
}

async function main() {
  await capture();
  runDiffs();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
