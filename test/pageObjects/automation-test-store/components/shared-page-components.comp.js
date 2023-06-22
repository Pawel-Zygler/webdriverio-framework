class SharedPageComponents {
  get continueButton() {
    const e = $(`//button[@title='Continue']`);
    return e;
  }

  addToCartBtnSubCategory(itemName) {
    const element = $(
      `//a[contains(text(), '${itemName}')]/ancestor::div[@class='col-md-3 col-sm-6 col-xs-12']//a[@class='productcart']`
    );
    return element;
  }

  addToCartButton(itemName) {
    const element = $(
      `//a[text()='${itemName}']/ancestor::div[@class='col-md-3 col-sm-6 col-xs-12']/div/div[@class='pricetag jumbotron']/a`
    );
    return element;
  }

  pageHeader(headerText) {
    const element = $(`//span[contains(text(), '${headerText}')]`);
    element.waitForClickable();
    return element;
  }
}

export default new SharedPageComponents();
