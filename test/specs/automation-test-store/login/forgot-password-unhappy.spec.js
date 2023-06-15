import HomePage from "../../../pageObjects/automation-test-store/home.page";
import ForgotPasswordPage from "../../../pageObjects/automation-test-store/forgot-password.page";
import testData from "../../../data/testData";
import TopMenuComp from "../../../pageObjects/automation-test-store/components/top-menu.comp";
import LoginPage from "../../../pageObjects/automation-test-store/login.page";
import SharedPageComponents from "../../../pageObjects/automation-test-store/components/shared-page-components.comp";
import RegisterPage from "../../../pageObjects/automation-test-store/register.page";
import commands from "../../../../utils/commands";

describe("FORGOT PASSWORD PAGE - unhappy path", () => {
  beforeEach(async() => {
    await HomePage.open();
    await commands.waitThenClick(TopMenuComp.loginOrRegister);
    await commands.waitThenClick(LoginPage.forgotPasswordButton);
  });

  it("checks if user is on forgot password page", async () => {
    await expect(commands.waitThenGetText(ForgotPasswordPage.forgotPasswordHeader)).toHaveText(
      "FORGOT YOUR PASSWORD?"
    );
  });

  const testCases = [
    {
      description: "throws error when only login is submitted",
      loginName: testData.registeredUser.loginName,
      email: "",
      expectedErrorMessage: testData.failedValidationAboveForm.emailNotProvided,
    },
    {
      description: "throws error when only email is submitted",
      loginName: "",
      email: testData.registeredUser.email,
      expectedErrorMessage: testData.failedValidationAboveForm.noLoginProvided,
    },
    {
      description: "throws error when records submitted don't match",
      loginName: testData.registeredUser.loginName,
      email: testData.registeredUser.password,
      expectedErrorMessage: testData.failedValidationAboveForm.noRecordsMatched,
    },
  ];

  for (const {
    description,
    loginName,
    email,
    expectedErrorMessage,
  } of testCases) {
    it(description, async () => {
      await commands.waitThenSetValue(ForgotPasswordPage.forgotPasswordLoginName, loginName);
      await commands.waitThenSetValue(ForgotPasswordPage.forgotPasswordEmail, email);
      await commands.waitThenClick(await SharedPageComponents.continueButton);

      const errorElement = await RegisterPage.validationMessageAboveForm(
        expectedErrorMessage
      );
      
      await expect(await commands.waitThenGetText(errorElement)).toHaveTextContaining(
        expectedErrorMessage
      );
    });
  }
});
