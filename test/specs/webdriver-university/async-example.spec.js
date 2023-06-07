//import BasePage from "../../pageObjects/webdriver-university/base.page";

describe("async vs sync - webdriverio example", () => {
  it("async vs sync", async () => {
    await browser.url("/");

    //assertion vs url
    await expect(browser).toHaveUrl("https://www.webdriveruniversity.com/");
  });
});
