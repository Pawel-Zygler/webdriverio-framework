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
}

export default new CheckoutPage();
