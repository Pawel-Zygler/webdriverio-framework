import CartPage from "../../../pageObjects/automation-test-store/cart.page";
import HomePage from "../../../pageObjects/automation-test-store/home.page";
import testData from "../../../data/testData";
import commands from "../../../../utils/commands.js";
import SharedPageComponents from "../../../pageObjects/automation-test-store/components/shared-page-components.comp";

describe("CART - happy path", () => {
  beforeEach(async () => {
    await HomePage.open();
    await HomePage.bannerSlide.waitForDisplayed();
    await HomePage.scrollToLogo();
  });

  describe(`${testData.categories.skincare.name}`, async () => {
    it(`adds subcategory face products and validates cart total`, async () => {
      await CartPage.addItemToCart(
        testData.categories.skincare.name,
        testData.categories.skincare.subcategoryFace.name,
        testData.categories.skincare.subcategoryFace.productOne.name
      );

      await CartPage.addItemToCart(
        testData.categories.skincare.name,
        testData.categories.skincare.subcategoryFace.name,
        testData.categories.skincare.subcategoryFace.productTwo
      );

      await expect(browser).toHaveUrlContaining("cart");

      await CartPage.validateTotal();
    });
  });

  describe(`${testData.categories.apparel.name}`, () => {
    it(`adds subcategory shoes products with clicking dropdown and validates items are in basket`, async () => {
      await CartPage.addItemToCart(
        testData.categories.apparel.name,
        testData.categories.apparel.subcategoryShoes.name,
        testData.categories.apparel.subcategoryShoes.shoeOne
      );

      await expect(
        SharedPageComponents.pageHeader(testData.headers.shoppingCart)
      ).toBeDisplayed();

      let texts = await CartPage.getTextsFromItemsInCart();

      await browser.pause(3000);
      await expect(texts).toContain(testData.categories.apparel.subcategoryShoes.shoeOne);
    });

    it(`adds a shoe of size ${testData.categories.apparel.subcategoryShoes.shoeTwoSize40}`, async () => {
      await CartPage.addItemToCart(
        testData.categories.apparel.name,
        testData.categories.apparel.subcategoryShoes.name,
        testData.categories.apparel.subcategoryShoes.shoeTwo,
        testData.categories.apparel.subcategoryShoes.shoeTwoSize40
      );

      let texts = await CartPage.getTextsFromItemsAttributesInCart(
        testData.categories.apparel.subcategoryShoes.shoeTwo
      );
      await texts.includes(testData.categories.apparel.subcategoryShoes.shoeTwoSize40);
    });

    it(`adds ${testData.categories.apparel.subcategoryShoes.shoeGreenColor} shoe`, async () => {
      await CartPage.addItemToCart(
        testData.categories.apparel.name,
        testData.categories.apparel.subcategoryShoes.name,
        testData.categories.apparel.subcategoryShoes.shoeThree,
        null,
        testData.categories.apparel.subcategoryShoes.shoeGreenColor
      );

      let texts = await CartPage.getTextsFromItemsAttributesInCart(
        testData.categories.apparel.subcategoryShoes.shoeThree
      );
      await texts.includes(testData.categories.apparel.subcategoryShoes.shoeGreenColor);
    });
  });

  describe(`${testData.categories.apparel.name}`, () => {
    //move out of bounds ocasionally, not when running single it block test
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
      await expect(texts).toContain(
        testData.categories.apparel.subcategoryTshirts.tshirtOne
      );
      await expect(texts).toContain(
        testData.categories.apparel.subcategoryTshirts.tshirtTwo
      );
    });
  });

  describe(`${testData.categories.books.name}`, () => {
    it.only(`adds a subcategory ${testData.categories.books.subcategoryPaperback.name} products and validates item is in cart`, async () => {
      await CartPage.addItemToCart(
        testData.categories.books.name,
        testData.categories.books.subcategoryPaperback.name,
        testData.categories.books.subcategoryPaperback.productOne.name
      );

      let texts = await CartPage.getTextsFromItemsInCart();
      await expect(texts).toContain(
        testData.categories.books.subcategoryPaperback.productOne.name
      );
    });
  });

  describe(`${testData.categories.fragrance.name}`, () => {
    it(`adds a subcategory ${testData.categories.fragrance.subcategoryMen.name} men fragrance`, async () => {
      await CartPage.addItemToCart(
        testData.categories.fragrance.name,
        testData.categories.fragrance.subcategoryMen.name,
        testData.categories.fragrance.subcategoryMen.productOne.name
      );

      let texts = await CartPage.getTextsFromItemsInCart();
      await expect(texts).toContain(
        testData.categories.fragrance.subcategoryMen.productOne.name
      );
    });
  });

  describe("ADD PRODUCTS", async () => {
    beforeEach(async () => {
      await HomePage.open();
      await CartPage.addItemToCart(
        testData.categories.skincare.name,
        testData.categories.skincare.subcategoryFace.name,
        testData.categories.skincare.subcategoryFace.productOne.name
      );

      await CartPage.addItemToCart(
        testData.categories.apparel.name,
        testData.categories.apparel.subcategoryShoes.name,
        testData.categories.apparel.subcategoryShoes.shoeOne
      );

      await CartPage.addItemToCart(
        testData.categories.books.name,
        testData.categories.books.subcategoryPaperback.name,
        testData.categories.books.subcategoryPaperback.productOne.name
      );
    });

    it("clears cart to empty", async () => {
      await CartPage.deleteItemsFromCart();

      await expect(CartPage.isShoppingCartEmpty).toBeDisplayed();
    });
  });

  describe("ADD 10 PRODUCTS", () => {
    beforeEach(async () => {
      await HomePage.open();
      await CartPage.addItemToCart(
        testData.categories.skincare.name,
        testData.categories.skincare.subcategoryFace.name,
        testData.categories.skincare.subcategoryFace.productOne.name
      );
    });

    it("it multiplies added product * 10 and asserts the number", async () => {
      await commands.waitThenSetValue(CartPage.itemQuantity, "10");
      await commands.waitThenClick(CartPage.updateCartBtn);
      const elementValue = await CartPage.itemQuantity.getAttribute("value");
      await expect(elementValue).toEqual("10");
    });
  });
});
