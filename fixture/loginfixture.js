import { test as base } from "@playwright/test";
import { UdemyLogin } from "../pages/udemyLoginpage";

export const testFixture = base.extend({
  loginFix: async ({ page }, use) => {
    const logObj = new UdemyLogin(page);
    await logObj.rsLogin();
    await use(page);
  },
});
