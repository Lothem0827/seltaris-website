/**
 * Rewrites /images/*.{png,jpg,svg} references to .webp when a sibling WebP exists.
 */
import fs from "node:fs";
import path from "node:path";

const SRC = path.join(process.cwd(), "src");
const PUBLIC_IMAGES = path.join(process.cwd(), "public", "images");

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (/\.(tsx?|css)$/.test(entry.name)) files.push(full);
  }
  return files;
}

const pattern =
  /\/images\/[a-zA-Z0-9_./-]+\.(?:png|jpe?g|svg)/g;

let updatedFiles = 0;
let replacements = 0;

for (const file of walk(SRC)) {
  let content = fs.readFileSync(file, "utf8");
  const original = content;

  content = content.replace(pattern, (match) => {
    const rel = match.replace(/^\//, "");
    const diskPath = path.join(process.cwd(), "public", rel);
    const webpPath = diskPath.replace(/\.(png|jpe?g|svg)$/i, ".webp");
    if (!fs.existsSync(webpPath)) return match;
    const webpRef = match.replace(/\.(png|jpe?g|svg)$/i, ".webp");
    if (webpRef !== match) replacements++;
    return webpRef;
  });

  if (content !== original) {
    fs.writeFileSync(file, content);
    updatedFiles++;
    console.log(path.relative(process.cwd(), file));
  }
}

console.log(`Updated ${updatedFiles} files (${replacements} refs).`);
