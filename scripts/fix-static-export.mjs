/**
 * Next.js static export writes flight data as nested folders, e.g.
 *   human-touch/__next.human-touch/__PAGE__.txt
 * but client navigation requests dot paths:
 *   human-touch/__next.human-touch.__PAGE__.txt
 *
 * This script creates the dot-path alias files and adds local preview rewrites.
 */
import fs from "node:fs";
import path from "node:path";

const OUT_DIR = path.join(process.cwd(), "out");

function copyAlias(source, destination) {
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.copyFileSync(source, destination);
}

function flattenNextDirectory(parentDir, nextDirName) {
  const nextDirPath = path.join(parentDir, nextDirName);
  if (!fs.existsSync(nextDirPath) || !fs.statSync(nextDirPath).isDirectory()) {
    return;
  }

  for (const entry of fs.readdirSync(nextDirPath, { withFileTypes: true })) {
    const entryPath = path.join(nextDirPath, entry.name);

    if (entry.isDirectory()) {
      for (const file of fs.readdirSync(entryPath)) {
        if (!file.endsWith(".txt")) continue;
        copyAlias(
          path.join(entryPath, file),
          path.join(parentDir, `${nextDirName}.${entry.name}.${file}`),
        );
      }

      const segmentTxt = path.join(nextDirPath, `${entry.name}.txt`);
      if (fs.existsSync(segmentTxt)) {
        copyAlias(
          segmentTxt,
          path.join(parentDir, `${nextDirName}.${entry.name}.txt`),
        );
      }
      continue;
    }

    if (entry.name.endsWith(".txt")) {
      copyAlias(
        entryPath,
        path.join(parentDir, `${nextDirName}.${entry.name}`),
      );
    }
  }
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;

    const fullPath = path.join(dir, entry.name);
    if (entry.name === "_next") continue;

    if (entry.name.startsWith("__next.")) {
      flattenNextDirectory(dir, entry.name);
      continue;
    }

    walk(fullPath);
  }
}

function writeServeConfig() {
  const serveConfig = {
    public: ".",
    trailingSlash: true,
    redirects: [
      {
        source: "/:section/_next/static/:path*",
        destination: "/_next/static/:path*",
      },
    ],
  };

  fs.writeFileSync(
    path.join(OUT_DIR, "serve.json"),
    `${JSON.stringify(serveConfig, null, 2)}\n`,
  );
}

if (!fs.existsSync(OUT_DIR)) {
  console.error("fix-static-export: out/ not found. Run next build first.");
  process.exit(1);
}

walk(OUT_DIR);
writeServeConfig();
console.log("fix-static-export: created RSC aliases and out/serve.json");
