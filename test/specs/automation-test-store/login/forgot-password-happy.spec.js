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
    TopMenuComp.loginOrRegister.click();
    LoginPage.forgotPasswordButton.click();
  });

  it("checks if user is on forgot password page", async () => {
    await expect(await ForgotPasswordPage.forgotPasswordHeader).toHaveText(
      "FORGOT YOUR PASSWORD?"
    );
  });

  it("submits correct login and email", async () => {
    await ForgotPasswordPage.forgotPasswordLoginName.setValue(
      testData.registeredUser.loginName
    );
    await ForgotPasswordPage.forgotPasswordEmail.setValue(
      testData.registeredUser.email
    );
    await commands.waitThenClick(await SharedPageComponents.continueButton);

    const errorElement = await RegisterPage.validationMessageAboveForm(
      testData.successValidationAboveForm.resetLinkSent
    );
    await expect(await errorElement).toHaveTextContaining(
      testData.successValidationAboveForm.resetLinkSent
    );
  });
});
