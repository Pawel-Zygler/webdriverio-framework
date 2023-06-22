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
      await commands.waitThenMoveTo(
        HomePage.categoryMenuComponent.categoryMenuLink(
          testData.categories.men.name
        )
      );

      await commands.waitThenClick(
        HomePage.categoryMenuComponent.subcategory(
          testData.categories.men.name,
          testData.categories.men.subcategoryBodyAndShower.name
        )
      );

      await commands.waitThenClickProduct(
        testData.categories.men.subcategoryBodyAndShower.productTwo
      );

      //const isItemInStock = await ItemComponent.addToCartBtn.isDisplayed();
      //throws error if item is found not in stock, adds to cart of not found - older solution
      // if (isItemInStock) {
      //   await commands.waitThenClick(ItemComponent.addToCartBtn);
      //   await expect(browser).toHaveUrlContaining("checkout");
      // } else {
      //   throw new Error("No cart button, item probably out of stock");
      // }
      const isOutOfStockBtn = await SharedPageComponents.outOfStockBtn;
      await isOutOfStockBtn.isDisplayed();
    });
  });

  describe("SKINCARE", () => {
    it(`it tries to add ${testData.categories.skincare.subcategoryEyes.productThree} which is out of stock from subcategory page`, async () => {
      await commands.waitThenMoveTo(
        HomePage.categoryMenuComponent.categoryMenuLink(
          testData.categories.skincare.name
        )
      );
      await commands.waitThenClick(
        HomePage.categoryMenuComponent.subcategory(
          testData.categories.skincare.name,
          testData.categories.skincare.subcategoryEyes.name
        )
      );
    });
  });
});
