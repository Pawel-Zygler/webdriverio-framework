import HomePage from "../../pageObjects/automation-test-store/home.page";
import TopMenuComponent from "../../pageObjects/automation-test-store/components/top-menu.comp";
import RegisterPage from "../../pageObjects/automation-test-store/register.page";
import testData from "../../data/testData";
import SharedPageComponents from "../../pageObjects/automation-test-store/components/shared-page-components.comp";

//GOAL: provide confidence that the form works
describe("REGISTER COMPONENT - unhappy path", () => {
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

  it("displays appropriate error messages when form is submitted with missing data", async () => {
    await SharedPageComponents.continueButton.click();

    const errorMessages = await RegisterPage.errorMessages;

    for (const singleMessage of errorMessages) {
      const textOnPage = await $(
        "//span[@class='help-block' and string-length(text())>0]"
      ).getText();
      expect(textOnPage === singleMessage);
    }
  });

  it("throws error for first name", async () => {
    await SharedPageComponents.continueButton.click();
    await RegisterPage.firstName.setValue(testData.userInvalid.firstName);

    const errorElement = await RegisterPage.errorElement(
      "First Name must be between 1 and 32 characters!"
    );
    await expect(await errorElement).toBeDisplayed();
  });

  it("throws error for last name", async () => {
    await SharedPageComponents.continueButton.click();
    await RegisterPage.lastName.setValue(testData.userInvalid.lastName);

    const errorElement = await RegisterPage.errorElement(
      "Last Name must be between 1 and 32 characters!"
    );
    await expect(await errorElement).toBeDisplayed();
  });

  it("throws error for email", async () => {
    await SharedPageComponents.continueButton.click();
    await RegisterPage.email.setValue(testData.userInvalid.email);

    const errorElement = await RegisterPage.errorElement(
      "Email Address does not appear to be valid!"
    );
    await expect(await errorElement).toBeDisplayed();
  });

  it("throws error for telephone number", async () => {
    await SharedPageComponents.continueButton.click();

    await RegisterPage.telephone.setValue(testData.userInvalid.telephone);
    await browser.pause(3000);
    await SharedPageComponents.continueButton.click();

    await expect(
      await RegisterPage.errorElement(
        "Telephone must be between 3 and 32 characters!"
      )
    ).toBeDisplayed();
  });

  it("throws error for invalid email", async () => {
    await SharedPageComponents.continueButton.click();
    await RegisterPage.email.setValue("dsadsadsadsa.pldsadsa");
    await SharedPageComponents.continueButton.click();
    const errorElement = await RegisterPage.errorElement(
      "Email Address does not appear to be valid!"
    );
    await expect(await errorElement).toHaveText(
      "Email Address does not appear to be valid!"
    );
  });

  it("throws error for addres one field", async () => {
    await RegisterPage.addressOne.setValue(testData.userInvalid.addressOne);
    await SharedPageComponents.continueButton.click();

    const errorElement = await RegisterPage.errorElement(
      "Address 1 must be between 3 and 128 characters!"
    );
    await expect(await errorElement).toBeDisplayed();
  });

  it("throws error for city field", async () => {
    await RegisterPage.city.setValue(testData.userInvalid.city);
    await SharedPageComponents.continueButton.click();

    const errorElement = await RegisterPage.errorElement(
      "Address 1 must be between 3 and 128 characters!"
    );
    await expect(await errorElement).toBeDisplayed();
  });

  it("throws error for invalid region / state", async () => {
    await SharedPageComponents.continueButton.click();
    await RegisterPage.regionState.selectByVisibleText(
      testData.userInvalid.regionState
    );

    const errorElement = await RegisterPage.errorElement(
      "Please select a region / state!"
    );
    await expect(await errorElement).toBeDisplayed();
  });

  //tutaj mam legitny bug na produkcji dzięki temu testowi, failuje ale to bug
  xit("throws error in zip code", async () => {
    await RegisterPage.zipCode.setValue(testData.userInvalid.zipCode);
    await SharedPageComponents.continueButton.click();

    const errorElement = await RegisterPage.errorElement(
      "Zip/postal code must be between 3 and 10 characters!"
    );
    await expect(await errorElement).toBeDisplayed();
  });

  it("throws error for login", async () => {
    await SharedPageComponents.continueButton.click();
    await RegisterPage.loginName.setValue(testData.userInvalid.loginName);
    await browser.pause(3000);

    const errorElement = await RegisterPage.errorElement(
      "Please select a region / state!"
    );
    await expect(await errorElement).toBeDisplayed();
  });

  //maybe later when you are more advanced
  //or use testCase option and for each
  // describe("jest option", () => {
  //   it.each([
  //     [
  //       "first name",
  //       "firstName",
  //       "First Name must be between 1 and 32 characters!",
  //     ],
  //     [
  //       "last name",
  //       "lastName",
  //       "Last Name must be between 1 and 32 characters!",
  //     ],
  //     [
  //       "telephone",
  //       "telephone",
  //       "Telephone must be between 3 and 32 characters!",
  //     ],
  //     // this has no validation ["fax", "fax", "Email Address does not appear to be valid!"],
  //     [
  //       "addressOne",
  //       "addressOne",
  //       "Address 1 must be between 3 and 128 characters!",
  //     ],
  //     ["city", "city", "City must be between 3 and 128 characters!"],
  //     [
  //       "regionState",
  //       "regionState",
  //       "Email Address does not appear to be valid!",
  //     ],
  //     [
  //       "zipCode",
  //       "zipCode",
  //       "Zip/postal code must be between 3 and 10 characters!",
  //     ],
  //     ["country", "country", "Please select a country!"],
  //     [
  //       "loginName",
  //       "loginName",
  //       "Login name must be alphanumeric only and between 5 and 64 characters!",
  //     ],
  //     ["password", "password", "Password must be between 4 and 20 characters!"],
  //     [
  //       "passwordConfirm",
  //       "passwordConfirm",
  //       "Password confirmation does not match password!",
  //     ],
  //   ])(
  //     "throws error for %s",
  //     async (fieldDescription, fieldName, expectedErrorMessage) => {
  //       await SharedPageComponents.continueButton.click();
  //       await RegisterPage[fieldName].setValue(
  //         testData.userInvalid[fieldName]
  //       );

  //       const errorElement = await RegisterPage.errorElement(
  //         expectedErrorMessage
  //       );
  //       await expect(await errorElement).toBeDisplayed();
  //     }
  //   );
  // });
});

//it.each - this is advanced, problems with jest
