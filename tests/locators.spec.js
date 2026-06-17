// web application has web page
// element displayed on web page  is wen element
// 3 types - css, xpath, inbuild locators

import { test, expect } from "@playwright/test";
test("Using Css Selectors", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  // Css
  // tagName
  await page.locator("input").first().fill("priya");

  //   id - take attribute value of id and add # before it
  //   await page.locator("#name").fill("priya");

  //
  // for class must use . before it
  // nth()- index starts from zero
  await page.locator(".form-control").nth(1).fill("priya@gmail.com");

  //   attribute name and value
  await page.locator('[placeholder="Enter Phone"]').fill("562389455");

  //   combining all
  await page.locator('textarea.form-control[id="textarea"]').fill("Anna nagar");

  //   xpath
  //   absolute xpath --/ , root html tagNmae
  // relative xpath--//,middle of DOM and that exact tagname
  // basic xpath
  //tagName[@attributeName="attributevalue"]
  await page.locator('//input[@value="female"]').check();

  //   text()
  // tagname[text()=" full visible text"]
  const text = await page.locator('//label[text()="Male"]').innerText();
  console.log(text);
  await page.locator('//label[text()="Male"]').check();
  await page.waitForTimeout(5000);
  await page.locator('//label[text()="Male"]').scrollIntoViewIfNeeded();

  const vis = await page.getByLabel("A chart.", { exact: true }).isVisible();
  console.log(vis);
});

test("Selectors Hub test", async ({ page }) => {
  await page.goto("https://selectorshub.com/xpath-practice-page/");
  //contains()
  await page
    .locator('//input[contains(@id,"shub")]')
    .fill("priya@gmail.com", { force: true });
  // constins using text

  const selHubbtn = page.locator('//a[contains(text()," SelectorsHub")]');
  console.log(await selHubbtn.isVisible());
  console.log(await selHubbtn.isEnabled());
  console.log(await selHubbtn.isDisabled());
  console.log(await selHubbtn.isHidden());
  // console.log(await selHubbtn.isEditable());
  // await selHubbtn.click();

  // xpath using index
  await page
    .locator('(//input[@class="form-control"])[2]')
    .scrollIntoViewIfNeeded();
  await page.locator('(//input[@class="form-control"])[2]').fill("9685741236");
  await page.waitForTimeout(5000);
});

test("Playwright inbuilt locator", async ({ page }) => {
  // try {
  await page.goto(
    "https://testautomationpractice.blogspot.com/p/playwrightpractice.html",
  );
  //   // await page.pause();
  //   page.getByLabel("Email Address:").fill("priya@gamil.com");
  //   page.getByLabel(/Password/).fill("priya@123");
  //   // await page.getByLabel("age-label").fill("30");
  //   await page.getByPlaceholder("Enter your full name").fill("priya");
  //   await page
  //     .getByPlaceholder("Phone number (xxx-xxx-xxxx)")
  //     .fill("9865741236");
  //   await page.getByRole("button", { name: "Primary Action" }).click();
  //   await page.getByRole("button", { name: "Toggle Button" }).click();
  //   await page.getByRole("textbox", { name: "Username:" }).fill("12356545");
  //   await page
  //     .locator("#role-locators")
  //     .getByRole("navigation")
  //     .getByRole("link", { name: "Home", exact: true })
  //     .click();
  //   await page.waitForTimeout(2000);
  // } catch (error) {
  //   console.log(error);
  // }

  // const alertText = await page.getByRole("alert").textContent();
  // console.log(alertText);
  // const heading = await page
  //   .getByRole("heading", { name: "Form Elements" })
  //   .innerText();
  // console.log(heading);

  // // await page.getByRole("role",{name:" "})
  // const isLogoVisible = await page.getByAltText("logo image").isVisible();
  // console.log(isLogoVisible);
  // await page.getByTestId("edit-profile-btn").click();
  // const email = await page.getByTestId("profile-email").innerText();
  // console.log(email);
  // // await page.getByTitle("Home page link").scrollIntoViewIfNeeded();

  // await page.getByTitle("Home page link").click();
  // await page.waitForTimeout(3000);
  // const textele = page.getByText(
  //   "Hover over these elements to see their titles:",
  // );
  // // await textele.scrollIntoViewIfNeeded();
  // await textele.hover();
  // await page.getByText("Submit Form").click();
  // await page.waitForTimeout(3000);
  await page
    .getByLabel("Email Address:")
    .pressSequentially("priya@gamil.com", { delay: 200 });
  const value = await page.getByLabel("Email Address:").inputValue();
  await expect
    .soft(page.getByLabel("Email Address:"))
    .toHaveValue("priya@ga.com");
  console.log(value);
});

test("Facebook Signup", async({page})=>{

    await page.goto("https://www.facebook.com/reg/?entry_point=login&next=");

    // await page.locator('#_R_1cl2p4jikacppb6amH1_').fill('Poovarasan', {delay:1000});
    // // await page.locator('//input[type="text"]').fill("Poovarasan");
     
    //  await page.locator('#_R_1kl2p4jikacppb6amH1_').pressSequentially("S",{delay:2000});
     
     
     await page.locator('#_R_1cl2p4jikacppb6amH1_').fill('Poovarasan',{delay:2000});
await page.locator('#_R_1kl2p4jikacppb6amH1_').fill('S',{delay:2000});

//await page.locator('div:has-text("Day")').first().click({delay:2000});
//await page.getByText('May', { exact: true }).click({delay:2000});
await page.getByText('Day', { exact: true }).click({ force: true });
await page.getByText('15', { exact: true }).click({delay:1000})

await page.locator('div:has-text("Month")').first().click({delay:1000});
await page.getByText('May', { exact: true }).click({delay:1000});

await page.getByText('Year', { exact: true }).click({ force: true });
await page.getByText('1997', { exact: true }).click({delay:1000});

await page.getByText('Select your gender',{exact:true}).click({force:true});
await page.getByText('Male', { exact: true }).click({delay:1000});



await page.locator('#_R_6ad8p4jikacppb6amH1_').fill('Poo@gmail.com',{delay:2000});
await page.locator('#_R_clap4jikacppb6amH1_').fill('Password@123!',{delay:2000});

await page.getByRole('button', { name: 'Submit' }).click();

await page.waitForTimeout(5000);

});
