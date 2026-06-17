import { test, expect } from "@playwright/test";
import { loginpage } from "../pages/demo";
import demoData from "../testData/demoData.json";

test("login with valid credentials", async ({ page }) => {
  const blazeDemoHomePage = new loginpage(page);
  await blazeDemoHomePage.navigate(demoData.URL);
  await blazeDemoHomePage.loginwithvalidCred(demoData.Uname, demoData.PWD);
  await blazeDemoHomePage.associateValidation();
  await page.waitForTimeout(3000);
});
