class LoginPage {
  get accountLoginHeader() {
    const e = $(`//span[contains(text(), 'Account Login')]`);
    e.waitForClickable();
    return e;
  }

  get loginName() {
    const e = $("#loginFrm_loginname");
    e.waitForClickable();
    return e;
  }

  get password() {
    const e = $("#loginFrm_password");
    e.waitForClickable();
    return e;
  }

  get loginButton() {
    const e = $(`//button[@title='Login']`);
    e.waitForClickable();
    return e;
  }

  get forgotPasswordButton() {
    const e = $(`//a[contains(text(),'Forgot your password?')]`);
    e.waitForClickable();
    return e;
  }

  get forgotLoginButton() {
    const e = $(`//a[contains(text(),'Forgot your login?')]`);
    return e;
  }
}

export default new LoginPage();
