import { test, expect } from "@playwright/test";
test("webtable", async ({ page }) => {
  await page.goto("https://practicetestautomation.com/practice-test-table/");
  const table = await page.locator("table");
  const cols = await table.locator("thead tr th");
  const colCount = await cols.count();
  expect(colCount).toEqual(6);
  const rows = await table.locator("tbody tr");
  const rowCount = await rows.count();
  expect(rowCount).toBe(9);
  console.log(rowCount);
  console.log(colCount);
  //get  single data
  const singleCell = await page
    .locator("tbody tr:nth-child(5) td:nth-child(3)")
    .innerText();
  console.log(singleCell);

  const targetrow = await rows.filter({ hasText: "REST Assured" });
  const partrowData = await targetrow.allInnerTexts();
  console.log(`single row ${partrowData}`);
});

test("check only java course is visible", async ({ page }) => {
  await page.goto("https://practicetestautomation.com/practice-test-table/");
  await page.locator('//input[@value="Java"]').click();
  //   table tr td:has-text("java")
  const colwithJava = await page
    .locator("table tr td:nth-child(3)")
    .filter({ hasText: "Java" });
  console.log(await colwithJava.count());
  const langJava = await colwithJava.allInnerTexts();
  for (let l of langJava) {
    expect(l).toBe("Java");
  }
});
