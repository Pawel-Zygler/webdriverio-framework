import testData from "../../../data/testData.js";
import HomePage from "../../../pageObjects/automation-test-store/home.page";
import commands from "../../../../utils/commands.js";

describe("HOME PAGE", () => {
  beforeEach(async () => {
    await HomePage.open();
  });
  describe('CURRENCY CHANGE - happy path', () => {
    const currencies = [
      {name: 'euro', symbol: testData.currency.euroSymbol},
      {name: 'dollar', symbol: testData.currency.dollarSymbol},
      {name: 'pound', symbol: testData.currency.poundSymbol}
    ];
    for (let currency of currencies) {
      it(`changes currency to ${currency.name}`, async () => {
        await commands.waitThenClick(HomePage.currencyDropdown);
        await commands.waitThenClick(HomePage.currencyOption(testData.currency[currency.name]));
        
        await expect(commands.waitThenGetText(HomePage.currentCurrency)).toHaveTextContaining(currency.symbol)
      });
    }
  });
});
