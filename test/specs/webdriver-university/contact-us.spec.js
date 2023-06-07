import allureReporter from "@wdio/allure-reporter";
import ContactUsPage from "../../pageObjects/webdriver-university/contact-us.page";

describe("webdriveruniversity - contact us page", function () {
  //this.retries(1); //powtórzy testy wszystkie w tym zestawie
  beforeEach(async () => {
    await ContactUsPage.open();
    //console.log(`>>Browser Object: ${JSON.stringify(browser)}`);
    // console.log("CONFIG ENV: " + browser.config.environment);
    // console.log("CONFIG EMAIL: " + browser.config.email);
    // console.log("CONFIG FIRST NAME: " + browser.config.firstName);
    // console.log("CONFIG PASSWORD: " + browser.config.password);
    // console.log("BASE URL: " + browser.config.baseUrl);
  });

  it("valid submission / niepoprawna klasa równowazności - submit all information", async function () {
    // this.retries(2);
    allureReporter.addFeature("Contact us Page - valid submission");
    allureReporter.addDescription(
      "validate contact us page via submitting all data"
    );
    allureReporter.addSeverity("critical");

    await ContactUsPage.submitRandomForm("john", "doe");
    await expect(ContactUsPage.successfulSubmissionHeader).toHaveText(
      "Thank You for your Message!"
    );
  });

  it("invalid submission / niepoprawna klasa równowazności - dont submit all information", async () => {
    allureReporter.addFeature("Contact us Page - invalid submission");
    allureReporter.addDescription(
      "validate contact us page via not submitting all data"
    );
    allureReporter.addSeverity("normal");

    await ContactUsPage.submitForm("dsa", "dsa", "", "dsa");

    await expect(
      ContactUsPage.unsuccessfulSubmissionHeader
    ).toHaveTextContaining(
      "Error: all fields are required",
      "Error: Invalid email address"
    );
  });
});
