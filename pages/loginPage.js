import { expect } from "@playwright/test";
import { TIMEOUT } from "node:dns";
export class LoginPage {
  constructor(page) {
    this.page = page;
    this.userName = page.locator("#username");
    this.password = page.locator('[name="password"]');
    this.logo1 = page.getByAltText("AdactIn Group", { exact: true });
    this.loginBtn = page.locator(".login_button");
    this.forgetPwd = page.getByRole("link", { name: "Forgot Password?" });
  }

  async navigate(url) {
    await this.page.goto(url, { TIMEOUT: 80000 });
    await expect(this.page).toHaveTitle(/Hotel Reservation System/);
  }
  async loginMethod(userName, password) {
    const visi = await this.userName.isVisible();
    console.log(visi);
    await this.userName.fill(userName);
    await this.password.fill(password);
    await this.loginBtn.click();
  }

  async isLogoVisible() {
    const logo = await this.logo1.isVisible();
    console.log(logo);
  }
}
