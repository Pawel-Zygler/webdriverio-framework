import HomePage from "../../pageObjects/automation-test-store/home.page";
import testData from "../../data/testData";
import TopMenuComp from "../../pageObjects/automation-test-store/components/top-menu.comp";
import LoginPage from "../../pageObjects/automation-test-store/login.page";
import RegisterPage from "../../pageObjects/automation-test-store/register.page";

describe("LOGIN PAGE - unhappy path", () => {
  beforeEach(() => {
    HomePage.open();
    TopMenuComp.loginOrRegister.click();
  });

  //jak w shared components to są funkcje pomocnicze
  //to jest wyzszy poziom abstrakcji testow, mozna krocej je pisac
  const loginTest = async (loginName, password) => {
    if (loginName) {
      await LoginPage.loginName.setValue(loginName);
    }
    if (password) {
      await LoginPage.password.setValue(password);
    }
    await LoginPage.loginButton.click();

    const errorElement = await RegisterPage.validationMessageAboveForm(
      testData.failedValidationAboveForm.incorrectLoginOrPassword
    );

    await expect(await errorElement).toHaveTextContaining(
      testData.failedValidationAboveForm.incorrectLoginOrPassword
    );
  };

  it("it throws error when incorrect username is provided", async () => {
    await loginTest(testData.userInvalidMax.loginName, null);
  });

  it("it throws error when incorrect password is provided", async () => {
    await loginTest(testData.userInvalidMax.password, null);
  });

  it("it throws error when incorrect username and password is provided", async () => {
    await loginTest(
      testData.userInvalidMax.loginName,
      testData.userInvalidMax.password
    );
  });
});
