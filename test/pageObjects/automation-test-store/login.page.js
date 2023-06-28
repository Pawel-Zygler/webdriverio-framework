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

  get firstName() {
    return $("#guestFrm_firstname");
  }

  get lastName() {
    return $("#guestFrm_lastname");
  }

  get email() {
    return $("#guestFrm_email");
  }

  get telephone() {
    return $("#guestFrm_telephone");
  }

  get fax() {
    return $("#guestFrm_fax");
  }

  get addressOne() {
    return $("#guestFrm_address_1");
  }

  get city() {
    return $("#guestFrm_city");
  }

  get regionState() {
    return $("#guestFrm_zone_id");
  }

  get zipCode() {
    return $("#guestFrm_postcode");
  }

  get country() {
    return $("#guestFrm_country_id");
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

  async fillInGuestCheckoutForm() {
    await commands.waitThenSetValue(this.firstName, testData.uniqueUser.firstName);
    await commands.waitThenSetValue(this.lastName, testData.uniqueUser.lastName);
    await commands.waitThenSetValue(this.email, testData.uniqueUser.email);
    await commands.waitThenSetValue(this.telephone, testData.uniqueUser.telephone);
    await commands.waitThenSetValue(this.fax, testData.uniqueUser.fax);
    await commands.waitThenSetValue(this.addressOne, testData.uniqueUser.addressOne);
    await commands.waitThenSetValue(this.city, testData.uniqueUser.city);
    await this.regionState.selectByVisibleText(testData.uniqueUser.regionState);
    await commands.waitThenSetValue(this.zipCode, testData.uniqueUser.zipCode);
    await this.country.selectByVisibleText(testData.uniqueUser.country);
  }
}

export default new LoginPage();
