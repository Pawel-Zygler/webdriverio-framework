import CartPage from "../../../pageObjects/automation-test-store/cart.page";
import ItemComponent from "../../../pageObjects/automation-test-store/components/item.comp";
import SkinCarePage from "../../../pageObjects/automation-test-store/skincare.page";
import CategoryMenuComponent from "../../../pageObjects/automation-test-store/components/category-menu.comp";
import commands from "../../../../utils/commands";
import HomePage from "../../../pageObjects/automation-test-store/home.page";
import testData from "../../../data/testData";

describe("BASKET - happy path", () => {
  beforeEach(async () => {
    await HomePage.open();
  });

  describe("ADD PRODUCTS", () => {
    it(`adds two Skincare products and validates cart total`, async () => {
      await commands.waitThenMoveTo(
        HomePage.categoryMenuComponent.categoryMenuLink(
          testData.categories.skincare.name
        )
      );

      //for some reason there were two Face elements found, could not figure out a way out of it so far
      //went back to old way of adding those skin care products
      // await commands.waitThenClick(
      //   CategoryMenuComponent.subcategory(
      //     testData.categories.skincare.subcategoryFace
      //   )
      // );

      // await ItemComponent.selectProduct(
      //   testData.categories.skincare.productOne
      // );
      // await ItemComponent.selectProduct(
      //   testData.categories.skincare.productTwo
      // );

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
      await commands.waitThenMoveTo(
        HomePage.categoryMenuComponent.categoryMenuLink(
          testData.categories.apparel.name
        )
      );
      await commands.waitThenClick(
        CategoryMenuComponent.subcategory(
          testData.categories.apparel.subcategoryShoes
        )
      );

      await ItemComponent.selectProduct(
        testData.categories.apparel.productThree
      );

      await commands.waitThenClick(ItemComponent.addToCartBtn);

      await expect(ItemComponent.shoppingCartHeader).toBeDisplayed();
      let texts = await CartPage.getTextsFromItemsInBasket();
      await expect(texts).toContain(testData.categories.apparel.productThree);
    });
  });

  describe("ADD T-SHIRTS", () => {
    it("adds t-shirts and checks if items are in cart", async () => {
      await commands.waitThenMoveTo(
        HomePage.categoryMenuComponent.categoryMenuLink(
          testData.categories.apparel.name
        )
      );
      await commands.waitThenClick(
        CategoryMenuComponent.subcategory(
          testData.categories.apparel.subcategoryTshirts
        )
      );

      await commands.waitThenClickProduct(
        testData.categories.apparel.productOne
      );
      await commands.waitThenClick(ItemComponent.addToCartBtn);

      await commands.waitThenMoveTo(
        HomePage.categoryMenuComponent.categoryMenuLink(
          testData.categories.apparel.name
        )
      );
      await commands.waitThenClick(
        CategoryMenuComponent.subcategory(
          testData.categories.apparel.subcategoryTshirts
        )
      );

      await commands.waitThenClickProduct(
        testData.categories.apparel.productTwo
      );
      await commands.waitThenClick(ItemComponent.addToCartBtn);

      let texts = await CartPage.getTextsFromItemsInBasket();

      await expect(texts).toContain(testData.categories.apparel.productOne);
      await expect(texts).toContain(testData.categories.apparel.productTwo);
    });
  });

  describe("ADDS BOOKS", () => {
    it("adds a book", async () => {
      await commands.waitThenMoveTo(
        HomePage.categoryMenuComponent.categoryMenuLink(
          testData.categories.books.name
        )
      );
      await commands.waitThenClick(
        HomePage.categoryMenuComponent.categoryMenuLink(
          testData.categories.books.subcategoryPaperback
        )
      );
      await commands.waitThenClickProduct(testData.categories.books.productOne);
      await commands.waitThenClick(ItemComponent.addToCartBtn);

      let texts = await CartPage.getTextsFromItemsInBasket();
      await expect(texts).toContain(testData.categories.books.productOne);
    });
  });

  describe("ADDS FRAGRANCE", () => {
    it("adds a men fragrance", async () => {
      await commands.waitThenMoveTo(
        HomePage.categoryMenuComponent.categoryMenuLink(
          testData.categories.fragrance.name
        )
      );
      await commands.waitThenClick(
        HomePage.categoryMenuComponent.categoryMenuLink(
          testData.categories.fragrance.subcategoryMen
        )
      );
      await commands.waitThenClickProduct(
        testData.categories.fragrance.productOne
      );
      await commands.waitThenClick(ItemComponent.addToCartBtn);

      let texts = await CartPage.getTextsFromItemsInBasket();
      await expect(texts).toContain(testData.categories.fragrance.productOne);
    });
  });
});
