import { expect } from "@playwright/test";
export class SearchHotel {
  constructor(page) {
    this.page = page;
    this.location = page.locator("#location");
    this.hotel = page.locator('[name="hotels"]');
    this.roomNum = page.locator("#room_nos");
    this.indate = page.locator("#datepick_in");
    this.outdate = page.locator("#datepick_out");
    this.adultPerRoom = page.locator('[name="adult_room"]');
    this.userNameInDashboard = page.locator("#username_show");
    this.searchBtn = page.locator('[value="Search"]');
  }
  async isUserNameVisible() {
    const name = await this.userNameInDashboard.inputValue();
    console.log(name);
    await expect(this.userNameInDashboard).toHaveValue(/PriyaThiruvengadam/);
  }
  async searchDetails({ loc, hotel, roomnum1, dateIn, dateOut, adult }) {
    await this.location.selectOption({ value: loc });
    await this.hotel.selectOption({ label: hotel });
    await this.roomNum.selectOption({ index: roomnum1 });
    await this.indate.fill(dateIn);
    await this.outdate.fill(dateOut);
    await this.adultPerRoom.selectOption({ label: adult });
    await this.searchBtn.click();
  }
}
