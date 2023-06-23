class TopCartPage {
  get topCartDropdown() {
    return $(`//ul[@class='nav topcart pull-left']`);
  }

  get topCartCheckoutBtn() {
    return $(`//a[@title='Checkout']`);
  }
}
export default new TopCartPage();
