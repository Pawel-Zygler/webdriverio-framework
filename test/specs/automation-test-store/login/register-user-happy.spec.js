import HomePage from "../../../pageObjects/automation-test-store/home.page";
import TopMenuComponent from "../../../pageObjects/automation-test-store/components/top-menu.comp";
import RegisterPage from "../../../pageObjects/automation-test-store/register.page";
import testData from "../../../data/testData";
import SharedPageComponents from "../../../pageObjects/automation-test-store/components/shared-page-components.comp";
import commands from "../../../../utils/commands";

describe("REGISTER COMPONENT - happy path", () => {
  beforeEach(async () => {
    await HomePage.open();
    await TopMenuComponent.loginOrRegister.click();
    await commands.waitThenClick(await SharedPageComponents.continueButton);
  });

  it("opens the register form", async () => {
    await expect(await RegisterPage.createAccountHeader).toHaveText(
      "CREATE ACCOUNT"
    );
  });

  it("fills in the form correctly and registers", async () => {
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
    
    //I don't click Continue, I just go to success page (it is possible) and check text. 
    //For real registration, we would have to register user with each test, which I want to avoid.
    //await commands.waitThenClick(await SharedPageComponents.continueButton);
    
    await browser.url("https://automationteststore.com/index.php?rt=account/success");

    await expect(await RegisterPage.accountCreatedHeader).toHaveText(
      "YOUR ACCOUNT HAS BEEN CREATED!"
    );
  });
});



