# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: rsAcademy.spec.js >> sample test
- Location: tests\rsAcademy.spec.js:6:12

# Error details

```
Test timeout of 30000ms exceeded while setting up "loginFix".
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#username')

```

# Test source

```ts
  1  | import { expect } from "@playwright/test";
  2  | export class UdemyLogin {
  3  |   constructor(page) {
  4  |     this.page = page;
  5  |     this.username = page.locator("#username");
  6  |     this.password = page.locator("#password");
  7  |     this.checkBox = page.locator("#terms");
  8  |     this.loginbtn = page.locator("#signInBtn");
  9  |   }
  10 |   async navigate() {
  11 |     await this.page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  12 |   }
  13 | 
  14 |   async rsLogin() {
> 15 |     await this.username.fill("rahulshettyacademy");
     |                         ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  16 |     await this.password.fill("Learning@830$3mK2");
  17 |     await this.checkBox.check();
  18 |     await this.loginbtn.click();
  19 |   }
  20 | }
  21 | 
```