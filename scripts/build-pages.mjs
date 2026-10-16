import { spawnSync } from "node:child_process";
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const repository = process.env.GITHUB_REPOSITORY || "Marilaura-Alvarado/marilaura-alvarado-portfolio";
const [owner, name] = repository.split("/");
if (!owner || !name) throw new Error("Expected GITHUB_REPOSITORY in owner/name format.");
const basePath = name.toLowerCase() === `${owner.toLowerCase()}.github.io` ? "" : `/${name}`;
const siteUrl = `https://${owner.toLowerCase()}.github.io${basePath}/`;
const result = spawnSync(process.execPath, [fileURLToPath(new URL("../node_modules/next/dist/bin/next", import.meta.url)), "build", "--webpack"], {
  stdio: "inherit",
  windowsHide: true,
  env: {
    ...process.env,
    NEXT_PUBLIC_BASE_PATH: process.env.NEXT_PUBLIC_BASE_PATH ?? basePath,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || siteUrl,
    NEXT_TELEMETRY_DISABLED: "1",
  },
});
if (result.status !== 0) process.exit(result.status ?? 1);
writeFileSync(new URL("../out/.nojekyll", import.meta.url), "");
