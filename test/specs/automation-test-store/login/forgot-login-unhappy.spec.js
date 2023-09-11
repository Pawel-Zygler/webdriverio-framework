import HomePage from "../../../pageObjects/automation-test-store/home.page";
import ForgotLoginPage from "../../../pageObjects/automation-test-store/forgot-login.page";
import testData from "../../../data/testData";
import TopMenuComp from "../../../pageObjects/automation-test-store/components/top-menu.comp";
import LoginPage from "../../../pageObjects/automation-test-store/login.page";
import SharedPageComponents from "../../../pageObjects/automation-test-store/components/shared-page-components.comp";
import RegisterPage from "../../../pageObjects/automation-test-store/register.page";
import commands from "../../../../utils/commands";
import assert from "assert";

describe("FORGOT LOGIN PAGE - unhappy path", () => {
  beforeEach(async () => {
    await HomePage.open();
    await commands.waitThenClick(TopMenuComp.loginOrRegister);
    await commands.waitThenClick(LoginPage.forgotLoginButton);
  });

  it("checks if user is on forgot login page", async () => {
    await expect(
      SharedPageComponents.pageHeader(testData.headers.forgotLogin)
    ).toHaveText(testData.headers.forgotLogin.toUpperCase());
  });

  const testCases = [
    {
      description: "throws error when only last name is submitted",
      lastName: "zygler",
      email: "",
      expectedErrorMessage: testData.failedValidationAboveForm.emailNotProvided,
    },
    {
      description: "throws error when only email is submitted",
      lastName: "",
      email: "pawel.zygler2@yandex.com",
      expectedErrorMessage: testData.failedValidationAboveForm.noLastNameProvided,
    },
    {
      description: "throws error when records submitted don't match",
      lastName: testData.userInvalidMax.lastName,
      email: testData.userInvalidMax.email,
      expectedErrorMessage: testData.failedValidationAboveForm.noRecordsMatched,
    },
  ];

  for (const { description, lastName, email, expectedErrorMessage } of testCases) {
    it(description, async () => {
      await commands.waitThenSetValue(ForgotLoginPage.forgotLoginLastName, lastName);
      await commands.waitThenSetValue(ForgotLoginPage.forgotLoginEmail, email);
      await commands.waitThenClick(await SharedPageComponents.continueButton);

      const errorElement = await commands.waitThenGetText(
        RegisterPage.validationErrorMessageAboveForm
      );

      await assert(errorElement.includes(expectedErrorMessage));
    });
  }
});
