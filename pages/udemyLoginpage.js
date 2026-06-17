import { expect } from "@playwright/test";
export class UdemyLogin {
  constructor(page) {
    this.page = page;
    this.username = page.locator("#username");
    this.password = page.locator("#password");
    this.checkBox = page.locator("#terms");
    this.loginbtn = page.locator("#signInBtn");
  }
  async navigate() {
    await this.page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  }

  async rsLogin() {
    // ensure we're on the login page before interacting
    await this.navigate();
    await this.username.fill("rahulshettyacademy");
    await this.password.fill("Learning@830$3mK2");
    await this.checkBox.check();
    // verify the inputs were filled and checkbox is checked before submitting
    await expect(this.username).toHaveValue("rahulshettyacademy");
    await expect(this.password).toHaveValue("Learning@830$3mK2");
    await expect(this.checkBox).toBeChecked();

    await this.loginbtn.click();
  }
}
