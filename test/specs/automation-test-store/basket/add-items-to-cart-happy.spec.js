import CartPage from "../../../pageObjects/automation-test-store/cart.page";
import ItemComponent from "../../../pageObjects/automation-test-store/components/item.comp";
import CategoryMenuComponent from "../../../pageObjects/automation-test-store/components/category-menu.comp";
import commands from "../../../../utils/commands";
import HomePage from "../../../pageObjects/automation-test-store/home.page";
import testData from "../../../data/testData";
import SharedPageComponents from "../../../pageObjects/automation-test-store/components/shared-page-components.comp";

describe("CART - happy path", () => {
  beforeEach(async () => {
    await HomePage.open();
    await HomePage.bannerSlide.waitForDisplayed();
    await HomePage.scrollToLogo();
  });

  afterEach(async () => {
    await CartPage.deleteItemsFromCart();

    await expect(CartPage.isShoppingCartEmpty).toBeDisplayed();
  });

  describe(`${testData.categories.skincare.name}`, () => {
    it(`adds subcategory ${testData.categories.skincare.subcategoryFace.name} products and validates cart total`, async () => {
      await CartPage.addItemToCart(
        testData.categories.skincare.name,
        testData.categories.skincare.subcategoryFace.name,
        testData.categories.skincare.subcategoryFace.productOne
      );

      await CartPage.addItemToCart(
        testData.categories.skincare.name,
        testData.categories.skincare.subcategoryFace.name,
        testData.categories.skincare.subcategoryFace.productTwo
      );
      //szuka to ponownie tego kremu subcategoryFace.productTwo
      //dlaczego ponownie tam wraca?

      await expect(browser).toHaveUrlContaining("cart");

      await CartPage.validateTotal();
    });
  });

  describe(`${testData.categories.apparel.name}`, () => {
    it(`adds subcategory Shoes products with clicking dropdown and validates items are in basket`, async () => {
      await CartPage.addItemToCart(
        testData.categories.apparel.name,
        testData.categories.apparel.subcategoryShoes.name,
        testData.categories.apparel.subcategoryShoes.shoeOne
      );

      await expect(SharedPageComponents.pageHeader(testData.headers.shoppingCart)).toBeDisplayed();

      let texts = await CartPage.getTextsFromItemsInCart();

      await expect(texts).toContain(testData.categories.apparel.subcategoryShoes.shoeOne);
    });

    it(`adds a shoe of size ${testData.categories.apparel.subcategoryShoes.shoeTwoSize40}`, async () => {
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

      let texts = await CartPage.getTextsFromItemsAttributesInCart(
        testData.categories.apparel.subcategoryShoes.shoeTwo
      );
      await texts.includes(testData.categories.apparel.subcategoryShoes.shoeTwoSize40);
    });

    it(`adds ${testData.categories.apparel.subcategoryShoes.shoeGreenColor} shoe`, async () => {
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

      let texts = await CartPage.getTextsFromItemsAttributesInCart(
        testData.categories.apparel.subcategoryShoes.shoeThree
      );

      await texts.includes(testData.categories.apparel.subcategoryShoes.shoeGreenColor);
    });
  });

  describe(`${testData.categories.apparel.name}`, () => {
    it(`adds subcategory ${testData.categories.apparel.subcategoryTshirts.name} products and checks if items are in cart`, async () => {
      await CartPage.addItemToCart(
        testData.categories.apparel.name,
        testData.categories.apparel.subcategoryTshirts.name,
        testData.categories.apparel.subcategoryTshirts.tshirtOne
      );

      await CartPage.addItemToCart(
        testData.categories.apparel.name,
        testData.categories.apparel.subcategoryTshirts.name,
        testData.categories.apparel.subcategoryTshirts.tshirtTwo
      );

      let texts = await CartPage.getTextsFromItemsInCart();

      await expect(texts).toContain(testData.categories.apparel.subcategoryTshirts.tshirtOne);
      await expect(texts).toContain(testData.categories.apparel.subcategoryTshirts.tshirtTwo);
    });
  });

  describe(`${testData.categories.books.name}`, () => {
    it(`adds a subcategory ${testData.categories.books.subcategoryPaperback.name} products and validates item is in basket`, async () => {
      await CartPage.addItemToCart(
        testData.categories.books.name,
        testData.categories.books.subcategoryPaperback.name,
        testData.categories.books.subcategoryPaperback.productOne
      );

      let texts = await CartPage.getTextsFromItemsInCart();
      await expect(texts).toContain(testData.categories.books.subcategoryPaperback.productOne);
    });
  });

  describe(`${testData.categories.fragrance.name}`, () => {
    it(`adds a subcategory ${testData.categories.fragrance.subcategoryMen.name} men fragrance`, async () => {
      await CartPage.addItemToCart(
        testData.categories.fragrance.name,
        testData.categories.fragrance.subcategoryMen.name,
        testData.categories.fragrance.subcategoryMen.productOne
      );

      let texts = await CartPage.getTextsFromItemsInCart();
      await expect(texts).toContain(testData.categories.fragrance.subcategoryMen.productOne);
    });
  });

  describe("ADD PRODUCTS", async () => {
    beforeEach(async () => {
      await HomePage.open();
      await CartPage.addItemToCart(
        testData.categories.skincare.name,
        testData.categories.skincare.subcategoryFace.name,
        testData.categories.skincare.subcategoryFace.productOne
      );

      await CartPage.addItemToCart(
        testData.categories.apparel.name,
        testData.categories.apparel.subcategoryShoes.name,
        testData.categories.apparel.subcategoryShoes.shoeOne
      );

      await CartPage.addItemToCart(
        testData.categories.books.name,
        testData.categories.books.subcategoryPaperback.name,
        testData.categories.books.subcategoryPaperback.productOne
      );
    });

    it("clears cart to empty", async () => {
      await CartPage.deleteItemsFromCart();

      await expect(CartPage.isShoppingCartEmpty).toBeDisplayed();
    });
  });
});
