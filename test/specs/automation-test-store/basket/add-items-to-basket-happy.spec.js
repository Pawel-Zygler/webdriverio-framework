import CartPage from "../../../pageObjects/automation-test-store/cart.page";
import ItemComponent from "../../../pageObjects/automation-test-store/components/item.comp";
import CategoryMenuComponent from "../../../pageObjects/automation-test-store/components/category-menu.comp";
import commands from "../../../../utils/commands";
import HomePage from "../../../pageObjects/automation-test-store/home.page";
import testData from "../../../data/testData";
import SharedPageComponents from "../../../pageObjects/automation-test-store/components/shared-page-components.comp";

describe("ADD PRODUCTS - happy path", () => {
  beforeEach(async () => {
    await HomePage.open();
    await HomePage.bannerSlide.waitForDisplayed();
    await HomePage.scrollToLogo();
  });

  describe(`${testData.categories.skincare.name}`, () => {
    it(`adds subcategory ${testData.categories.skincare.subcategoryFace.name} products and validates cart total`, async () => {
      await CartPage.addItemToBasket(
        testData.categories.skincare.name,
        testData.categories.skincare.subcategoryFace.name,
        testData.categories.skincare.subcategoryFace.productOne
      );

      await CartPage.addItemToBasket(
        testData.categories.skincare.name,
        testData.categories.skincare.subcategoryFace.name,
        testData.categories.skincare.subcategoryFace.productTwo
      );

      await expect(browser).toHaveUrlContaining("checkout");
      await CartPage.validateTotal();
    });
  });

  describe(`${testData.categories.apparel.name}`, () => {
    it(`adds subcategory ${testData.categories.apparel.subcategoryShoes} products with clicking dropdown and validates items are in basket`, async () => {
      await CartPage.addItemToBasket(
        testData.categories.apparel.name,
        testData.categories.apparel.subcategoryShoes.name,
        testData.categories.apparel.subcategoryShoes.shoeOne
      );

      await expect(SharedPageComponents.pageHeader(testData.headers.shoppingCart)).toBeDisplayed();

      let texts = await CartPage.getTextsFromItemsInBasket();
      //added this pause due to flaky test, possibly to improve
      await browser.pause(3000);
      await expect(texts).toContain(testData.categories.apparel.subcategoryShoes.shoeOne);
    });

    it(`adds a shoe of size ${testData.categories.apparel.subcategoryShoes.shoeTwoSize40}`, async () => {
      //use method add items to basket, add size option
      await commands.waitThenMoveTo(HomePage.categoryMenuComponent.categoryMenuLink(testData.categories.apparel.name));

      await commands.waitThenClick(
        CategoryMenuComponent.subcategory(
          testData.categories.apparel.name,
          testData.categories.apparel.subcategoryShoes.name
        )
      );

      await commands.waitThenClickProduct(testData.categories.apparel.subcategoryShoes.shoeTwo);

      await ItemComponent.selectSizeDropdown.selectByVisibleText(
        testData.categories.apparel.subcategoryShoes.shoeTwoSize40
      );

      await commands.waitThenClick(ItemComponent.addToCartBtn);

      let texts = await CartPage.getTextsFromItemsAttributesInBasket(
        testData.categories.apparel.subcategoryShoes.shoeTwo
      );
      await texts.includes(testData.categories.apparel.subcategoryShoes.shoeTwoSize40);
    });

    it(`adds ${testData.categories.apparel.subcategoryShoes.shoeGreenColor} shoe`, async () => {
      //use method add items to basket, add size option
      await commands.waitThenMoveTo(HomePage.categoryMenuComponent.categoryMenuLink(testData.categories.apparel.name));

      await commands.waitThenClick(
        CategoryMenuComponent.subcategory(
          testData.categories.apparel.name,
          testData.categories.apparel.subcategoryShoes.name
        )
      );

      await commands.waitThenClickProduct(testData.categories.apparel.subcategoryShoes.shoeThree);

      await commands.waitThenClick(
        ItemComponent.selectColourRadioBtn(testData.categories.apparel.subcategoryShoes.shoeGreenColor)
      );

      await commands.waitThenClick(ItemComponent.addToCartBtn);

      let texts = await CartPage.getTextsFromItemsAttributesInBasket(
        testData.categories.apparel.subcategoryShoes.shoeThree
      );
      await texts.includes(testData.categories.apparel.subcategoryShoes.shoeGreenColor);
    });
  });

  describe(`${testData.categories.apparel.name}`, () => {
    it(`adds subcategory ${testData.categories.apparel.subcategoryTshirts.name} products and checks if items are in cart`, async () => {
      await CartPage.addItemToBasket(
        testData.categories.apparel.name,
        testData.categories.apparel.subcategoryTshirts.name,
        testData.categories.apparel.subcategoryTshirts.tshirtOne
      );

      await CartPage.addItemToBasket(
        testData.categories.apparel.name,
        testData.categories.apparel.subcategoryTshirts.name,
        testData.categories.apparel.subcategoryTshirts.tshirtTwo
      );

      let texts = await CartPage.getTextsFromItemsInBasket();
      await expect(texts).toContain(testData.categories.apparel.subcategoryTshirts.tshirtOne);
      await expect(texts).toContain(testData.categories.apparel.subcategoryTshirts.tshirtTwo);
    });
  });

  describe(`${testData.categories.books.name}`, () => {
    it(`adds a subcategory ${testData.categories.books.subcategoryPaperback.name} products and validates item is in basket`, async () => {
      await CartPage.addItemToBasket(
        testData.categories.books.name,
        testData.categories.books.subcategoryPaperback.name,
        testData.categories.books.subcategoryPaperback.productOne
      );

      let texts = await CartPage.getTextsFromItemsInBasket();
      await expect(texts).toContain(testData.categories.books.subcategoryPaperback.productOne);
    });
  });

  describe(`${testData.categories.fragrance.name}`, () => {
    it(`adds a subcategory ${testData.categories.fragrance.subcategoryMen.name} men fragrance`, async () => {
      await CartPage.addItemToBasket(
        testData.categories.fragrance.name,
        testData.categories.fragrance.subcategoryMen.name,
        testData.categories.fragrance.subcategoryMen.productOne
      );

      let texts = await CartPage.getTextsFromItemsInBasket();
      await expect(texts).toContain(testData.categories.fragrance.subcategoryMen.productOne);
    });
  });
});
