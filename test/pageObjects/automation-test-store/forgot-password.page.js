class ForgotPasswordPage {
  get forgotPasswordHeader() {
    return $(`//span[contains(text(),'Forgot Your Password?')]`);
  }

  get forgotPasswordLoginName() {
    return $("#forgottenFrm_loginname");
  }

  get forgotPasswordEmail() {
    return $("#forgottenFrm_email");
  }
}

export default new ForgotPasswordPage();
