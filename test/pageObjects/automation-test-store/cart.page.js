import BasePage from "./base.page";

class CartPage extends BasePage {
  get tempShippingRate() {
    return $("//span[text()='Flat Shipping Rate:']/../following-sibling::td");
  }

  get subTotal() {
    return $("//span[text()='Sub-Total:']/../following-sibling::td");
  }

  get cartTotal() {
    return $("//span[text()='Total:']/../following-sibling::td");
  }

  async validateTotal() {
    var tempShippingRate = await this.tempShippingRate.getText();
    var shippingRate = tempShippingRate.replace("$", "");

    var subTotal = await this.subTotal.getText();
    subTotal = parseFloat(shippingRate) + parseFloat(subTotal.replace("$", ""));

    var cartTotal = await this.cartTotal.getText();
    cartTotal = cartTotal.replace("$", ""); //260
    expect(parseFloat(subTotal)).toEqual(parseFloat(cartTotal));
  }

  get itemsInBasketNames() {
    return $$(
      `//table[@class="table table-striped table-bordered"]//tr//td[@class="align_left"]/a`
    );
  }

  itemsInBasketAttributes(productName) {
    return $$(
      `//td[@class="align_left" and .//a[text()="${productName}"]]//div//small`
    );
  }

  async getTextsFromItemsAttributesInBasket(productName) {
    let rows = await this.itemsInBasketAttributes(productName);
    let texts = [];

    for (let row of rows) {
      let text = await row.getText();
      texts.push(text);
    }
    return texts;
  }

  async getTextsFromItemsInBasket() {
    let rows = await this.itemsInBasketNames;
    let texts = [];

    for (let row of rows) {
      let text = await row.getText();
      texts.push(text);
    }
    return texts;
  }
}

export default new CartPage();
