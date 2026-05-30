import { test } from "@playwright/test";
// added ne line to it
test("Amazon test", async ({ page }) => {
  await page.goto("https://www.amazon.in/");
  await page.waitForTimeout(3000);
});

test("FB test", async ({ page }) => {
  await page.goto("https://www.facebook.com/login.php");
  await page.waitForTimeout(3000);
});

test("google ", async ({ page }) => {
  // const browser = await chromium.launch({
  //   headless: false,
  // });
  // const tab = await browser.newContext();
  // const page = await tab.newPage();
  await page.goto("https://www.google.com/");
  await page.waitForTimeout(3000);
});
