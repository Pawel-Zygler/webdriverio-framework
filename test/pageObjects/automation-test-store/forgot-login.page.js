class ForgotLoginPage {
  get forgotLoginLastName() {
    return $("#forgottenFrm_lastname");
  }

  get forgotLoginEmail() {
    return $("#forgottenFrm_email");
  }
}

export default new ForgotLoginPage();
