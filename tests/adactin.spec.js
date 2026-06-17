import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import data from "../testData/data.json";
import { SearchHotel } from "../pages/searchHotel";
import datadriven from "../testData/dataDrivenTestData.json";
import { excelReader } from "../utils/excelreader";

test("Adactin Project", async ({ page }) => {
  const loginObj = new LoginPage(page);
  await loginObj.navigate(data.url);
  await loginObj.isLogoVisible();
  await loginObj.loginMethod(data.userName, data.password);
  await expect(page).toHaveURL("https://adactinhotelapp.com/SearchHotel.php");
  const searchObj = new SearchHotel(page);
  await searchObj.isUserNameVisible();
  await searchObj.searchDetails({
    dateIn: data.date,
    dateOut: data.outdate,
    loc: data.loc,
    roomnum1: data.roomnum1,
    hotel: data.hotel,
    adult: data.adultperroom,
  });

  await expect(page).toHaveURL(/SelectHotel.php/);
});
const logindata = excelReader();
for (let datadd of logindata) {
  test(`DataDriven Testing for login page using ${datadd.userName} and ${datadd.password}`, async ({
    page,
  }) => {
    const logobj1 = new LoginPage(page);
    await logobj1.navigate(data.url);
    await logobj1.loginMethod(datadd.userName, datadd.password);
  });
}
