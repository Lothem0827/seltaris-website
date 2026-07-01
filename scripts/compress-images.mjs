/**
 * Converts public/images files over 200KB to WebP.
 * Skips svg-animations (used by interactive SVG components).
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.join(process.cwd(), "public", "images");
const MIN_BYTES = 200 * 1024;
const SKIP_DIRS = new Set(["svg-animations"]);

const maxWidths = {
  "home/hero-background": 1920,
  "home/hero-background-mobile": 768,
  "human-touch": 1400,
  "health-check-report/overview-photo": 1200,
  default: 1200,
};

function getMaxWidth(relPath) {
  for (const [key, width] of Object.entries(maxWidths)) {
    if (key !== "default" && relPath.includes(key)) return width;
  }
  if (relPath.includes("/home/") && /\.svg$/i.test(relPath)) return 850;
  return maxWidths.default;
}

async function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue;
      await walk(full, files);
    } else {
      files.push(full);
    }
  }
  return files;
}

const files = await walk(ROOT);
let converted = 0;
let skipped = 0;

for (const file of files) {
  const stat = fs.statSync(file);
  if (stat.size <= MIN_BYTES) continue;

  const rel = path.relative(ROOT, file).replace(/\\/g, "/");
  const ext = path.extname(file).toLowerCase();
  if (![".png", ".jpg", ".jpeg", ".svg"].includes(ext)) {
    skipped++;
    continue;
  }

  const out = file.replace(/\.(png|jpe?g|svg)$/i, ".webp");
  if (fs.existsSync(out) && fs.statSync(out).mtimeMs >= stat.mtimeMs) {
    skipped++;
    continue;
  }

  const maxWidth = getMaxWidth(rel);

  try {
    let pipeline = sharp(file, { density: 150 });
    const meta = await pipeline.metadata();
    if (meta.width && meta.width > maxWidth) {
      pipeline = pipeline.resize({ width: maxWidth, withoutEnlargement: true });
    }

    await pipeline.webp({ quality: 82, effort: 6 }).toFile(out);
    const outSize = fs.statSync(out).size;
    console.log(
      `${rel}: ${(stat.size / 1024).toFixed(0)}KB -> ${(outSize / 1024).toFixed(0)}KB`,
    );
    converted++;
  } catch (error) {
    console.warn(`SKIP ${rel}: ${error instanceof Error ? error.message : error}`);
    skipped++;
  }
}

console.log(`Done. Converted ${converted}, skipped ${skipped}.`);
