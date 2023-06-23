import TopMenuComponent from "../../../pageObjects/automation-test-store/components/top-menu.comp";
import SharedPageComponents from "../../../pageObjects/automation-test-store/components/shared-page-components.comp";
import CategoryMenuComponent from "../../../pageObjects/automation-test-store/components/category-menu.comp";
import commands from "../../../../utils/commands";
import HomePage from "../../../pageObjects/automation-test-store/home.page";
import testData from "../../../data/testData";
import LoginPage from "../../../pageObjects/automation-test-store/login.page";
import MyAccountPage from "../../../pageObjects/automation-test-store/my-account.page";
import TopCartPage from "../../../pageObjects/automation-test-store/top-cart.page";

describe("CHECKOUT", () => {
  describe("ENTER CHECKOUT FROM 3 DIFFERENT LOCATIONS", () => {
    beforeEach(async () => {
      await HomePage.open();
      await LoginPage.loginRegisteredUser();
    });

    afterEach(async () => {
      const expectedHeaderText =
        await testData.headers.checkoutConfirmation.toUpperCase();

      await expect(
        SharedPageComponents.pageHeader(testData.headers.checkoutConfirmation)
      ).toHaveText(expectedHeaderText);

      await commands.waitThenClick(MyAccountPage.footerMenuLogoff);
    });

    it("enters checkout from top menu", async () => {
      await commands.waitThenClick(
        TopMenuComponent.topMenuLink(testData.topMenu.checkout.name)
      );
    });

    it("enters checkout from Home category dropdown on left side", async () => {
      await commands.waitThenMoveTo(
        HomePage.categoryMenuComponent.categoryMenuLink(
          testData.categories.home.name
        )
      );

      await commands.waitThenClick(
        CategoryMenuComponent.homeCategorySubcategoryOption(
          testData.categories.home.subcategoryCheckout.name
        )
      );
    });

    it("enters checkout from top cart", async () => {
      await commands.waitThenMoveTo(TopCartPage.topCartDropdown);
      await commands.waitThenClick(TopCartPage.topCartCheckoutBtn);
    });
  });
});
