// When BASE_PATH is set (e.g. /lacquer-lash), the HTML points at /lacquer-lash/assets/...,
// but the build writes static files to the root of .output/public. This moves them
// into .output/public/<base>/ so Cloudflare's asset server finds them at the same URLs.
// With no BASE_PATH (Lovable preview, local dev) it does nothing.
import { existsSync, mkdirSync, readdirSync, readFileSync, renameSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const base = (process.env.BASE_PATH ?? "").replace(/^\/+|\/+$/g, "");
const publicDir = ".output/public";

if (!base) process.exit(0);
if (!existsSync(publicDir)) {
  console.error(`[nest-public] ${publicDir} not found; did the build run?`);
  process.exit(1);
}

const target = join(publicDir, base);
mkdirSync(target, { recursive: true });

for (const entry of readdirSync(publicDir)) {
  // _headers and _redirects must stay at the root for Cloudflare to read them.
  if (entry === base || entry === "_headers" || entry === "_redirects") continue;
  renameSync(join(publicDir, entry), join(target, entry));
}

const headersFile = join(publicDir, "_headers");
if (existsSync(headersFile)) {
  const rewritten = readFileSync(headersFile, "utf8").replace(/^\/(?!\s)/gm, `/${base}/`);
  writeFileSync(headersFile, rewritten);
}

console.log(`[nest-public] Static files moved under /${base}/`);
