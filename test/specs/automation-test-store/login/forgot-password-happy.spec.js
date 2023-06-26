import HomePage from "../../../pageObjects/automation-test-store/home.page";
import ForgotPasswordPage from "../../../pageObjects/automation-test-store/forgot-password.page";
import testData from "../../../data/testData";
import TopMenuComp from "../../../pageObjects/automation-test-store/components/top-menu.comp";
import LoginPage from "../../../pageObjects/automation-test-store/login.page";
import SharedPageComponents from "../../../pageObjects/automation-test-store/components/shared-page-components.comp";
import RegisterPage from "../../../pageObjects/automation-test-store/register.page";
import commands from "../../../../utils/commands";

describe("FORGOT PASSWORD PAGE - happy path", () => {
  beforeEach(async () => {
    await HomePage.open();
    await commands.waitThenClick(TopMenuComp.loginOrRegister);
    await commands.waitThenClick(LoginPage.forgotPasswordButton);
  });

  it("checks if user is on forgot password page", async () => {
    const header = await commands.waitThenGetText(SharedPageComponents.pageHeader(testData.headers.forgotYourPassword));

    await expect(header).toEqual(testData.headers.forgotYourPassword.toUpperCase());
  });

  it("submits correct login and email", async () => {
    await commands.waitThenSetValue(ForgotPasswordPage.forgotPasswordLoginName, testData.registeredUser.loginName);
    await commands.waitThenSetValue(ForgotPasswordPage.forgotPasswordEmail, testData.registeredUser.email);
    await commands.waitThenClick(await SharedPageComponents.continueButton);

    const errorElement = await commands.waitThenGetText(RegisterPage.validationMessageAboveForm);
    await console.log("hehehe" + errorElement);

    await expect(errorElement).toContain(testData.successValidationAboveForm.resetLinkSent);
  });
});
