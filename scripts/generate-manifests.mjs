import fs from "fs";
import path from "path";

const PUBLIC_DIR = path.resolve("public");
const OUT_FILE = path.resolve("src/data/image-manifests.ts");

const IMAGE_EXTS = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"]);

function scanFolder(baseDir, urlPrefix) {
  const manifests = {};
  if (!fs.existsSync(baseDir)) return manifests;

  const folders = fs
    .readdirSync(baseDir, { withFileTypes: true })
    .filter((d) => d.isDirectory() && !d.name.startsWith("."))
    .map((d) => d.name);

  for (const folder of folders) {
    const folderPath = path.join(baseDir, folder);
    const files = fs
      .readdirSync(folderPath)
      .filter((f) => IMAGE_EXTS.has(path.extname(f).toLowerCase()))
      .sort();

    if (files.length > 0) {
      manifests[folder] = files.map((f) => `${urlPrefix}${folder}/${f}`);
    }
  }

  return manifests;
}

function scanLogos(baseDir, urlPrefix) {
  const manifests = {};
  if (!fs.existsSync(baseDir)) return manifests;

  const folders = fs
    .readdirSync(baseDir, { withFileTypes: true })
    .filter((d) => d.isDirectory() && !d.name.startsWith("."))
    .map((d) => d.name);

  for (const folder of folders) {
    const logosDir = path.join(baseDir, folder, "logos");
    if (!fs.existsSync(logosDir) || !fs.statSync(logosDir).isDirectory()) continue;

    const logos = fs
      .readdirSync(logosDir)
      .filter((f) => IMAGE_EXTS.has(path.extname(f).toLowerCase()))
      .sort();

    if (logos.length > 0) {
      manifests[folder] = logos.map((f) => `${urlPrefix}${folder}/logos/${f}`);
    }
  }

  return manifests;
}

const SKIP_ROOT = new Set(["assets", "projects"]);
const rootFolders = fs
  .readdirSync(PUBLIC_DIR, { withFileTypes: true })
  .filter((d) => d.isDirectory() && !d.name.startsWith(".") && !SKIP_ROOT.has(d.name))
  .map((d) => d.name);

const imageManifests = {};
const logoManifests = {};

for (const folder of rootFolders) {
  const folderPath = path.join(PUBLIC_DIR, folder);
  const files = fs
    .readdirSync(folderPath)
    .filter((f) => IMAGE_EXTS.has(path.extname(f).toLowerCase()))
    .sort();

  if (files.length > 0) {
    imageManifests[folder] = files.map((f) => `/${folder}/${f}`);
  }

  const logosDir = path.join(folderPath, "logos");
  if (fs.existsSync(logosDir) && fs.statSync(logosDir).isDirectory()) {
    const logos = fs
      .readdirSync(logosDir)
      .filter((f) => IMAGE_EXTS.has(path.extname(f).toLowerCase()))
      .sort();
    if (logos.length > 0) {
      logoManifests[folder] = logos.map((f) => `/${folder}/logos/${f}`);
    }
  }
}

const projectManifests = scanFolder(path.join(PUBLIC_DIR, "projects"), "/projects/");

const total = Object.keys(imageManifests).length + Object.keys(projectManifests).length;

const output = `export const IMAGE_MANIFESTS: Record<string, string[]> = ${JSON.stringify(imageManifests, null, 2)};

export const LOGO_MANIFESTS: Record<string, string[]> = ${JSON.stringify(logoManifests, null, 2)};

export const PROJECT_IMAGE_MANIFESTS: Record<string, string[]> = ${JSON.stringify(projectManifests, null, 2)};
`;

fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
fs.writeFileSync(OUT_FILE, output, "utf-8");

console.log(`Generated manifests for ${total} folder(s) → ${OUT_FILE}`);
