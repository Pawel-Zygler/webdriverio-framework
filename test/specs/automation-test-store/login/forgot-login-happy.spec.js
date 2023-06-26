import HomePage from "../../../pageObjects/automation-test-store/home.page";
import ForgotLoginPage from "../../../pageObjects/automation-test-store/forgot-login.page";
import testData from "../../../data/testData";
import TopMenuComp from "../../../pageObjects/automation-test-store/components/top-menu.comp";
import LoginPage from "../../../pageObjects/automation-test-store/login.page";
import SharedPageComponents from "../../../pageObjects/automation-test-store/components/shared-page-components.comp";
import RegisterPage from "../../../pageObjects/automation-test-store/register.page";
import commands from "../../../../utils/commands";
import assert from "assert";

describe("FORGOT LOGIN PAGE - happy path", () => {
  beforeEach(async () => {
    await HomePage.open();
    await commands.waitThenClick(TopMenuComp.loginOrRegister);
    await commands.waitThenClick(LoginPage.forgotLoginButton);
  });

  it("checks if user is on forgot login page", async () => {
    await expect(SharedPageComponents.pageHeader(testData.headers.forgotLogin)).toHaveText(
      testData.headers.forgotLogin.toUpperCase()
    );
  });

  it("submits correct last name and email", async () => {
    await commands.waitThenSetValue(await ForgotLoginPage.forgotLoginLastName, testData.registeredUser.lastName);
    await commands.waitThenSetValue(await ForgotLoginPage.forgotLoginEmail, testData.registeredUser.email);
    await commands.waitThenClick(await SharedPageComponents.continueButton);

    const errorElement = await commands.waitThenGetText(RegisterPage.validationMessageAboveForm);

    await assert(errorElement.includes(testData.successValidationAboveForm.loginNameSent));
  });
});
