import HomePage from "../../../pageObjects/automation-test-store/home.page";
import TopMenuComponent from "../../../pageObjects/automation-test-store/components/top-menu.comp";
import RegisterPage from "../../../pageObjects/automation-test-store/register.page";
import testData from "../../../data/testData";
import SharedPageComponents from "../../../pageObjects/automation-test-store/components/shared-page-components.comp";

describe("REGISTER COMPONENT - unhappy path", () => {
  beforeEach(async () => {
    await HomePage.open();
    await TopMenuComponent.loginOrRegister.click();
    await SharedPageComponents.continueButton.click();
  });

  describe("REGISTER COMPONENT - minimal values", () => {
    it("opens the register form", async () => {
      await expect(await RegisterPage.createAccountHeader).toHaveText(
        "CREATE ACCOUNT"
      );
    });

    //not sure if this is not flaky
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
      await RegisterPage.firstName.setValue(testData.userInvalidMin.firstName);
      await SharedPageComponents.continueButton.click();

      const errorElement = await RegisterPage.errorElement(
        testData.registerValidationErrors.firstName
      );
      await expect(await errorElement).toHaveText(
        testData.registerValidationErrors.firstName
      );
    });

    it("throws error for last name", async () => {
      await RegisterPage.lastName.setValue(testData.userInvalidMin.lastName);
      await SharedPageComponents.continueButton.click();

      const errorElement = await RegisterPage.errorElement(
        testData.registerValidationErrors.lastName
      );
      await expect(await errorElement).toHaveText(
        testData.registerValidationErrors.lastName
      );
    });

    it("throws error for email", async () => {
      await RegisterPage.email.setValue(testData.userInvalidMin.email);
      await SharedPageComponents.continueButton.click();

      const errorElement = await RegisterPage.errorElement(
        testData.registerValidationErrors.email
      );
      await expect(await errorElement).toHaveText(
        testData.registerValidationErrors.email
      );
    });

    //legit prod error, no message when entering 2 chars, boundries are 3-32
    //it would be good to handle that correctly, or maybe improve error handling
    xit("throws error for telephone number", async () => {
      await RegisterPage.telephone.setValue(testData.userInvalidMin.telephone);
      await SharedPageComponents.continueButton.click();

      await expect(
        await RegisterPage.errorElement(
          testData.registerValidationErrors.telephone
        )
      ).toHaveText(testData.registerValidationErrors.telephone);
    });

    //prod bug, has no validations
    xit("throws error for fax number", async () => {
      await RegisterPage.fax.setValue(testData.userInvalidMin.fax);

      await SharedPageComponents.continueButton.click();

      await expect(
        await RegisterPage.errorElement(testData.registerValidationErrors.fax)
      ).toHaveText(testData.registerValidationErrors.fax);
    });

    it("throws error for addres one field", async () => {
      await RegisterPage.addressOne.setValue(
        testData.userInvalidMin.addressOne
      );
      await SharedPageComponents.continueButton.click();

      const errorElement = await RegisterPage.errorElement(
        testData.registerValidationErrors.addressOne
      );
      await expect(await errorElement).toHaveText(
        testData.registerValidationErrors.addressOne
      );
    });

    it("throws error for city field", async () => {
      await RegisterPage.city.setValue(testData.userInvalidMin.city);
      await SharedPageComponents.continueButton.click();

      const errorElement = await RegisterPage.errorElement(
        testData.registerValidationErrors.addressOne
      );
      await expect(await errorElement).toHaveText(
        testData.registerValidationErrors.addressOne
      );
    });

    it("throws error for invalid region / state", async () => {
      await RegisterPage.regionState.selectByVisibleText(
        testData.userInvalidMin.regionState
      );
      await SharedPageComponents.continueButton.click();

      const errorElement = await RegisterPage.errorElement(
        testData.registerValidationErrors.regionState
      );
      await expect(await errorElement).toHaveText(
        testData.registerValidationErrors.regionState
      );
    });

    //prod bug, fails but due to bug
    xit("throws error in zip code", async () => {
      await RegisterPage.zipCode.setValue(testData.userInvalidMin.zipCode);
      await SharedPageComponents.continueButton.click();

      const errorElement = await RegisterPage.errorElement(
        testData.registerValidationErrors.zipCode
      );
      await expect(await errorElement).toHaveText(
        testData.registerValidationErrors.zipCode
      );
    });

    it("throws error for login field", async () => {
      await RegisterPage.loginName.setValue(testData.userInvalidMin.loginName);
      await SharedPageComponents.continueButton.click();

      const errorElement = await RegisterPage.errorElement(
        testData.registerValidationErrors.loginName
      );
      await expect(await errorElement).toHaveText(
        testData.registerValidationErrors.loginName
      );
    });

    it("throws error for login name taken", async () => {
      await RegisterPage.loginName.setValue(testData.user.loginName);
      await SharedPageComponents.continueButton.click();

      const errorElement = await RegisterPage.errorElement(
        testData.registerValidationErrors.loginNameTaken
      );
      await expect(await errorElement).toHaveText(
        testData.registerValidationErrors.loginNameTaken
      );
    });

    it("throws error for password that is less than 4 chars", async () => {
      await RegisterPage.password.setValue(testData.userInvalidMin.password);

      await SharedPageComponents.continueButton.click();

      const errorElement = await RegisterPage.errorElement(
        testData.registerValidationErrors.password
      );
      await expect(await errorElement).toHaveText(
        testData.registerValidationErrors.password
      );
    });

    it("throws error for password confirmation", async () => {
      await RegisterPage.password.setValue(testData.userInvalidMin.password);
      await SharedPageComponents.continueButton.click();
      await RegisterPage.passwordConfirm.setValue(
        testData.userInvalidMin.passwordConfirm
      );

      const errorElement = await RegisterPage.errorElement(
        testData.registerValidationErrors.passwordConfirm
      );
      await expect(await errorElement).toHaveText(
        testData.registerValidationErrors.passwordConfirm
      );
    });

    it("throws error for privacy policy not selected", async () => {
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
      await SharedPageComponents.continueButton.click();

      const errorElement = await RegisterPage.validationMessageAboveForm(
        testData.failedValidationAboveForm.privacyPolicy
      );

      await expect(await errorElement).toHaveTextContaining(
        testData.failedValidationAboveForm.privacyPolicy
      );
    });
  });

  describe("REGISTER COMPONENT - maximum values", () => {
    //not sure if this is not flaky
    it("throws error for first name", async () => {
      await RegisterPage.firstName.setValue(testData.userInvalidMax.firstName);
      await SharedPageComponents.continueButton.click();

      const errorElement = await RegisterPage.errorElement(
        testData.registerValidationErrors.firstName
      );
      await expect(await errorElement).toHaveText(
        testData.registerValidationErrors.firstName
      );
    });

    it("throws error for last name", async () => {
      await RegisterPage.lastName.setValue(testData.userInvalidMax.lastName);
      await SharedPageComponents.continueButton.click();

      const errorElement = await RegisterPage.errorElement(
        testData.registerValidationErrors.lastName
      );
      await expect(await errorElement).toHaveText(
        testData.registerValidationErrors.lastName
      );
    });

    it("throws error for email", async () => {
      await RegisterPage.email.setValue(testData.userInvalidMax.email);
      await SharedPageComponents.continueButton.click();

      const errorElement = await RegisterPage.errorElement(
        testData.registerValidationErrors.email
      );
      await expect(await errorElement).toHaveText(
        testData.registerValidationErrors.email
      );
    });

    it("throws error for telephone number", async () => {
      await RegisterPage.telephone.setValue(testData.userInvalidMax.telephone);
      await SharedPageComponents.continueButton.click();

      await expect(
        await RegisterPage.errorElement(
          testData.registerValidationErrors.telephone
        )
      ).toHaveText(testData.registerValidationErrors.telephone);
    });

    //prod bug, missing validations
    xit("throws error for fax number", async () => {
      await RegisterPage.fax.setValue(testData.userInvalidMax.fax);

      await SharedPageComponents.continueButton.click();

      await expect(
        await RegisterPage.errorElement(testData.registerValidationErrors.fax)
      ).toHaveText(testData.registerValidationErrors.fax);
    });

    it("throws error for addres one field", async () => {
      await RegisterPage.addressOne.setValue(
        testData.userInvalidMax.addressOne
      );
      await SharedPageComponents.continueButton.click();

      const errorElement = await RegisterPage.errorElement(
        testData.registerValidationErrors.addressOne
      );
      await expect(await errorElement).toHaveText(
        testData.registerValidationErrors.addressOne
      );
    });

    it("throws error for city field", async () => {
      await RegisterPage.city.setValue(testData.userInvalidMax.city);
      await SharedPageComponents.continueButton.click();

      const errorElement = await RegisterPage.errorElement(
        testData.registerValidationErrors.addressOne
      );
      await expect(await errorElement).toHaveText(
        testData.registerValidationErrors.addressOne
      );
    });

    it("throws error for invalid region / state", async () => {
      await RegisterPage.regionState.selectByVisibleText(
        testData.userInvalidMin.regionState
      );
      await SharedPageComponents.continueButton.click();

      const errorElement = await RegisterPage.errorElement(
        testData.registerValidationErrors.regionState
      );
      await expect(await errorElement).toHaveText(
        testData.registerValidationErrors.regionState
      );
    });

    //prod bug
    xit("throws error in zip code", async () => {
      await RegisterPage.zipCode.setValue(testData.userInvalidMin.zipCode);
      await SharedPageComponents.continueButton.click();

      const errorElement = await RegisterPage.errorElement(
        testData.registerValidationErrors.zipCode
      );
      await expect(await errorElement).toHaveText(
        testData.registerValidationErrors.zipCode
      );
    });

    it("throws error for login field", async () => {
      await RegisterPage.loginName.setValue(testData.userInvalidMin.loginName);
      await SharedPageComponents.continueButton.click();

      const errorElement = await RegisterPage.errorElement(
        testData.registerValidationErrors.loginName
      );
      await expect(await errorElement).toHaveText(
        testData.registerValidationErrors.loginName
      );
    });

    it("throws error for login name taken", async () => {
      await RegisterPage.loginName.setValue(testData.user.loginName);
      await SharedPageComponents.continueButton.click();

      const errorElement = await RegisterPage.errorElement(
        testData.registerValidationErrors.loginNameTaken
      );
      await expect(await errorElement).toHaveText(
        testData.registerValidationErrors.loginNameTaken
      );
    });

    it("throws error for password that is more than 20 chars", async () => {
      await RegisterPage.password.setValue(testData.userInvalidMax.password);
      await SharedPageComponents.continueButton.click();

      const errorElement = await RegisterPage.errorElement(
        testData.registerValidationErrors.password
      );
      await expect(await errorElement).toHaveText(
        testData.registerValidationErrors.password
      );
    });
  });
});
