module.exports = {
  waitThenClick: async function (e) {
    await e.waitForExist();
    await e.waitForDisplayed();
    await e.click();
  },
  //anotherCommand: {},
};
