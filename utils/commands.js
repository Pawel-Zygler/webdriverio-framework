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
};
