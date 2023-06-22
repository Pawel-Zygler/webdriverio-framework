class LoginPage {
  get accountLoginHeader() {
    const e = $(`//span[contains(text(), 'Account Login')]`);
    e.waitForClickable();
    return e;
  }

  get loginName() {
    return $("#loginFrm_loginname");
  }

  get password() {
    return $("#loginFrm_password");
  }

  get loginButton() {
    return $(`//button[@title='Login']`);
  }

  get forgotPasswordButton() {
    return $(`//a[contains(text(),'Forgot your password?')]`);
  }

  get forgotLoginButton() {
    return $(`//a[contains(text(),'Forgot your login?')]`);
  }
}

export default new LoginPage();
