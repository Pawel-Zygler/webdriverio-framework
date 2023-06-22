class ForgotLoginPage {
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
