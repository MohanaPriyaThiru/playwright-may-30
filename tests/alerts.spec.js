import { test, expect } from "@playwright/test";
test.use()
test("Alerts", async ({ page }) => {
  await page.goto("https://letcode.in/alert");
  //   await page.setViewportSize({ width: 1920, height: 1080 });
  await page.on("dialog", async (alert) => {
    console.log(alert.type()); //returns the alert type
    console.log(alert.message()); //returns message given in the popup;
    await page.waitForTimeout(3000);
    // await alert.accept("priya"); //Clicks OK +value passed
    // await expect(page.locator("#myName")).toContainText("priya");
    await alert.dismiss(); //Clicks cancel
  });
  await page.getByRole("button", { name: "Prompt Alert" }).click();
  await page.waitForTimeout(5000);

  await page.getByRole("button", { name: "Modern Alert" }).click();
  await page.waitForTimeout(3000);
  await page.getByLabel("close", { exact: true }).click();
  // await page.locator().setInputFiles("testData/data.json")
});
