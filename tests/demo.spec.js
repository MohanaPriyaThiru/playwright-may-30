const { test, expect } = require("@playwright/test");

// test.use({
//   viewport: {
//     width: 1920,
//     height: 1080,
//   },
// });

test("Amazon Categories Test", async ({ page }) => {
  await page.goto("https://www.amazon.in/");

  //await page.locator("#searchDropdownBox").click();

  await page
    .locator("#searchDropdownBox")
    .selectOption({ label: "Electronics" });

  await page.waitForTimeout(3000);

  await page
    .locator("//input[@id='twotabsearchtextbox']")
    .fill("Oneplus Nord 6");

  await page.waitForTimeout(2000);

  await page.locator("#sac-suggestion-row-1 .s-suggestion").click();
  await page.waitForTimeout(1000);
});

test.only("test", async ({ page }) => {
  await page.goto("https://www.amazon.in/");
  await page
    .getByLabel("Select the department you")
    .selectOption("search-alias=watches");
  const searchBox = page.getByRole("searchbox", {
    name: "Search Amazon.in",
  });
  await searchBox.click();
  await searchBox.pressSequentially("watch under 1000", {
    delay: 150,
  });
  await page.waitForTimeout(2000);
  await searchBox.press("Enter");
  await page.waitForTimeout(5000);
});

test("window", async ({ context }) => {
  const parentPage = await context.newPage();
  await parentPage.goto("https://testautomationpractice.blogspot.com/");
  const tabCount = await context.pages().length;
  console.log(tabCount);
  const parentPageTitle = await parentPage.title();
  console.log(parentPageTitle);
  const [childPage] = await Promise.all([
    context.waitForEvent("page"),
    parentPage.click('//button[text()="New Tab"]'),
  ]);
  await childPage.waitForLoadState();
  const tabCount1 = await context.pages().length;
  console.log(tabCount1);
  console.log(await childPage.title());
  const allTabs = await context.pages();
  console.log(...allTabs.entries());
});

test("table", async ({ page }) => {
  await page.goto("/practice-test-table/", { timeout: 60000 });
  const table = await page.locator("#courses_table");
  const col = await table.locator("thead tr th");
  const columnCount = await col.count();
  expect(columnCount).toEqual(6);
  const rows = await table.locator("tbody tr");
  const rowsCount = await rows.count();
  expect(rowsCount).toEqual(9);
  // const alldata = await page.locator("table tbody tr td").allInnerTexts();
  // console.table(alldata);
  for (let i = 0; i < rowsCount; i++) {
    const cells = rows.nth(i).locator("td");

    let alldata = "";

    const cellCount = await cells.count();

    for (let j = 0; j < cellCount; j++) {
      const data = await cells.nth(j).innerText();

      alldata += data + "|";
    }

    console.log(alldata);
  }
});
