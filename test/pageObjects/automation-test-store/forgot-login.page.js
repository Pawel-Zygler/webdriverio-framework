class ForgotLoginPage {
  get forgotLoginHeader() {
    const e = $(`//span[contains(text(),'Forgot Your Login Name?')]`);
    e.waitForDisplayed();
    e.getText();
    return e;
  }

  get forgotLoginLastName() {
    const e = $("#forgottenFrm_lastname");
    e.waitForDisplayed();
    return e;
  }

  get forgotLoginEmail() {
    const e = $("#forgottenFrm_email");
    e.waitForDisplayed();
    return e;
  }
}

export default new ForgotLoginPage();
