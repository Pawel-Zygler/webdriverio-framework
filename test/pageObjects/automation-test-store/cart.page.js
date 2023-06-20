import BasePage from "./base.page";

class CartPage extends BasePage {
  get tempShippingRate() {
    const element = $(
      "//span[text()='Flat Shipping Rate:']/../following-sibling::td"
    );
    return element;
  }

  get subTotal() {
    const element = $("//span[text()='Sub-Total:']/../following-sibling::td");
    return element;
  }

  get cartTotal() {
    const element = $("//span[text()='Total:']/../following-sibling::td");
    return element;
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

  get shoppingCartHeader() {
    return $(`//span[contains(text(),'Shopping Cart')]`);
  }

  get itemsInBasketNames() {
    let rows = $$(
      `//table[@class="table table-striped table-bordered"]//tr//td[@class="align_left"]/a`
    );
    return rows;
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
