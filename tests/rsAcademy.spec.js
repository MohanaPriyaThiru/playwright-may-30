import { test } from "@playwright/test";
import { UdemyLogin } from "../pages/udemyLoginpage";
import { productPage } from "../pages/productpage";
import { testFixture } from "../fixture/loginfixture";

testFixture("sample test", async ({ loginFix }) => {
  //   const logOb = new UdemyLogin(page);
  //   await logOb.rsLogin();
  const p = new productPage(loginFix);
  await p.addToCart();
});
