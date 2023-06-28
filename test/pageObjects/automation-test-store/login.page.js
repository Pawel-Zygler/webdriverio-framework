import TopMenuComponent from "../../../test/pageObjects/automation-test-store/components/top-menu.comp";
import commands from "../../../utils/commands";
import testData from "../../data/testData";

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

  get guestCheckoutBtn() {
    return $(`#accountFrm_accountguest`);
  }

  get registerAccountBtn() {
    return $("#accountFrm_accountregister");
  }

  async loginRegisteredUser() {
    await commands.waitThenClick(TopMenuComponent.loginOrRegister);
    await commands.waitThenSetValue(this.loginName, testData.registeredUser.loginName);
    await commands.waitThenSetValue(this.password, testData.registeredUser.password);
    await commands.waitThenClick(this.loginButton);
  }
}

export default new LoginPage();
