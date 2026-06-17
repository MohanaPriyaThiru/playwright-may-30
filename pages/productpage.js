export class productPage {
  constructor(page) {
    this.page = page;
    this.addTocart = page.locator(
      '//app-card[@class="col-lg-3 col-md-6 mb-3"]/descendant::img[@src="assets/img/iphonex.jpg"]/following::button[1]',
    );
  }

  async addToCart() {
    await this.addTocart.click();
  }
}
