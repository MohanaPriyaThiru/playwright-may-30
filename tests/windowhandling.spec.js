import { test, expect, chromium } from "@playwright/test";

// test.use({ video: "on" });

test("handling tab or popup", async () => {
  const browser = await chromium.launch({ channel: "msedge" });
  const context = await browser.newContext({
    recordVideo: {
      dir: "videos/",
      size: { width: 1280, height: 720 },
    },
  }); //recording
  const parentPage = await context.newPage();
  await parentPage.goto("https://testautomationpractice.blogspot.com/");
  await parentPage.screenshot({ path: "parentpage.png", fullPage: true });
  const ttpage = await context.pages();
  console.log(ttpage.length);

  const [childPage] = await Promise.all([
    context.waitForEvent("page"),
    parentPage.getByRole("button", { name: "New Tab" }).click(),
  ]); //not working
  await childPage.waitForLoadState();
  const ttpage1 = await context.pages();
  console.log(ttpage1.length);
  await childPage.screenshot({
    path: "screenshotFolder/childpage.jpeg",
    fullPage: true,
  });
  const childpagetitle = await childPage.title();
  console.log(childpagetitle);
  await expect(childPage).toHaveTitle(childpagetitle);
  await childPage
    .locator('[name="q"]')
    .screenshot({ path: "screenshotFolder/element.jpeg" });
  await childPage.locator('[name="q"]').fill("playwright");
  // await childPage.waitForTimeout(2000);
  await parentPage.bringToFront();
  // await childPage.waitForTimeout(2000);
  await parentPage.locator("#monday").scrollIntoViewIfNeeded();
  await parentPage.locator("#monday").check();
  await expect(parentPage.locator("#monday")).toBeChecked();
  await childPage.close();
  await parentPage.close();
  // const videoPath = await parentPage.video()?.path();
  // console.log(videoPath);
  await context.close();
  await browser.close();
});
