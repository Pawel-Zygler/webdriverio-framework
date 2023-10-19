import ItemComponent from "../../../pageObjects/automation-test-store/components/item.comp";
import HomePage from "../../../pageObjects/automation-test-store/home.page";
import testData from "../../../data/testData.js";
import commands from "../../../../utils/commands.js";

const benefitPriceNormal = "$30.00";
const benefitPriceFinal = "$19.00";

describe("FEATURED", async () => {
  beforeEach(async () => {
    await HomePage.open();
    await ItemComponent.selectProduct(testData.categories.featured.benefit);
  });

  it("checks if the item has normal price discounted", async () => {
    const discountPrice = await ItemComponent.discountPrice;
    await expect(await commands.waitThenGetText(discountPrice)).toEqual(
      benefitPriceNormal
    );
  });

  it("checks if the item has final price", async () => {
    const finalPrice = await ItemComponent.finalPrice;
    await expect(await commands.waitThenGetText(finalPrice)).toEqual(benefitPriceFinal);
  });
});
