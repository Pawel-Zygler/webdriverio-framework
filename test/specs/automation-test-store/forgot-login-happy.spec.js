import HomePage from "../../pageObjects/automation-test-store/home.page";
import ForgotLoginPage from "../../pageObjects/automation-test-store/forgot-login.page";
import testData from "../../data/testData";
import TopMenuComp from "../../pageObjects/automation-test-store/components/top-menu.comp";
import LoginPage from "../../pageObjects/automation-test-store/login.page";
import SharedPageComponents from "../../pageObjects/automation-test-store/components/shared-page-components.comp";
import RegisterPage from "../../pageObjects/automation-test-store/register.page";

describe("FORGOT LOGIN PAGE - happy path", () => {
  beforeEach(() => {
    HomePage.open();
    TopMenuComp.loginOrRegister.click();
    LoginPage.forgotLoginButton.click();
  });

  it("checks if user is on forgot login page", async () => {
    await expect(await ForgotLoginPage.forgotLoginHeader).toHaveText(
      "FORGOT YOUR LOGIN NAME?"
    );
  });

  it("submits correct last name and email", async () => {
    await ForgotLoginPage.forgotLoginLastName.setValue(
      testData.registeredUser.lastName
    );
    await ForgotLoginPage.forgotLoginEmail.setValue(
      testData.registeredUser.email
    );
    await SharedPageComponents.continueButton.click();

    const errorElement = await RegisterPage.validationMessageAboveForm(
      testData.successValidationAboveForm.loginNameSent
    );
    await expect(await errorElement).toHaveTextContaining(
      testData.successValidationAboveForm.loginNameSent
    );
  });
});
