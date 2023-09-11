import BasePage from "./base.page";
import ItemComponent from "./components/item.comp";
import HomePage from "./home.page";
import CategoryMenuComponent from "./components/category-menu.comp";
import commands from "../../../utils/commands";

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

  //there is one expect here to be moved out of here
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
    return $$(`//td[@class="align_left" and .//a[text()="${productName}"]]//div//small`);
  }

  async getTextsFromItemsAttributesInCart(productName) {
    let rows = await this.itemsInBasketAttributes(productName);
    let texts = [];

    for (let row of rows) {
      let text = await row.getText();
      texts.push(text);
    }
    return texts;
  }

  async getTextsFromItemsInCart() {
    let rows = await this.itemsInBasketNames;
    let texts = [];

    for (let row of rows) {
      let text = await row.getText();
      texts.push(text);
    }
    return texts;
  }

  async addItemToCart(mainCategory, subcategory, item, size = null, color = null) {
    await commands.waitThenMoveTo(
      HomePage.categoryMenuComponent.categoryMenuLink(mainCategory)
    );
    await commands.waitThenClick(
      CategoryMenuComponent.subcategory(mainCategory, subcategory)
    );
    await ItemComponent.selectProduct(item);
    if (size) {
      await ItemComponent.selectSizeDropdown.selectByVisibleText(size);
    }
    if (color) {
      await commands.waitThenClick(ItemComponent.selectColourRadioBtn(color));
    }
    await commands.waitThenClick(await ItemComponent.addToCartBtn);
  }

  get deleteItemBtn() {
    return $(`.btn.btn-sm.btn-default`);
  }

  get isShoppingCartEmpty() {
    return $(
      `//div[@class='contentpanel' and contains(text(),'Your shopping cart is empty!')]`
    );
  }

  get itemQuantity() {
    return $("//div[@class='input-group input-group-sm']/input");
  }

  get updateCartBtn() {
    return $("#cart_update");
  }

  async deleteItemsFromCart() {
    while (await this.deleteItemBtn.isExisting()) {
      try {
        await this.deleteItemBtn.click();
      } catch (error) {
        // Stop the loop if you cannot find "Delete" button
        break;
      }
    }
  }
}

export default new CartPage();
