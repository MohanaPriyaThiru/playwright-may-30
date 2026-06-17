// dropdown

import { test, expect } from "@playwright/test";

test("Dropdown using select tag", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await expect(page).toHaveTitle("Automation Testing Practice");
  await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/");
  //   single dd
  //   dropdown using select tag-- selectOption()
  // using value
  /*  await page.locator("#country").scrollIntoViewIfNeeded();
  const countOfDD = await page.locator("#country option").count();
  expect(countOfDD).toBe(10);
  await page.locator("#country").selectOption({ value: "germany" });
  const selectedValue = await page.locator("#country").inputValue();
  await expect(selectedValue).toBe("germany");
  await page.waitForTimeout(3000);
  //   using label
  await page.locator("#country").selectOption({ label: "Australia" });

  await page.waitForTimeout(3000);
  await page.locator("#country").selectOption({ index: 2 });
  await page.waitForTimeout(3000);

  const selectedText = await page
    .locator("#country option:checked")
    .textContent();
  console.log(selectedText);

  await expect(selectedText).toContain("United Kingdom");
  console.log(
    await page.locator("#country option:not(:checked)").allInnerTexts(),
  ); */
  await page.getByLabel("Colors:").scrollIntoViewIfNeeded();
  await page
    .getByLabel("Colors:")
    .selectOption([{ value: "red" }, { label: "Green" }, { index: 3 }]);
  //   const value = await page.getByLabel("Colors:").;
  const value = await page.locator("#colors option:checked").allInnerTexts();
  await expect(value).toEqual(["Red", "Green", "Yellow"]);
  await page.waitForTimeout(3000);
});

test("autosuggestion ", async ({ page }) => {
  await page.goto("https://www.google.com/");
  await page.getByRole("combobox").pressSequentially("Ind", { delay: 300 });
  //   await page.getByRole("combobox").press("Enter");
  const autosuggllist = await page
    .locator('[role="listbox"] li')
    .allInnerTexts();
  await page.waitForTimeout(3000);

  for (let val of autosuggllist) {
    console.log(val);
    if (val === "Indian Bank") {
      await page.locator('[aria-label="indian bank"]').click();
      await page.waitForTimeout(3000);
    }
  }
  await page.waitForTimeout(3000);
});
