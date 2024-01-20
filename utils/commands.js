import HomePage from "../test/pageObjects/automation-test-store/home.page";

module.exports = {
  waitThenClick: async function (element) {
    await element.waitForExist();
    await element.waitForDisplayed();
    await element.click();
  },

  waitThenGetText: async function (element) {
    await element.waitForExist();
    await element.waitForDisplayed();
    let text = await element.getText();
    return text.replace(/\n/g, "");
  },

  waitThenSetValue: async function (element, value) {
    await element.waitForDisplayed();
    await element.setValue(value);
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
    await element.scrollIntoView();
    await element.isDisplayed();
    await element.moveTo();
  },

  waitThenSelectCategoryAndOrSubcategory(category, subcategory = null) {
    this.waitThenMoveTo(HomePage.categoryMenuComponent.categoryMenuLink(category));

    if (subcategory) {
      this.waitThenClick(
        HomePage.categoryMenuComponent.subcategory(category, subcategory)
      );
    }
  },
};
