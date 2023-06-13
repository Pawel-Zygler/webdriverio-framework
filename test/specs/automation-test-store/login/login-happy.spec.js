import HomePage from "../../../pageObjects/automation-test-store/home.page";
import testData from "../../../data/testData";
import MyAccountPage from "../../../pageObjects/automation-test-store/my-account.page";
import TopMenuComp from "../../../pageObjects/automation-test-store/components/top-menu.comp";
import LoginPage from "../../../pageObjects/automation-test-store/login.page";

describe("LOGIN PAGE - happy path", () => {
  beforeEach(() => {
    HomePage.open();
    TopMenuComp.loginOrRegister.click();
  });

  it("logs in (via login page) and logs out (via side menu)", async () => {
    await LoginPage.loginName.setValue(testData.registeredUser.loginName);
    await LoginPage.password.setValue(testData.registeredUser.password);
    await LoginPage.loginButton.click();

    await expect(await MyAccountPage.MyAccountPageHeader).toHaveText(
      "MY ACCOUNT"
    );
    await MyAccountPage.sideMenuLogoff.click();
    await expect(await MyAccountPage.logoutHeader).toHaveText("ACCOUNT LOGOUT");
  });

  it("logs in and logs out (via submenu)", async () => {
    await LoginPage.loginName.setValue(testData.registeredUser.loginName);
    await LoginPage.password.setValue(testData.registeredUser.password);
    await LoginPage.loginButton.click();

    await MyAccountPage.sideMenuLogoff.click();
    await expect(await MyAccountPage.logoutHeader).toHaveText("ACCOUNT LOGOUT");
  });

  it("logs in and logs out (via topmenu)", async () => {
    await LoginPage.loginName.setValue(testData.registeredUser.loginName);
    await LoginPage.password.setValue(testData.registeredUser.password);
    await LoginPage.loginButton.click();

    await TopMenuComp.welcomeBackDropdown.moveTo();

    await MyAccountPage.topMenuLogoff.click();

    await expect(await MyAccountPage.logoutHeader).toHaveText("ACCOUNT LOGOUT");
  });

  it("logs in and logs out (via footer)", async () => {
    await LoginPage.loginName.setValue(testData.registeredUser.loginName);
    await LoginPage.password.setValue(testData.registeredUser.password);
    await LoginPage.loginButton.click();

    await MyAccountPage.footerMenuLogoff.click();
    await expect(await MyAccountPage.logoutHeader).toHaveText("ACCOUNT LOGOUT");
  });
});
