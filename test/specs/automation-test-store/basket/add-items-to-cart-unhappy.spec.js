import commands from "../../../../utils/commands";
import HomePage from "../../../pageObjects/automation-test-store/home.page";
import testData from "../../../data/testData";
import SharedPageComponents from "../../../pageObjects/automation-test-store/components/shared-page-components.comp";

describe("ADD ITEMS - unhappy path", () => {
  beforeEach(async () => {
    await HomePage.open();
  });

  describe("MEN", () => {
    it(`tries to add item ${testData.categories.men.productTwo} from item page which is out of stock`, async () => {
      await commands.waitThenSelectCategoryAndOrSubcategory(
        testData.categories.men.name,
        testData.categories.men.subcategoryBodyAndShower.name
      );

      await commands.waitThenClickProduct(
        testData.categories.men.subcategoryBodyAndShower.productTwo
      );

      const isOutOfStockBtn = await SharedPageComponents.outOfStockBtn;
      await isOutOfStockBtn.isDisplayed();
    });
  });

  describe("SKINCARE", () => {
    it(`it tries to add ${testData.categories.skincare.subcategoryEyes.productThree} which is out of stock from subcategory page`, async () => {
      await commands.waitThenSelectCategoryAndOrSubcategory(
        testData.categories.skincare.name,
        testData.categories.skincare.subcategoryEyes.name
      );

      await commands.waitThenClickProduct(
        testData.categories.skincare.subcategoryEyes.productThree
      );

      const isOutOfStockBtn = await SharedPageComponents.outOfStockBtn;
      await isOutOfStockBtn.isDisplayed();
    });
  });
});
