class ItemComponent {
  //those probably should go to shared page components
  get itemHeaderLinks() {
    return $$(".fixed_wrapper .prdocutname");
  }

  get addToCartBtn() {
    return $("//a[@class='cart']/i");
  }

  selectProduct(itemName) {
    const title = $(`//*[@title='${itemName}']`);
    title.waitForExist();
    title.waitForClickable();
    title.click();
  }
}
export default new ItemComponent();
