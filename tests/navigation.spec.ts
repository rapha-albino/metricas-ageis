import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const purchaseUrl = "https://www.casadocodigo.com.br/products/livro-metricas-ageis";
const courseUrl = "https://softwarezen.me/ecossistema/produto/metricas/";

test("navigation reaches every section", async ({ page }) => {
  await page.goto("/");
  for (const [name, id] of [["O problema", "problema"], ["O livro", "livro"], ["O que mudou", "atualizacao"], ["Quem leu", "leitores"], ["O curso", "curso"]]) {
    await page.getByRole("link", { name, exact: true }).click();
    await expect(page).toHaveURL(new RegExp(`#${id}$`));
    await expect(page.locator(`#${id}`)).toBeVisible();
  }
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
  await expect(page.locator('script[src="https://www.googletagmanager.com/gtag/js?id=G-61LGNYRFLH"]')).toHaveCount(1);
});

test("the privacy page explains analytics and lets visitors revisit consent", async ({ page }) => {
  await page.goto("/privacidade/");
  await expect(page.getByRole("heading", { name: "Informações sobre dados e navegação" })).toBeVisible();
  await page.getByRole("button", { name: "Rever preferências de métricas" }).click();
  await expect(page.getByRole("complementary", { name: "Preferências de privacidade" })).toBeVisible();
});

test("the flow article is available and returns to the book", async ({ page }) => {
  await page.goto("/artigos/metricas-de-fluxo/");
  await expect(page.getByRole("heading", { level: 1, name: /Métricas de fluxo/ })).toBeVisible();
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

for (const path of ["/", "/artigos/metricas-de-fluxo/", "/privacidade/"]) {
  test(`${path} has no automatically detectable accessibility violations`, async ({ page }) => {
    await page.goto(path);
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });
}

test("unknown routes offer a path home", async ({ page }) => {
  await page.goto("/ausente");
  await expect(page.getByRole("heading", { name: "Este caminho não está no fluxo." })).toBeVisible();
});
