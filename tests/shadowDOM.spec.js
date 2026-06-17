import { test, expect } from "@playwright/test";

test("Shadow Example", async ({ page }) => {
  await page.goto("https://selectorshub.com/xpath-practice-page/");
  await page.getByRole("textbox", { name: "user name field" }).fill("Priya");
  await page.locator('[id="pizza"]').fill("cheese pizza");
  await page.locator('[id="pwd"]').scrollIntoViewIfNeeded();
  await page.locator('[id="pwd"]').fill("Priya@123");
  await page.waitForTimeout(5000);
});

