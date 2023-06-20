class ItemComponent {
  get itemHeaderLinks() {
    return $$(".fixed_wrapper .prdocutname");
  }

  get addToCartBtn() {
    return $("//a[@class='cart']/i");
  }

  get shoppingCartHeader() {
    const e = $(`//span[contains(text(), 'Shopping Cart')]`);
    e.waitForClickable();
    return e;
  }

  selectProduct(itemName) {
    const title = $(`//*[@title='${itemName}']`);
    title.waitForExist();
    title.waitForClickable();
    title.click();
  }
}
export default new ItemComponent();
