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

  get validationMessageAboveForm() {
    return $(".alert");
  }
}
export default new RegisterPage();
