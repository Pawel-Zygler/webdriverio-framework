import CartPage from "../../../pageObjects/automation-test-store/cart.page";
import ItemComponent from "../../../pageObjects/automation-test-store/components/item.comp";
import CategoryMenuComponent from "../../../pageObjects/automation-test-store/components/category-menu.comp";
import commands from "../../../../utils/commands";
import HomePage from "../../../pageObjects/automation-test-store/home.page";
import testData from "../../../data/testData";

describe("ADD PRODUCTS - happy path", () => {
  beforeEach(async () => {
    await HomePage.open();
    await HomePage.bannerSlide.waitForDisplayed();
    await HomePage.scrollToLogo();
  });

  describe(`${testData.categories.skincare.name}`, () => {
    it(`adds subcategory ${testData.categories.skincare.subcategoryFace} products and validates cart total`, async () => {
      await commands.waitThenMoveTo(
        HomePage.categoryMenuComponent.categoryMenuLink(
          testData.categories.skincare.name
        )
      );
      await commands.waitThenClick(
        CategoryMenuComponent.subcategory(
          testData.categories.skincare.name,
          testData.categories.skincare.subcategoryFace
        )
      );
      await ItemComponent.selectProduct(
        testData.categories.skincare.productOne
      );
      await commands.waitThenClick(ItemComponent.addToCartBtn);

      await commands.waitThenMoveTo(
        HomePage.categoryMenuComponent.categoryMenuLink(
          testData.categories.skincare.name
        )
      );
      await commands.waitThenClick(
        CategoryMenuComponent.subcategory(
          testData.categories.skincare.name,
          testData.categories.skincare.subcategoryFace
        )
      );
      await ItemComponent.selectProduct(
        testData.categories.skincare.productTwo
      );
      await commands.waitThenClick(ItemComponent.addToCartBtn);

      await expect(browser).toHaveUrlContaining("checkout");
      await CartPage.validateTotal();
    });
  });

  describe(`${testData.categories.apparel.name}`, () => {
    it(`adds subcategory ${testData.categories.apparel.subcategoryShoes} products with clicking dropdown and validates items are in basket`, async () => {
      await commands.waitThenMoveTo(
        HomePage.categoryMenuComponent.categoryMenuLink(
          testData.categories.apparel.name
        )
      );
      await commands.waitThenClick(
        CategoryMenuComponent.subcategory(
          testData.categories.apparel.name,
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
      await browser.pause(3000);
    });
  });

  describe(`${testData.categories.apparel.name}`, () => {
    it(`adds subcategory ${testData.categories.apparel.subcategoryTshirts.name} products and checks if items are in cart`, async () => {
      await browser.pause(2000);
      await commands.waitThenMoveTo(
        HomePage.categoryMenuComponent.categoryMenuLink(
          testData.categories.apparel.name
        )
      );
      await commands.waitThenClick(
        CategoryMenuComponent.subcategory(
          testData.categories.apparel.name,
          testData.categories.apparel.subcategoryTshirts.name
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
          testData.categories.apparel.name,
          testData.categories.apparel.subcategoryTshirts.name
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

  describe(`${testData.categories.books.name}`, () => {
    it(`adds a subcategory ${testData.categories.books.subcategoryPaperback.name} products and validates item is in basket`, async () => {
      await commands.waitThenMoveTo(
        HomePage.categoryMenuComponent.categoryMenuLink(
          testData.categories.books.name
        )
      );
      await commands.waitThenClick(
        HomePage.categoryMenuComponent.subcategory(
          testData.categories.books.name,
          testData.categories.books.subcategoryPaperback.name
        )
      );
      await commands.waitThenClickProduct(
        testData.categories.books.subcategoryPaperback.productOne
      );
      await commands.waitThenClick(await ItemComponent.addToCartBtn);

      let texts = await CartPage.getTextsFromItemsInBasket();
      await expect(texts).toContain(
        testData.categories.books.subcategoryPaperback.productOne
      );
    });
  });

  describe(`${testData.categories.fragrance.name}`, () => {
    it(`adds a subcategory ${testData.categories.fragrance.subcategoryMen.name} men fragrance`, async () => {
      await commands.waitThenMoveTo(
        HomePage.categoryMenuComponent.categoryMenuLink(
          testData.categories.fragrance.name
        )
      );

      await commands.waitThenClick(
        HomePage.categoryMenuComponent.subcategory(
          testData.categories.fragrance.name,
          testData.categories.fragrance.subcategoryMen.name
        )
      );

      await commands.waitThenClickProduct(
        testData.categories.fragrance.subcategoryMen.productOne
      );

      await commands.waitThenClick(ItemComponent.addToCartBtn);

      let texts = await CartPage.getTextsFromItemsInBasket();
      await expect(texts).toContain(
        testData.categories.fragrance.subcategoryMen.productOne
      );
    });
  });
});
