class ItemComponent {
  get itemHeaderLinks() {
    return $$(".fixed_wrapper .prdocutname");
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

  tagName(tagName) {
    return $(`//li//a[contains(text(),'${tagName}')]`);
  }
}
export default new ItemComponent();
