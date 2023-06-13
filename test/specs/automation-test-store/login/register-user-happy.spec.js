import HomePage from "../../../pageObjects/automation-test-store/home.page";
import TopMenuComponent from "../../../pageObjects/automation-test-store/components/top-menu.comp";
import RegisterPage from "../../../pageObjects/automation-test-store/register.page";
import testData from "../../../data/testData";
import SharedPageComponents from "../../../pageObjects/automation-test-store/components/shared-page-components.comp";

describe("REGISTER COMPONENT - happy path", () => {
  beforeEach(async () => {
    await HomePage.open();
    await TopMenuComponent.loginOrRegister.click();
    await SharedPageComponents.continueButton.click();
  });

  it("opens the register form", async () => {
    await expect(await RegisterPage.createAccountHeader).toHaveText(
      "CREATE ACCOUNT"
    );
  });

  it("fills in the form correctly", async () => {
    for (const eachField in testData.user) {
      if (
        RegisterPage[eachField] &&
        typeof RegisterPage[eachField].setValue === "function"
      ) {
        if (eachField === "regionState" || eachField === "country") {
          await RegisterPage[eachField].selectByVisibleText(
            testData.user[eachField]
          );
        } else {
          await RegisterPage[eachField].setValue(testData.user[eachField]);
        }
      }
    }

    await RegisterPage.privacyPolicyAgree.click();
    await SharedPageComponents.continueButton.click();

    await expect(await RegisterPage.accountCreatedHeader).toHaveText(
      "OUR ACCOUNT HAS BEEN CREATED! EXPECTED ERROR: change email to unique to register"
    );
    //change email in testData to unique to register user
    //or maybe fix this so it sohow handles this more gracefully, however, I don't think I can delete the user there
  });
});
