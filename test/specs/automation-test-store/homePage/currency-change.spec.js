import testData from "../../../data/testData";
import HomePage from "../../../pageObjects/automation-test-store/home.page";

describe("HOME PAGE", () => {
  beforeEach(async () => {
    await HomePage.open();
  });
  describe("CURRENCY CHANGE - happy path", () => {
    it("changes the currency to euro", async () => {
      await HomePage.currencyDropdown.click();
      await HomePage.currencyOption(testData.currency.euro).click();

      await expect(await HomePage.currentCurrency).toHaveTextContaining(
        testData.currency.euroSymbol
      );
    });

    it("changes the currency to dollar", async () => {
      await HomePage.currencyDropdown.click();
      await HomePage.currencyOption(testData.currency.dollar).click();

      await expect(await HomePage.currentCurrency).toHaveTextContaining(
        testData.currency.dollarSymbol
      );
    });

    it("changes the currency to pound", async () => {
      await HomePage.currencyDropdown.click();
      await HomePage.currencyOption(testData.currency.pound).click();

      await expect(await HomePage.currentCurrency).toHaveTextContaining(
        testData.currency.poundSymbol
      );
    });
  });
});
