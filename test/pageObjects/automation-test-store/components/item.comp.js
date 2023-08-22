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

  get selectSizeDropdown() {
    return $(`//div[@class='input-group col-sm-10']//select`);
  }

  selectColourRadioBtn(colour) {
    return $(
      `//input[@type='radio' and following-sibling::text()[contains(., '${colour}')]]`
    );
  }

  get itemHeaderDescriptions() {
    return $$(".productdiscrption");
  }

  get discountPrice() {
    return $(`//span[@class='productpageoldprice']`);
  }

  get finalPrice() {
    return $(`//div[@class='productfilneprice']`);
  }

  async selectTab(tabName) {
    return $(`//ul[@id='myTab']//li/a[contains(text(),'${tabName}')]`);
  }

  get reviewContent() {
    return $(`//div[@class='content']`);
  }
}
export default new ItemComponent();
