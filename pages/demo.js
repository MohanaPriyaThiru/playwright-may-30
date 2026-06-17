import { expect } from "@playwright/test";

export class loginpage {
  constructor(page) {
    this.page = page;
    this.loginHome = page.locator('[id="login2"]');
    this.homeButton = page.locator('//a[text()="Home "]');
    this.uName = page.locator('[id="loginusername"]');
    this.pwdHome = page.locator('[id="loginpassword"]');
    this.loginbutton = page.locator('//button[text()="Log in"]');
    this.UserInfo = page.locator('//a[text()="Welcome Sathishbadri"]');
  }

  async navigate(URL) {
    await this.page.goto(URL);
    await expect(this.page).toHaveTitle(/STORE/);
    const titileText = await this.page.title();
    console.log(titileText);
  }

  async loginwithvalidCred(Uname, PWD) {
    await this.loginHome.click();
    await this.page.pause();
    await this.uName.fill(Uname);
    await this.pwdHome.fill(PWD);
    await this.loginbutton.click({ focus: true, force: true });
  }
  async associateValidation() {
    await this.page.waitForTimeout(2000);
    await this.UserInfo.waitFor({ state: "visible", timeout: 50000 });
    await expect(this.UserInfo).toHaveText("Welcome Sathishbadri");
  }
}
