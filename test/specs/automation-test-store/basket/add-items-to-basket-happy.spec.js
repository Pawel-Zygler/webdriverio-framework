import ApparelAndAccessoriesPage from "../../../pageObjects/automation-test-store/apparel-and-accessories.page";
import CartPage from "../../../pageObjects/automation-test-store/cart.page";
import ItemComponent from "../../../pageObjects/automation-test-store/components/item.comp";
import SkinCarePage from "../../../pageObjects/automation-test-store/skincare.page";
import commands from "../../../../utils/commands";
import HomePage from "../../../pageObjects/automation-test-store/home.page";
import testData from "../../../data/testData";

describe("BASKET - happy path", () => {
  beforeEach(async () => {
    await HomePage.open();
  });

  describe("ADD PRODUCTS", () => {
    it(`adds two Skincare products and validates cart total`, async () => {
      await commands.waitThenClick(
        HomePage.categoryMenuComponent.categoryMenuLink(
          testData.categories.skincare.name
        )
      );

      await SkinCarePage.addSpecificItems(
        testData.categories.skincare.productOne,
        testData.categories.skincare.productTwo
      );

      await commands.waitThenClick(
        HomePage.topMenuComponent.topMenuLink("Cart")
      );

      await expect(browser).toHaveUrlContaining("checkout");
      await CartPage.validateTotal();
    });

    it("adds Shoe without clicking dropdown and validates items", async () => {
      await commands.waitThenClick(
        HomePage.categoryMenuComponent.categoryMenuLink(
          testData.categories.apparel.name
        )
      );
      await commands.waitThenClick(
        ApparelAndAccessoriesPage.subcategory(
          testData.categories.apparel.subcategoryShoes
        )
      );

      await ApparelAndAccessoriesPage.selectProduct(
        testData.categories.apparel.productThree
      );

      await commands.waitThenClick(ItemComponent.addToCartBtn);

      await expect(ItemComponent.shoppingCartHeader).toBeDisplayed();
      let texts = await CartPage.areItemsInBasket();
      await expect(texts).toContain(testData.categories.apparel.productThree);
    });
  });

  describe("ADD T-SHIRTS", () => {
    it("adds t-shirts and checks if items are in cart", async () => {
      await commands.waitThenClick(
        HomePage.categoryMenuComponent.categoryMenuLink(
          testData.categories.apparel.name
        )
      );
      await commands.waitThenClick(
        ApparelAndAccessoriesPage.subcategory(
          testData.categories.apparel.subcategoryTshirts
        )
      );

      await commands.waitThenClickProduct(
        testData.categories.apparel.productOne
      );
      await commands.waitThenClick(ItemComponent.addToCartBtn);

      await commands.waitThenClick(
        HomePage.categoryMenuComponent.categoryMenuLink(
          testData.categories.apparel.name
        )
      );
      await commands.waitThenClick(
        ApparelAndAccessoriesPage.subcategory(
          testData.categories.apparel.subcategoryTshirts
        )
      );

      await commands.waitThenClickProduct(
        testData.categories.apparel.productTwo
      );
      await commands.waitThenClick(ItemComponent.addToCartBtn);

      let texts = await CartPage.areItemsInBasket();

      await expect(texts).toContain(testData.categories.apparel.productOne);
      await expect(texts).toContain(testData.categories.apparel.productTwo);
    });
  });
});
