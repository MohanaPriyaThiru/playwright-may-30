import { test } from "@playwright/test";
// changed in file day1
// 1234567
test("TestName", async ({ page }) => {
  // const browser = await chromium.launch({
  //   headless: false,
  // });
  // const tab = await browser.newContext();
  // const page = await tab.newPage();
  await page.goto("https://www.google.com/");
});

test("examnple", async ({ page }) => {
  await page.goto("https://www.facebook.com/");
});
