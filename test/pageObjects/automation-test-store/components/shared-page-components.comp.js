class SharedPageComponents {
  get continueButton() {
    return $(`//button[@title='Continue']`);
  }

  addToCartBtnSubCategory(itemName) {
    return $(
      `//a[contains(text(), '${itemName}')]/ancestor::div[@class='col-md-3 col-sm-6 col-xs-12']//a[@class='productcart']`
    );
  }

  addToCartButton(itemName) {
    return $(
      `//a[text()='${itemName}']/ancestor::div[@class='col-md-3 col-sm-6 col-xs-12']/div/div[@class='pricetag jumbotron']/a`
    );
  }

  pageHeader(headerText) {
    const element = $(`//span[contains(text(), '${headerText}')]`);
    element.waitForClickable();
    return element;
  }

  get outOfStockBtn() {
    return $(`//span[contains(text(), 'Out of Stock')]`);
  }
}

export default new SharedPageComponents();
