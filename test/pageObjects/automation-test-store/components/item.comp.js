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
}
export default new ItemComponent();
