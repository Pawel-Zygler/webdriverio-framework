class RegisterPage {
  get createAccountHeader() {
    const e = $(`//span[contains(text(), 'Create Account')]`);
    return e;
  }

  get firstName() {
    const e = $("#AccountFrm_firstname");
    return e;
  }

  get lastName() {
    const e = $("#AccountFrm_lastname");
    return e;
  }

  get email() {
    const e = $("#AccountFrm_email");
    return e;
  }

  get telephone() {
    const e = $("#AccountFrm_telephone");
    return e;
  }

  get fax() {
    const e = $("#AccountFrm_fax");
    return e;
  }

  get addressOne() {
    const e = $("#AccountFrm_address_1");
    return e;
  }

  get city() {
    const e = $("#AccountFrm_city");
    return e;
  }

  get regionState() {
    const e = $("#AccountFrm_zone_id");
    return e;
  }
  get zipCode() {
    const e = $("#AccountFrm_postcode");
    return e;
  }

  get country() {
    const e = $("#AccountFrm_country_id");
    return e;
  }

  get loginName() {
    const e = $("#AccountFrm_loginname");
    return e;
  }
  get password() {
    const e = $("#AccountFrm_password");
    return e;
  }

  get passwordConfirm() {
    const e = $("#AccountFrm_confirm");
    return e;
  }

  get newsletterNo() {
    const e = $("#AccountFrm_newsletter0");
    return e;
  }

  get privacyPolicyAgree() {
    const e = $("#AccountFrm_agree");
    return e;
  }

  errorElement(validationText) {
    const e = $(`//span[contains(text(), '${validationText}')]`);
    e.waitForClickable();
    return e;
  }

  get errorMessages() {
    let errorElements = $$(
      "//span[@class='help-block' and string-length(text())>0]"
    );
    errorElements.waitForClickable();
    let errorMessages = errorElements.map((element) => element.getText());
    return errorMessages;
  }

  validationMessageAboveForm() {
    const e = $(
      "//div[contains(@class,'alert alert-error alert-danger')] | //div[contains(@class,'alert alert-success')]"
    );
    return e;
  }

  get accountCreatedHeader() {
    const e = $("//span[contains(text(), 'Your Account Has Been Created!')]");
    return e;
  }
}
export default new RegisterPage();
