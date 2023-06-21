import SharedPageComponents from "../test/pageObjects/automation-test-store/components/shared-page-components.comp";

module.exports = {
  waitThenClick: async function (element) {
    await element.waitForExist();
    await element.waitForDisplayed();
    await element.click();
  },

  waitThenGetText: async function (element) {
    await element.waitForDisplayed();
    await element.getText();
    return element;
  },

  waitThenSetValue: async function (element, value) {
    await element.waitForDisplayed();
    await element.setValue(value);
    return element;
  },

  waitThenClickProduct: async function (productName) {
    const element = $(`//*[@title='${productName}']`);
    await element.waitForExist();
    await element.waitForDisplayed();
    await element.click();
  },

  waitThenMoveTo: async function (element) {
    await element.waitForExist();
    await element.waitForDisplayed();
    await element.isDisplayed();
    await element.scrollIntoView();
    await element.moveTo();
    return element;
  },

  clickItemIfInStock() {
    const element = SharedPageComponents.addToCartBtnSub;
    if (element) {
      element.waitForExist();
      element.waitForDisplayed();
      element.click();
    } else {
      console.log("Item out of stock");
    }
  },
};
