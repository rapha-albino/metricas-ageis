import { access, mkdir, writeFile } from "node:fs/promises";
import { constants } from "node:fs";
import { dirname, resolve } from "node:path";

const revision = "8bec84f31c5237185d539a5201acbfbc13c1a1c1";
const articles = [
  "metricas/metricas-de-fluxo.md",
  "metricas/indicadores-de-negocio.md",
  "metricas/metricas-de-entrega-accelerate.md",
];
const contentRoot = resolve("content");

for (const article of articles) {
  const localPath = resolve(contentRoot, article);
  try {
    await access(localPath, constants.R_OK);
    continue;
  } catch {
    const url = `https://raw.githubusercontent.com/rapha-albino/insights/${revision}/${article}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Could not retrieve ${article}: ${response.status} ${response.statusText}`);
    await mkdir(dirname(localPath), { recursive: true });
    await writeFile(localPath, await response.text());
  }
}
