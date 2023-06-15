class ForgotLoginPage {
  get forgotLoginHeader() {
    const e = $(`//span[contains(text(),'Forgot Your Login Name?')]`);
    return e;
  }

  get forgotLoginLastName() {
    const e = $("#forgottenFrm_lastname");
    return e;
  }

  get forgotLoginEmail() {
    const e = $("#forgottenFrm_email");
    return e;
  }
}

export default new ForgotLoginPage();
