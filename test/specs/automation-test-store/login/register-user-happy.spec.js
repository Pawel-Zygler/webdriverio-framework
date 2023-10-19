import HomePage from "../../../pageObjects/automation-test-store/home.page";
import TopMenuComponent from "../../../pageObjects/automation-test-store/components/top-menu.comp";
import RegisterPage from "../../../pageObjects/automation-test-store/register.page";
import testData from "../../../data/testData";
import SharedPageComponents from "../../../pageObjects/automation-test-store/components/shared-page-components.comp";
import commands from "../../../../utils/commands";

describe("REGISTER COMPONENT - happy path", async () => {
  beforeEach(async () => {
    await HomePage.open();
    await commands.waitThenClick(await TopMenuComponent.loginOrRegister);
    await commands.waitThenClick(await SharedPageComponents.continueButton);
  });

  it("checks if user is on the register form", async () => {
    const header = await commands.waitThenGetText(
      await SharedPageComponents.pageHeader(testData.headers.createAccount)
    );

    await expect(header).toContain(testData.headers.createAccount.toUpperCase());
  });

  it("fills in the form and registers new user", async () => {
    await commands.waitThenSetValue(RegisterPage.firstName, testData.user.firstName);
    await commands.waitThenSetValue(RegisterPage.lastName, testData.user.lastName);
    await commands.waitThenSetValue(RegisterPage.email, testData.user.email);
    await commands.waitThenSetValue(RegisterPage.telephone, testData.user.telephone);
    await commands.waitThenSetValue(RegisterPage.fax, testData.user.fax);
    await commands.waitThenSetValue(RegisterPage.addressOne, testData.user.addressOne);
    await commands.waitThenSetValue(RegisterPage.city, testData.user.city);
    await RegisterPage.regionState.selectByVisibleText(testData.user.regionState);
    await commands.waitThenSetValue(RegisterPage.zipCode, testData.user.zipCode);
    await RegisterPage.country.selectByVisibleText(testData.user.country);
    await commands.waitThenSetValue(RegisterPage.loginName, testData.user.loginName);
    await commands.waitThenSetValue(RegisterPage.password, testData.user.password);
    await commands.waitThenSetValue(
      RegisterPage.passwordConfirm,
      testData.user.passwordConfirm
    );

    await commands.waitThenClick(RegisterPage.privacyPolicyAgree);
    //I go to success page instead of actualyl registering a user
    //await commands.waitThenClick(await SharedPageComponents.continueButton);

    await browser.url("https://automationteststore.com/index.php?rt=account/success");

    await expect(
      await commands.waitThenGetText(
        SharedPageComponents.pageHeader(testData.headers.accountCreated)
      )
    ).toContain(testData.headers.accountCreated.toUpperCase());
  });
});
