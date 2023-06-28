import SharedPageComponents from "../../pageObjects/automation-test-store/components/shared-page-components.comp";
import testData from "../../data/testData";
import commands from "../../../utils/commands";

class RegisterPage {
  get firstName() {
    return $("#AccountFrm_firstname");
  }

  get lastName() {
    return $("#AccountFrm_lastname");
  }

  get email() {
    return $("#AccountFrm_email");
  }

  get telephone() {
    return $("#AccountFrm_telephone");
  }

  get fax() {
    return $("#AccountFrm_fax");
  }

  get addressOne() {
    return $("#AccountFrm_address_1");
  }

  get city() {
    return $("#AccountFrm_city");
  }

  get regionState() {
    return $("#AccountFrm_zone_id");
  }
  get zipCode() {
    return $("#AccountFrm_postcode");
  }

  get country() {
    return $("#AccountFrm_country_id");
  }

  get loginName() {
    return $("#AccountFrm_loginname");
  }
  get password() {
    return $("#AccountFrm_password");
  }

  get passwordConfirm() {
    return $("#AccountFrm_confirm");
  }

  get newsletterNo() {
    return $("#AccountFrm_newsletter0");
  }

  get privacyPolicyAgree() {
    return $("#AccountFrm_agree");
  }

  errorElement(validationText) {
    const e = $(`//span[contains(text(), '${validationText}')]`);
    e.waitForClickable();
    return e;
  }

  get errorMessages() {
    let errorElements = $$("//span[@class='help-block' and string-length(text())>0]");
    errorElements.waitForClickable();
    let errorMessages = errorElements.map((element) => element.getText());
    return errorMessages;
  }

  get validationSuccessMessageAboveForm() {
    return $(`h1 + div.alert.alert-success`);
  }

  get validationErrorMessageAboveForm() {
    return $(`.alert.alert-danger.alert-error`);
  }

  async registerNewUser() {
    await commands.waitThenSetValue(this.firstName, testData.uniqueUser.firstName);
    await commands.waitThenSetValue(this.lastName, testData.uniqueUser.lastName);
    await commands.waitThenSetValue(this.email, testData.uniqueUser.email);
    await commands.waitThenSetValue(this.telephone, testData.uniqueUser.telephone);
    await commands.waitThenSetValue(this.fax, testData.uniqueUser.fax);
    await commands.waitThenSetValue(this.addressOne, testData.uniqueUser.addressOne);
    await commands.waitThenSetValue(this.city, testData.uniqueUser.city);
    await this.regionState.selectByVisibleText(testData.uniqueUser.regionState);
    await commands.waitThenSetValue(this.zipCode, testData.uniqueUser.zipCode);
    await this.country.selectByVisibleText(testData.uniqueUser.country);
    await commands.waitThenSetValue(this.loginName, testData.uniqueUser.loginName);
    await commands.waitThenSetValue(this.password, testData.uniqueUser.password);
    await commands.waitThenSetValue(this.passwordConfirm, testData.uniqueUser.passwordConfirm);

    await commands.waitThenClick(this.privacyPolicyAgree);
  }
}
export default new RegisterPage();
