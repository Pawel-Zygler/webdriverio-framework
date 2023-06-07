class RegisterPage {
  get createAccountHeader() {
    const e = $(`//span[contains(text(), 'Create Account')]`);
    e.waitForClickable();
    return e;
  }

  get firstName() {
    const e = $("#AccountFrm_firstname");
    e.waitForClickable();
    return e;
  }

  get lastName() {
    const e = $("#AccountFrm_lastname");
    e.waitForClickable();
    return e;
  }

  get email() {
    const e = $("#AccountFrm_email");
    e.waitForClickable();
    return e;
  }

  get telephone() {
    const e = $("#AccountFrm_telephone");
    e.waitForClickable();
    return e;
  }

  get fax() {
    const e = $("#AccountFrm_fax");
    e.waitForClickable();
    return e;
  }

  get addressOne() {
    const e = $("#AccountFrm_address_1");
    e.waitForClickable();
    return e;
  }

  get city() {
    const e = $("#AccountFrm_city");
    e.waitForClickable();
    return e;
  }

  get regionState() {
    const e = $("#AccountFrm_zone_id");
    e.waitForClickable();
    return e;
  }
  get zipCode() {
    const e = $("#AccountFrm_postcode");
    e.waitForClickable();
    return e;
  }

  get country() {
    const e = $("#AccountFrm_country_id");
    e.waitForClickable();
    return e;
  }

  get loginName() {
    const e = $("#AccountFrm_loginname");
    e.waitForClickable();
    return e;
  }
  get password() {
    const e = $("#AccountFrm_password");
    e.waitForClickable();
    return e;
  }

  get passwordConfirm() {
    const e = $("#AccountFrm_confirm");
    e.waitForClickable();
    return e;
  }

  get newsletterNo() {
    const e = $("#AccountFrm_newsletter0");
    e.waitForClickable();
    return e;
  }

  get privacyPolicyAgree() {
    const e = $("#AccountFrm_agree");
    e.waitForClickable();
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
    e.waitForClickable();
    e.getText();
    return e;
  }

  get accountCreatedHeader() {
    const e = $("//span[contains(text(), 'Your Account Has Been Created!')]");
    e.waitForClickable();
    return e;
  }
}
export default new RegisterPage();
