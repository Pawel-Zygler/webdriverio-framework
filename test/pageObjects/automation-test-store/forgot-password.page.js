class ForgotPasswordPage {
  get forgotPasswordHeader() {
    const e = $(`//span[contains(text(),'Forgot Your Password?')]`);
    e.waitForDisplayed();
    e.getText();
    return e;
  }

  get forgotPasswordLoginName() {
    const e = $("#forgottenFrm_loginname");
    e.waitForDisplayed();
    return e;
  }

  get forgotPasswordEmail() {
    const e = $("#forgottenFrm_email");
    e.waitForDisplayed();
    return e;
  }
}

export default new ForgotPasswordPage();
