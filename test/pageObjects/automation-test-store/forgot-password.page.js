class ForgotPasswordPage {
  get forgotPasswordHeader() {
    const e = $(`//span[contains(text(),'Forgot Your Password?')]`);
    return e;
  }

  get forgotPasswordLoginName() {
    const e = $("#forgottenFrm_loginname");
    return e;
  }

  get forgotPasswordEmail() {
    const e = $("#forgottenFrm_email");
    return e;
  }
}

export default new ForgotPasswordPage();
