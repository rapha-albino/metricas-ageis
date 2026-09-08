import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const purchaseUrl = "https://www.casadocodigo.com.br/products/livro-metricas-ageis";
const courseUrl = "https://softwarezen.me/ecossistema/produto/metricas/";

test("navigation reaches every section", async ({ page }) => {
  await page.goto("/");
  for (const [name, id] of [["O problema", "problema"], ["O livro", "livro"], ["O que mudou", "atualizacao"], ["Quem leu", "leitores"], ["Autor", "autor"], ["O curso", "curso"]]) {
    await page.getByRole("link", { name, exact: true }).click();
    await expect(page).toHaveURL(new RegExp(`#${id}$`));
    await expect(page.locator(`#${id}`)).toBeVisible();
    await expect(page.getByRole("link", { name, exact: true })).toHaveAttribute("aria-current", "location");
  }
});

test("the commercial author section presents Raphael's credentials and course path", async ({ page }) => {
  await page.goto("/");
  const author = page.locator("#autor");
  await expect(author.getByRole("heading", { name: /Eu trabalho/ })).toBeVisible();
  await expect(author).toContainText("18+");
  await expect(author.getByRole("link", { name: "Conhecer o curso" })).toHaveAttribute("href", "https://softwarezen.me/ecossistema/produto/metricas/");
});

test("reader voices present attributed application and critical readings", async ({ page }) => {
  await page.goto("/");
  const voices = page.locator(".reader-voice");
  await expect(voices).toHaveCount(4);
  await expect(voices.filter({ hasText: "Edson Jesus" })).toContainText("Auditoria de TI");
  await expect(voices.filter({ hasText: "Pablo Silva" })).toContainText("Leitura crítica");
});

test("book and course have distinct official destinations", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator(`a[href="${purchaseUrl}"]`).first()).toHaveAttribute("target", "_blank");
  await expect(page.locator(`a[href="${courseUrl}"]`).first()).toHaveAttribute("target", "_blank");
  expect(purchaseUrl).not.toBe(courseUrl);
});

test("analytics loads only after the visitor accepts it", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("complementary", { name: "Preferências de privacidade" })).toBeVisible();
  await expect(page.locator('script[src*="googletagmanager.com/gtag/js"]')).toHaveCount(0);
  await page.getByRole("button", { name: "Aceitar" }).click();
  await expect(page.locator('[data-consent-banner]')).toBeHidden();
  await expect(page.locator('script[src="https://www.googletagmanager.com/gtag/js?id=G-61LGNYRFLH"]')).toHaveCount(1);
});

test("rejecting analytics hides the banner without loading Google Analytics", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Recusar" }).click();
  await expect(page.locator('[data-consent-banner]')).toBeHidden();
  await expect(page.locator('script[src*="googletagmanager.com/gtag/js"]')).toHaveCount(0);
});

test("the privacy page explains analytics and lets visitors revisit consent", async ({ page }) => {
  await page.goto("/privacidade/");
  await expect(page.getByRole("heading", { name: "Dados de navegação, sem enrolação." })).toBeVisible();
  await page.getByRole("button", { name: "Rever preferências de métricas" }).click();
  await expect(page.getByRole("complementary", { name: "Preferências de privacidade" })).toBeVisible();
});

test("the three follow-on articles render with calculated reading time", async ({ page }) => {
  for (const [path, heading] of [["/artigos/metricas-de-fluxo/", /Métricas de fluxo/], ["/artigos/indicadores-de-negocio/", /resultado do negócio/], ["/artigos/metricas-de-entrega-accelerate/", /Accelerate/]] as const) {
    await page.goto(path);
    await expect(page.getByRole("heading", { level: 1, name: heading })).toBeVisible();
    await expect(page.locator(".article-meta")).toContainText(/min de leitura/);
    await expect(page.getByRole("link", { name: "O que mudou", exact: true })).toHaveAttribute("aria-current", "location");
  }
  await page.getByRole("link", { name: "← Voltar ao livro" }).click();
  await expect(page).toHaveURL(/\/#atualizacao$/);
});

test("mobile menu is usable without horizontal overflow", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const menu = page.locator("[data-menu-toggle]");
  await expect(menu).toBeVisible();
  await menu.click();
  await expect(menu).toHaveAttribute("aria-expanded", "true");
  await expect(page.getByRole("link", { name: "Adquirir", exact: true })).toBeVisible();
  expect(await page.locator("main").evaluate((main) => main.scrollWidth <= window.innerWidth)).toBe(true);
});

test("skip link reaches content", async ({ page }) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: "Pular para o conteúdo" })).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("main")).toBeFocused();
});

for (const path of ["/", "/artigos/metricas-de-fluxo/", "/artigos/indicadores-de-negocio/", "/artigos/metricas-de-entrega-accelerate/", "/privacidade/"]) {
  test(`${path} has no automatically detectable accessibility violations`, async ({ page }) => {
    await page.goto(path);
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });
}

test("the home page provides icon, social image, vector charts, and canonical metadata", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", "https://metricasageis.com.br/");
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute("content", "https://metricasageis.com.br/images/og-metricas-ageis.png");
  await expect(page.locator('link[rel="icon"][href="/favicon.svg"]')).toHaveCount(1);
  await expect(page.locator('img[src="/images/cfd-fluxo.svg"]')).toHaveCount(1);
  await expect(page.locator('img[src="/images/histograma-lead-time.svg"]')).toHaveCount(1);
  await expect(page.locator('img[src="/images/burnup.svg"]')).toHaveCount(1);
  const socialImage = await page.request.get("/images/og-metricas-ageis.png");
  expect(socialImage.ok()).toBe(true);
  await expect(page.locator(".course-price")).toContainText("R$ 197 /mês");
});

test("unknown routes offer a path home", async ({ page }) => {
  await page.goto("/ausente");
  await expect(page.getByRole("heading", { name: "Este caminho não está no fluxo." })).toBeVisible();
});
