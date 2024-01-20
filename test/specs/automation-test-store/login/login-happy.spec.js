import HomePage from "../../../pageObjects/automation-test-store/home.page";
import testData from "../../../data/testData";
import MyAccountPage from "../../../pageObjects/automation-test-store/my-account.page";
import TopMenuComponent from "../../../pageObjects/automation-test-store/components/top-menu.comp";
import LoginPage from "../../../pageObjects/automation-test-store/login.page";
import commands from "../../../../utils/commands";
import CategoryMenuComponent from "../../../../test/pageObjects/automation-test-store/components/category-menu.comp";
import SharedPageComponents from "../../../pageObjects/automation-test-store/components/shared-page-components.comp";

describe("@smoke LOGIN PAGE - happy path", async () => {
  describe("LOGIN PAGE - happy path", async () => {
    beforeEach(async () => {
      await HomePage.open();
      await LoginPage.loginRegisteredUser();
    });

    afterEach(async () => {
      await expect(
        SharedPageComponents.pageHeader(testData.headers.accountLogout)
      ).toHaveText(testData.headers.accountLogout.toUpperCase());
    });

    it("logs in (via login page) and logs out (via right side menu)", async () => {
      await expect(
        SharedPageComponents.pageHeader(testData.headers.myAccount)
      ).toHaveText(testData.headers.myAccount.toUpperCase());

      await commands.waitThenClick(MyAccountPage.sideMenuLogoff);
    });

    it("logs in and logs out (via submenu)", async () => {
      await commands.waitThenClick(MyAccountPage.sideMenuLogoff);
    });

    it("logs in and logs out (via topmenu dropdown)", async () => {
      await commands.waitThenMoveTo(TopMenuComponent.welcomeBackDropdown);
      await commands.waitThenClick(MyAccountPage.topMenuLogoff);
    });

    it("logs in and logs out (via footer)", async () => {
      await commands.waitThenClick(MyAccountPage.footerMenuLogoff);
    });
  });

  describe("LOGIN THROUGH HOME DROPDOWN - happy path", async () => {
    before(async () => {
      await HomePage.open();
      await HomePage.bannerSlide.waitForDisplayed();
      await HomePage.scrollToLogo();
    });

    it("logs in through the Home dropdown and Account dropdown", async () => {
      await commands.waitThenSelectCategoryAndOrSubcategory(
        testData.categories.home.name
      );

      await commands.waitThenMoveTo(
        CategoryMenuComponent.homeCategorySubcategoryOption(
          testData.categories.home.subcategoryAccount.name
        )
      );
      await commands.waitThenClick(CategoryMenuComponent.homeCategoryDropdownLoginBtn);

      await commands.waitThenSetValue(
        LoginPage.loginName,
        testData.registeredUser.loginName
      );
      await commands.waitThenSetValue(
        LoginPage.password,
        testData.registeredUser.password
      );
      await commands.waitThenClick(LoginPage.loginButton);

      await commands.waitThenClick(MyAccountPage.sideMenuLogoff);

      await expect(
        await commands.waitThenGetText(
          SharedPageComponents.pageHeader(testData.headers.accountLogout)
        )
      ).toContain(testData.headers.accountLogout.toUpperCase());
    });

    it("goes to login page through Account top menu button", async () => {
      await commands.waitThenMoveTo(
        TopMenuComponent.topMenuLink(testData.topMenu.account.name)
      );

      await commands.waitThenClick(
        TopMenuComponent.topMenuLink(testData.topMenu.account.subcategoryLoginBtn)
      );

      await expect(
        SharedPageComponents.pageHeader(testData.headers.accountLogin).toBeDisplayed()
      );
    });
  });
});
