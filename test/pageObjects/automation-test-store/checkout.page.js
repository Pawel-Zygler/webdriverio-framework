class CheckoutPage {
  get shoppingCartCheckoutBtnOne() {
    return $(`#cart_checkout1`);
  }

  get shoppingCartCheckoutBtnTwo() {
    return $(`#cart_checkout2`);
  }

  get confirmOrderBtn() {
    return $(`#checkout_btn`);
  }

  get orderNumber() {
    return $(`//p[contains(text(),'Your order')]`);
  }
}

export default new CheckoutPage();
