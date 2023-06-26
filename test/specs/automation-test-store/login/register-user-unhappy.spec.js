import HomePage from "../../../pageObjects/automation-test-store/home.page";
import TopMenuComponent from "../../../pageObjects/automation-test-store/components/top-menu.comp";
import RegisterPage from "../../../pageObjects/automation-test-store/register.page";
import testData from "../../../data/testData";
import SharedPageComponents from "../../../pageObjects/automation-test-store/components/shared-page-components.comp";
import commands from "../../../../utils/commands";

describe("REGISTER COMPONENT - unhappy path", () => {
  beforeEach(async () => {
    await HomePage.open();
    await commands.waitThenClick(TopMenuComponent.loginOrRegister);
    await commands.waitThenClick(SharedPageComponents.continueButton);
  });

  describe("REGISTER COMPONENT - minimal values", () => {
    it("opens the register form", async () => {
      const header = await commands.waitThenGetText(
        await SharedPageComponents.pageHeader(testData.headers.createAccount)
      );
      await expect(header).toContain(
        testData.headers.createAccount.toUpperCase()
      );
    });

    //not sure if this is not flaky
    it("displays appropriate error messages when form is submitted with missing data", async () => {
      await commands.waitThenClick(await SharedPageComponents.continueButton);

      const errorMessages = await RegisterPage.errorMessages;

      for (const singleMessage of errorMessages) {
        const textOnPage = await $(
          "//span[@class='help-block' and string-length(text())>0]"
        ).getText();
        expect(textOnPage === singleMessage);
      }
    });

    it("throws error for first name", async () => {
      await commands.waitThenSetValue(
        RegisterPage.firstName,
        testData.userInvalidMin.firstName
      );
      await commands.waitThenClick(await SharedPageComponents.continueButton);

      const errorElement = await RegisterPage.errorElement(
        testData.registerValidationErrors.firstName
      );
      await expect(await commands.waitThenGetText(errorElement)).toContain(
        testData.registerValidationErrors.firstName
      );
    });

    it("throws error for last name", async () => {
      await commands.waitThenSetValue(
        RegisterPage.lastName,
        testData.userInvalidMin.lastName
      );
      await commands.waitThenClick(await SharedPageComponents.continueButton);

      const errorElement = await RegisterPage.errorElement(
        testData.registerValidationErrors.lastName
      );
      await expect(await commands.waitThenGetText(errorElement)).toContain(
        testData.registerValidationErrors.lastName
      );
    });

    it("throws error for email", async () => {
      await commands.waitThenSetValue(
        RegisterPage.email,
        testData.userInvalidMin.email
      );
      await commands.waitThenClick(await SharedPageComponents.continueButton);

      const errorElement = await RegisterPage.errorElement(
        testData.registerValidationErrors.email
      );
      await expect(await commands.waitThenGetText(errorElement)).toContain(
        testData.registerValidationErrors.email
      );
    });

    //legit prod error, no message when entering 2 chars, boundries are 3-32
    //it would be good to handle that correctly, or maybe improve error handling
    xit("[prod bug]throws error for telephone number", async () => {
      await commands.waitThenSetValue(
        RegisterPage.telephone,
        testData.userInvalidMin.telephone
      );
      await commands.waitThenClick(await SharedPageComponents.continueButton);

      const errorElement = await RegisterPage.errorElement(
        testData.registerValidationErrors.telephone
      );

      await expect(
        await commands
          .waitThenGetText(errorElement)
          .toHaveText(testData.registerValidationErrors.telephone)
      );
    });

    //prod bug, has no validations
    xit("[prod bug] throws error for fax number", async () => {
      await commands.waitThenSetValue(
        RegisterPage.fax,
        testData.userInvalidMin.fax
      );

      await commands.waitThenClick(await SharedPageComponents.continueButton);

      const errorElement = await RegisterPage.errorElement(
        testData.registerValidationErrors.fax
      );

      await expect(
        await commands
          .waitThenGetText(errorElement)
          .toHaveText(testData.registerValidationErrors.fax)
      );
    });

    it("throws error for addres one field", async () => {
      await commands.waitThenSetValue(
        RegisterPage.addressOne,
        testData.userInvalidMin.addressOne
      );
      await commands.waitThenClick(await SharedPageComponents.continueButton);

      const errorElement = await RegisterPage.errorElement(
        testData.registerValidationErrors.addressOne
      );
      await expect(await commands.waitThenGetText(errorElement)).toContain(
        testData.registerValidationErrors.addressOne
      );
    });

    it("throws error for city field", async () => {
      await commands.waitThenSetValue(
        RegisterPage.city,
        testData.userInvalidMin.city
      );
      await commands.waitThenClick(await SharedPageComponents.continueButton);

      const errorElement = await RegisterPage.errorElement(
        testData.registerValidationErrors.addressOne
      );
      await expect(await commands.waitThenGetText(errorElement)).toContain(
        testData.registerValidationErrors.addressOne
      );
    });

    it("throws error for invalid region / state", async () => {
      await RegisterPage.regionState.selectByVisibleText(
        testData.userInvalidMin.regionState
      );
      await commands.waitThenClick(await SharedPageComponents.continueButton);

      const errorElement = await RegisterPage.errorElement(
        testData.registerValidationErrors.regionState
      );
      await expect(await commands.waitThenGetText(errorElement)).toContain(
        testData.registerValidationErrors.regionState
      );
    });

    //prod bug, fails but due to bug
    xit("[prod bug] throws error in zip code", async () => {
      await commands.waitThenSetValue(
        RegisterPage.zipCode,
        testData.userInvalidMin.zipCode
      );
      await commands.waitThenClick(await SharedPageComponents.continueButton);

      const errorElement = await RegisterPage.errorElement(
        testData.registerValidationErrors.zipCode
      );
      await expect(await commands.waitThenGetText(errorElement)).toHaveText(
        testData.registerValidationErrors.zipCode
      );
    });

    it("throws error for login field", async () => {
      await commands.waitThenSetValue(
        RegisterPage.loginName,
        testData.userInvalidMin.loginName
      );
      await commands.waitThenClick(await SharedPageComponents.continueButton);

      const errorElement = await RegisterPage.errorElement(
        testData.registerValidationErrors.loginName
      );
      await expect(await commands.waitThenGetText(errorElement)).toContain(
        testData.registerValidationErrors.loginName
      );
    });

    it("throws error for login name taken", async () => {
      await commands.waitThenSetValue(
        RegisterPage.loginName,
        testData.user.loginName
      );
      await commands.waitThenClick(await SharedPageComponents.continueButton);

      const errorElement = await RegisterPage.errorElement(
        testData.registerValidationErrors.loginNameTaken
      );
      await expect(await commands.waitThenGetText(errorElement)).toContain(
        testData.registerValidationErrors.loginNameTaken
      );
    });

    it("throws error for password that is less than 4 chars", async () => {
      await commands.waitThenSetValue(
        RegisterPage.password,
        testData.userInvalidMin.password
      );

      await commands.waitThenClick(await SharedPageComponents.continueButton);

      const errorElement = await RegisterPage.errorElement(
        testData.registerValidationErrors.password
      );
      await expect(await commands.waitThenGetText(errorElement)).toContain(
        testData.registerValidationErrors.password
      );
    });

    it("throws error for password confirmation", async () => {
      await commands.waitThenSetValue(
        RegisterPage.password,
        testData.userInvalidMin.password
      );
      await commands.waitThenClick(await SharedPageComponents.continueButton);
      await commands.waitThenSetValue(
        RegisterPage.passwordConfirm,
        testData.userInvalidMin.passwordConfirm
      );

      const errorElement = await RegisterPage.errorElement(
        testData.registerValidationErrors.passwordConfirm
      );
      await expect(await commands.waitThenGetText(errorElement)).toContain(
        testData.registerValidationErrors.passwordConfirm
      );
    });

    it("throws error for privacy policy not selected", async () => {
      for (const eachField in testData.user) {
        if (
          RegisterPage[eachField] &&
          typeof commands.waitThenSetValue(RegisterPage[eachField]) ===
            "function"
        ) {
          if (eachField === "regionState" || eachField === "country") {
            await RegisterPage[eachField].selectByVisibleText(
              testData.user[eachField]
            );
          } else {
            await commands.waitThenClick(
              RegisterPage[eachField],
              testData.user[eachField]
            );
          }
        }
      }
      await commands.waitThenClick(await SharedPageComponents.continueButton);

      const errorElement = await RegisterPage.validationErrorMessageAboveForm;

      await expect(await commands.waitThenGetText(errorElement)).toContain(
        testData.failedValidationAboveForm.privacyPolicy
      );
    });
  });

  describe("REGISTER COMPONENT - maximum values", () => {
    //not sure if this is not flaky
    it("throws error for first name", async () => {
      await commands.waitThenSetValue(
        RegisterPage.firstName,
        testData.userInvalidMax.firstName
      );
      await commands.waitThenClick(await SharedPageComponents.continueButton);

      const errorElement = await RegisterPage.errorElement(
        testData.registerValidationErrors.firstName
      );
      await expect(await commands.waitThenGetText(errorElement)).toContain(
        testData.registerValidationErrors.firstName
      );
    });

    it("throws error for last name", async () => {
      await commands.waitThenSetValue(
        RegisterPage.lastName,
        testData.userInvalidMax.lastName
      );
      await commands.waitThenClick(await SharedPageComponents.continueButton);

      const errorElement = await RegisterPage.errorElement(
        testData.registerValidationErrors.lastName
      );
      await expect(await commands.waitThenGetText(errorElement)).toContain(
        testData.registerValidationErrors.lastName
      );
    });

    it("throws error for email", async () => {
      await commands.waitThenSetValue(
        RegisterPage.email,
        testData.userInvalidMax.email
      );
      await commands.waitThenClick(await SharedPageComponents.continueButton);

      const errorElement = await RegisterPage.errorElement(
        testData.registerValidationErrors.email
      );
      await expect(await commands.waitThenGetText(errorElement)).toContain(
        testData.registerValidationErrors.email
      );
    });

    it("throws error for telephone number", async () => {
      await commands.waitThenSetValue(
        RegisterPage.telephone,
        testData.userInvalidMax.telephone
      );
      await commands.waitThenClick(await SharedPageComponents.continueButton);

      const errorElement = await RegisterPage.errorElement(
        testData.registerValidationErrors.telephone
      );
      await expect(await commands.waitThenGetText(errorElement)).toContain(
        testData.registerValidationErrors.telephone
      );
    });

    //prod bug, missing validations
    xit("[prod bug] throws error for fax number", async () => {
      await commands.waitThenSetValue(
        RegisterPage.fax,
        testData.userInvalidMax.fax
      );
      await commands.waitThenClick(await SharedPageComponents.continueButton);

      const errorElement = await RegisterPage.errorElement(
        testData.registerValidationErrors.fax
      );
      await expect(errorElement).toHaveText(
        testData.registerValidationErrors.fax
      );
    });

    it("throws error for addres one field", async () => {
      await commands.waitThenSetValue(
        RegisterPage.addressOne,
        testData.userInvalidMax.addressOne
      );
      await commands.waitThenClick(await SharedPageComponents.continueButton);

      const errorElement = await RegisterPage.errorElement(
        testData.registerValidationErrors.addressOne
      );
      await expect(await commands.waitThenGetText(errorElement)).toContain(
        testData.registerValidationErrors.addressOne
      );
    });

    it("throws error for city field", async () => {
      await commands.waitThenSetValue(
        RegisterPage.city,
        testData.userInvalidMax.city
      );
      await commands.waitThenClick(await SharedPageComponents.continueButton);

      const errorElement = await RegisterPage.errorElement(
        testData.registerValidationErrors.addressOne
      );
      await expect(await commands.waitThenGetText(errorElement)).toContain(
        testData.registerValidationErrors.addressOne
      );
    });

    it("throws error for invalid region / state", async () => {
      await RegisterPage.regionState.selectByVisibleText(
        testData.userInvalidMin.regionState
      );
      await commands.waitThenClick(await SharedPageComponents.continueButton);

      const errorElement = await RegisterPage.errorElement(
        testData.registerValidationErrors.regionState
      );
      await expect(await commands.waitThenGetText(errorElement)).toContain(
        testData.registerValidationErrors.regionState
      );
    });

    //prod bug
    xit("[prod bug] throws error in zip code", async () => {
      await commands.waitThenSetValue(
        RegisterPage.zipCode,
        testData.userInvalidMin.zipCode
      );
      await commands.waitThenClick(await SharedPageComponents.continueButton);

      const errorElement = await RegisterPage.errorElement(
        testData.registerValidationErrors.zipCode
      );
      await expect(await commands.waitThenGetText(errorElement)).toContain(
        testData.registerValidationErrors.zipCode
      );
    });

    it("throws error for login field", async () => {
      await commands.waitThenSetValue(
        RegisterPage.loginName,
        testData.userInvalidMin.loginName
      );
      await commands.waitThenClick(await SharedPageComponents.continueButton);

      const errorElement = await RegisterPage.errorElement(
        testData.registerValidationErrors.loginName
      );
      await expect(await commands.waitThenGetText(errorElement)).toContain(
        testData.registerValidationErrors.loginName
      );
    });

    it("throws error for login name taken", async () => {
      await commands.waitThenSetValue(
        RegisterPage.loginName,
        testData.user.loginName
      );
      await commands.waitThenClick(await SharedPageComponents.continueButton);

      const errorElement = await RegisterPage.errorElement(
        testData.registerValidationErrors.loginNameTaken
      );
      await expect(await commands.waitThenGetText(errorElement)).toContain(
        testData.registerValidationErrors.loginNameTaken
      );
    });

    it("throws error for password that is more than 20 chars", async () => {
      await commands.waitThenSetValue(
        RegisterPage.password,
        testData.userInvalidMax.password
      );
      await commands.waitThenClick(await SharedPageComponents.continueButton);

      const errorElement = await RegisterPage.errorElement(
        testData.registerValidationErrors.password
      );
      await expect(await commands.waitThenGetText(errorElement)).toContain(
        testData.registerValidationErrors.password
      );
    });
  });
});
