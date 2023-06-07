describe("wait commands - examples", () => {
  beforeEach(async () => {
    await browser.url("/Ajax-Loader/index.html");
  });
  it("pause command", async () => {
    //click me constant
    const clickMeBtn = await $('//*[text()="CLICK ME!"]/..');
    await browser.pause(5000);
    await clickMeBtn.click();
  });

  it("waitForClicable - example", async () => {
    const clickMeBtn = await $("#button1");
    await clickMeBtn.waitForClickable();
    //await clickMeBtn.waitForClickable({ timeout: 3000 }); default wdio timeout ovveride
    await clickMeBtn.click();
  });

  it("waitForDisplayed - example", async () => {
    const clickMeBtn = await $("#button1");
    await clickMeBtn.waitForDisplayed({
      timeout: 10000,
      timeoutMsg: "halko nie pykło",
    });
  });

  it("waitForExist - example", async () => {
    const clickMeBtn = await $("#button1");
    await clickMeBtn.waitForExist();
    //await clickMeBtn.click();
  });

  it("waitUntil", async () => {
    await browser.url("https://webdriveruniversity.com/Accordion/index.html");
    const loadingStatus = await $(`//*[@id='text-appear-box']`);
    // const loadingStatus = await $(`#text-appear-box']`); //jak chce ze #, taki # łapie po id
    await loadingStatus.waitUntil(
      async function () {
        return (await this.getText()) === "LOADING COMPLETE.";
      },
      {
        timeout: 15000,
        timeoutMsg: "expected text to be different after 15s",
      }
    );
  });
});
