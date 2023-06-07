module.exports = {
  waitThenClick: async function (element) {
    console.log(
      `>> Executing custom command, against element:  ${JSON.stringify(
        element
      )}`
    );
    await element.waitForExist();
    await element.waitForDisplayed();
    await element.click();
  },
  //anotherCommand: {},
};
