import { test, expect } from "@playwright/test";

test("Frames using locator", async ({ page }) => {
  await page.goto("https://letcode.in/frame");
  await page.frameLocator("#firstFr").locator('[name="fname"]').fill("Priya");
  await page
    .frameLocator("#firstFr")
    .locator('//input[@name="lname"]')
    .fill("Thiru");
  await page
    .frameLocator("#firstFr")
    .frameLocator('[src="innerframe"]')
    .locator('[placeholder="Enter email"]')
    .fill("priya@123");
  await page.waitForTimeout(3000);
});

test("frames using  index", async ({ page }) => {
  await page.goto("https://letcode.in/frame");
  const frames = await page.frames();
  frames.forEach((f, i) => {
    console.log(`index ${i} ${f.url()}`);
  });
  await frames[1].locator('//input[@name="lname"]').fill("Thiru");
  await frames[7].locator('[placeholder="Enter email"]').fill("priya@123");
});
