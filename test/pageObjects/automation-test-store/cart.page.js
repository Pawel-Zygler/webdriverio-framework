import BasePage from "./base.page";

class CartPage extends BasePage {
  async validateTotal() {
    var tempShippingRate = await $(
      "//span[text()='Flat Shipping Rate:']/../following-sibling::td"
    ).getText();
    var shippingRate = tempShippingRate.replace("$", "");

    var subTotal = await (
      await $("//span[text()='Sub-Total:']/../following-sibling::td")
    ).getText();
    subTotal = parseFloat(shippingRate) + parseFloat(subTotal.replace("$", ""));

    //extract cart total
    var cartTotal = await (
      await $("//span[text()='Total:']/../following-sibling::td")
    ).getText();
    cartTotal = cartTotal.replace("$", ""); //260
    expect(parseFloat(subTotal)).toEqual(parseFloat(cartTotal));
  }

  get shoppingCartHeader() {
    return $(`//span[contains(text(),'Shopping Cart')]`);
  }

  get getTextsFromItemsInBasket() {
    let rows = $$(
      `//table[@class="table table-striped table-bordered"]//tr//td[@class="align_left"]/a`
    );
    return rows;
  }

  async areItemsInBasket() {
    let rows = await this.getTextsFromItemsInBasket;
    let texts = [];

    for (let row of rows) {
      let text = await row.getText();
      texts.push(text);
    }
    return texts;
  }
}

export default new CartPage();
