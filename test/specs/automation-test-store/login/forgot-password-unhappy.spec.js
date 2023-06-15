import HomePage from "../../../pageObjects/automation-test-store/home.page";
import ForgotPasswordPage from "../../../pageObjects/automation-test-store/forgot-password.page";
import testData from "../../../data/testData";
import TopMenuComp from "../../../pageObjects/automation-test-store/components/top-menu.comp";
import LoginPage from "../../../pageObjects/automation-test-store/login.page";
import SharedPageComponents from "../../../pageObjects/automation-test-store/components/shared-page-components.comp";
import RegisterPage from "../../../pageObjects/automation-test-store/register.page";
import commands from "../../../../utils/commands";

describe("FORGOT PASSWORD PAGE - unhappy path", () => {
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
      await ForgotPasswordPage.forgotPasswordLoginName.setValue(loginName);
      await ForgotPasswordPage.forgotPasswordEmail.setValue(email);
      await commands.waitThenClick(await SharedPageComponents.continueButton);

      const errorElement = await RegisterPage.validationMessageAboveForm(
        expectedErrorMessage
      );
      await expect(await errorElement).toHaveTextContaining(
        expectedErrorMessage
      );
    });
  }

  //to poniej zamienione na to wyzej wciaz musze sie nauczyc dobrze robic foor loop
  //chciałbym widzieć powtarzające się linie kodu i uzyc funkcji pomocniczychc ktore wykonaja te kroki
  //jesli mam wiele testow ktore roznia sie tylko danymi testowuymi, to moge uzyc petli do generowania tych testow

  // it("throws error when only login is submitted ", async () => {
  //   await ForgotPasswordPage.forgotPasswordLoginName.setValue(
  //     testData.registeredUser.loginName
  //   );

  //   await commands.waitThenClick(await SharedPageComponents.continueButton);

  //   const errorElement = await RegisterPage.validationMessageAboveForm(
  //     testData.failedValidationAboveForm.emailNotProvided
  //   );
  //   await expect(await errorElement).toHaveTextContaining(
  //     testData.failedValidationAboveForm.emailNotProvided
  //   );
  // });

  // it("throws error when only email is submitted ", async () => {
  //   await ForgotPasswordPage.forgotPasswordEmail.setValue(
  //     testData.registeredUser.email
  //   );

  //   await commands.waitThenClick(await SharedPageComponents.continueButton);

  //   const errorElement = await RegisterPage.validationMessageAboveForm(
  //     testData.failedValidationAboveForm.noLoginProvided
  //   );
  //   await expect(await errorElement).toHaveTextContaining(
  //     testData.failedValidationAboveForm.noLoginProvided
  //   );
  // });

  // it("throws error when records submitted don't match ", async () => {
  //   await ForgotPasswordPage.forgotPasswordLoginName.setValue(
  //     testData.registeredUser.loginName
  //   );
  //   //password here is intentionally provided for email field, to not match
  //   await ForgotPasswordPage.forgotPasswordEmail.setValue(
  //     testData.registeredUser.password
  //   );

  //   await commands.waitThenClick(await SharedPageComponents.continueButton);

  //   const errorElement = await RegisterPage.validationMessageAboveForm(
  //     testData.failedValidationAboveForm.noRecordsMatched
  //   );
  //   await expect(await errorElement).toHaveTextContaining(
  //     testData.failedValidationAboveForm.noRecordsMatched
  //   );
  // });
});
