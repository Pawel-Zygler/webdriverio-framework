import HomePage from "../../../pageObjects/automation-test-store/home.page";
import ForgotPasswordPage from "../../../pageObjects/automation-test-store/forgot-password.page";
import testData from "../../../data/testData";
import TopMenuComp from "../../../pageObjects/automation-test-store/components/top-menu.comp";
import LoginPage from "../../../pageObjects/automation-test-store/login.page";
import SharedPageComponents from "../../../pageObjects/automation-test-store/components/shared-page-components.comp";
import RegisterPage from "../../../pageObjects/automation-test-store/register.page";
import commands from "../../../../utils/commands";

describe("FORGOT PASSWORD PAGE - happy path", () => {
  beforeEach(() => {
    HomePage.open();
    commands.waitThenClick(TopMenuComp.loginOrRegister);
    commands.waitThenClick(LoginPage.forgotPasswordButton);
  });

  it("checks if user is on forgot password page", async () => {
    await expect(commands.waitThenGetText(ForgotPasswordPage.forgotPasswordHeader)).toHaveText(
      "FORGOT YOUR PASSWORD?"
    );
  });

  it("submits correct login and email", async () => {
    await commands.waitThenSetValue(ForgotPasswordPage.forgotPasswordLoginName, testData.registeredUser.loginName);
    await commands.waitThenSetValue(ForgotPasswordPage.forgotPasswordEmail, testData.registeredUser.email);
    await commands.waitThenClick(await SharedPageComponents.continueButton);

    const errorElement = await RegisterPage.validationMessageAboveForm(
      testData.successValidationAboveForm.resetLinkSent
    );

    await expect(await commands.waitThenGetText(errorElement)).toHaveTextContaining(
      testData.successValidationAboveForm.resetLinkSent
    );
  });
});
