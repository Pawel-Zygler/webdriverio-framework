import HomePage from "../../../pageObjects/automation-test-store/home.page";
import testData from "../../../data/testData";
import RegisterPage from "../../../pageObjects/automation-test-store/register.page";
import TopMenuComp from "../../../pageObjects/automation-test-store/components/top-menu.comp";
import LoginPage from "../../../pageObjects/automation-test-store/login.page";
import commands from "../../../../utils/commands";

describe("LOGIN PAGE - unhappy path", () => {
  beforeEach(async () => {
    await HomePage.open();
    await commands.waitThenClick(TopMenuComp.loginOrRegister);
  });

  afterEach(async () => {
    const errorElement = await RegisterPage.validationErrorMessageAboveForm;

    await expect(await commands.waitThenGetText(errorElement)).toContain(
      testData.failedValidationAboveForm.incorrectLoginOrPassword
    );
  });

  it("it throws error when incorrect username is provided", async () => {
    await commands.waitThenSetValue(
      LoginPage.loginName,
      testData.userInvalidMax.loginName
    );

    await commands.waitThenClick(LoginPage.loginButton);
  });

  it("it throws error when incorrect password is provided", async () => {
    await commands.waitThenSetValue(
      LoginPage.password,
      testData.userInvalidMax.password
    );

    await commands.waitThenClick(LoginPage.loginButton);
  });

  it("it throws error when incorrect username and password is provided", async () => {
    await commands.waitThenSetValue(
      LoginPage.loginName,
      testData.userInvalidMax.loginName
    );

    await commands.waitThenSetValue(
      LoginPage.password,
      testData.userInvalidMax.password
    );

    await commands.waitThenClick(LoginPage.loginButton);
  });
});
