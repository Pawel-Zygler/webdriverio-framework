class ForgotPasswordPage {
  get forgotPasswordLoginName() {
    return $("#forgottenFrm_loginname");
  }

  get forgotPasswordEmail() {
    return $("#forgottenFrm_email");
  }
}

export default new ForgotPasswordPage();
