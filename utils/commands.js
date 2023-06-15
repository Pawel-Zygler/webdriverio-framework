module.exports = {
  waitThenClick: async function (e) {
    await e.waitForExist();
    await e.waitForDisplayed();
    await e.click();
  },
  waitThenGetText: async function (e) {
    await e.waitForDisplayed();
    await e.getText();
    return e;
  },
};
