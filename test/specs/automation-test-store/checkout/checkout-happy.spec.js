import TopMenuComponent from "../../../pageObjects/automation-test-store/components/top-menu.comp";
import SharedPageComponents from "../../../pageObjects/automation-test-store/components/shared-page-components.comp";
import CategoryMenuComponent from "../../../pageObjects/automation-test-store/components/category-menu.comp";
import commands from "../../../../utils/commands";
import HomePage from "../../../pageObjects/automation-test-store/home.page";
import testData from "../../../data/testData";
import LoginPage from "../../../pageObjects/automation-test-store/login.page";
import MyAccountPage from "../../../pageObjects/automation-test-store/my-account.page";
import TopCartPage from "../../../pageObjects/automation-test-store/top-cart.page";
import CartPage from "../../../pageObjects/automation-test-store/cart.page";
import CheckoutPage from "../../../pageObjects/automation-test-store/checkout.page";
import assert from "assert";

describe("CHECKOUT LOGGED IN", () => {
  describe("ADDS A SHOE", () => {
    beforeEach(async () => {
      await HomePage.open();
      await LoginPage.loginRegisteredUser();
      await CartPage.addItemToBasket(
        testData.categories.apparel.name,
        testData.categories.apparel.subcategoryShoes.name,
        testData.categories.apparel.subcategoryShoes.shoeOne
      );
    });

    afterEach(async () => {
      const expectedHeaderText = await testData.headers.checkoutConfirmation.toUpperCase();

      await expect(SharedPageComponents.pageHeader(testData.headers.checkoutConfirmation)).toHaveText(
        expectedHeaderText
      );

      await commands.waitThenClick(MyAccountPage.footerMenuLogoff);
    });

    it("enters checkout from top menu", async () => {
      await commands.waitThenClick(TopMenuComponent.topMenuLink(testData.topMenu.checkout.name));
    });

    it("enters checkout from Home category dropdown on left side", async () => {
      await commands.waitThenMoveTo(HomePage.categoryMenuComponent.categoryMenuLink(testData.categories.home.name));

      await commands.waitThenClick(
        CategoryMenuComponent.homeCategorySubcategoryOption(testData.categories.home.subcategoryCheckout.name)
      );
    });

    it("enters checkout from top cart", async () => {
      await commands.waitThenMoveTo(TopCartPage.topCartDropdown);
      await commands.waitThenClick(TopCartPage.topCartCheckoutBtn);
    });

    it("enters checkout using top checkout cart button", async () => {
      await commands.waitThenClick(CheckoutPage.shoppingCartCheckoutBtnOne);
    });

    it("enters checkout using top checkout cart button", async () => {
      await commands.waitThenClick(CheckoutPage.shoppingCartCheckoutBtnTwo);
    });
  });

  describe("ADDS A SHOE", () => {
    beforeEach(async () => {
      await HomePage.open();
      await LoginPage.loginRegisteredUser();
      await CartPage.addItemToBasket(
        testData.categories.apparel.name,
        testData.categories.apparel.subcategoryShoes.name,
        testData.categories.apparel.subcategoryShoes.shoeOne
      );
    });

    afterEach(async () => {
      const expectedHeaderText = await testData.headers.yourOrderHasBeenProcessed.toUpperCase();

      await expect(SharedPageComponents.pageHeader(testData.headers.yourOrderHasBeenProcessed)).toHaveText(
        expectedHeaderText
      );

      await commands.waitThenClick(MyAccountPage.footerMenuLogoff);
    });

    it("completes checkout", async () => {
      await commands.waitThenClick(CheckoutPage.shoppingCartCheckoutBtnOne);
      await commands.waitThenClick(CheckoutPage.confirmOrderBtn);
    });

    it("completes checkout and verifies order number has been created", async () => {
      await commands.waitThenClick(CheckoutPage.shoppingCartCheckoutBtnOne);
      await commands.waitThenClick(CheckoutPage.confirmOrderBtn);

      let regex = /Your order #\d+ has been created!/;

      let orderNumber = await commands.waitThenGetText(CheckoutPage.orderNumber);

      await console.log(orderNumber);
      await assert(regex.test(orderNumber));
    });
  });

  describe("COMPLETES CHECKOUT", () => {
    beforeEach(async () => {
      await HomePage.open();
      await LoginPage.loginRegisteredUser();
      await CartPage.addItemToBasket(
        testData.categories.skincare.name,
        testData.categories.skincare.subcategoryFace.name,
        testData.categories.skincare.subcategoryFace.productOne
      );
      await commands.waitThenClick(CheckoutPage.shoppingCartCheckoutBtnOne);
      await commands.waitThenClick(CheckoutPage.confirmOrderBtn);
    });

    afterEach(async () => {
      await commands.waitThenClick(MyAccountPage.footerMenuLogoff);
    });

    it("goes to invoice page", async () => {
      await commands.waitThenClick(CheckoutPage.invoiceLink);

      const expectedHeaderText = await testData.headers.orderDetails.toUpperCase();

      await expect(SharedPageComponents.pageHeader(testData.headers.orderDetails)).toHaveText(expectedHeaderText);
    });
  });

  describe("LOGIN DURING CHECKOUT", () => {
    beforeEach(async () => {
      await HomePage.open();
      await CartPage.addItemToBasket(
        testData.categories.skincare.name,
        testData.categories.skincare.subcategoryFace.name,
        testData.categories.skincare.subcategoryFace.productOne
      );
      await commands.waitThenClick(CheckoutPage.shoppingCartCheckoutBtnOne);
      await commands.waitThenSetValue(LoginPage.loginName, testData.registeredUser.loginName);
      await commands.waitThenSetValue(LoginPage.password, testData.registeredUser.password);
      await commands.waitThenClick(LoginPage.loginButton);
    });

    it("completes checkout after logging in", async () => {
      await commands.waitThenClick(CheckoutPage.confirmOrderBtn);

      const expectedHeaderText = await testData.headers.yourOrderHasBeenProcessed.toUpperCase();

      await expect(SharedPageComponents.pageHeader(testData.headers.yourOrderHasBeenProcessed)).toHaveText(
        expectedHeaderText
      );
    });
  });
});
