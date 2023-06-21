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

  //no dobra, to mam problem ciekawy do rozwiązania
  //mam przedmiot, on moze byc out of stock i in stock, jak jest out to ma przycisk nieakwyny do dodania do koszyka
  // jak jest aktywny to ma przycisk aktywny
  // hjak zrobić ifa na to?
  //trzeba kazaz wybrać tekst z obu selektorów
  //jesli teks ma out of stock, to informuj i failuj test
  // jesli item ma add to cart to btn to add to cart
  // selector na out of stock //a[text()='Lancome Slimissime 360 Slimming Activating Concentrate Unisex Treatment']/ancestor::div[@class='col-md-3 col-sm-6 col-xs-12']/div/div[@class='pricetag jumbotron']/span
  addToCartButton(itemName) {
    const element = $(
      `//a[text()='${itemName}']/ancestor::div[@class='col-md-3 col-sm-6 col-xs-12']/div/div[@class='pricetag jumbotron']/a`
    );
    return element;
  }

  outOfStockButton(itemName) {
    const element = $(
      `//a[text()='${itemName}']/ancestor::div[@class='col-md-3 col-sm-6 col-xs-12']/div/div[@class='pricetag jumbotron']/span`
    );
    return element;
  }

  // addToCartBtnSub() {
  //   const element = $(
  //     `//div[@class='pricetag jumbotron']/span[contains(text(),'Out of Stock')] | //div[@class='pricetag jumbotron']//a[@class='productcart']`
  //   );
  //   return element;
  // }
}

export default new SharedPageComponents();
