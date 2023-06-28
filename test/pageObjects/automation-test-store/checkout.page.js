import commands from "../../../utils/commands";
import testData from "../../data/testData";

class CheckoutPage {
  get shoppingCartCheckoutBtnOne() {
    return $(`#cart_checkout1`);
  }

  get shoppingCartCheckoutBtnTwo() {
    return $(`#cart_checkout2`);
  }

  get confirmOrderBtn() {
    return $(`#checkout_btn`);
  }

  get orderNumber() {
    return $(`//p[contains(text(),'Your order')]`);
  }

  get invoiceLink() {
    return $(`//a[contains(text(),'invoice page')]`);
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

  get separateShippingAddressCheckbox() {
    return $(`guestFrm_shipping_indicator`);
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

  get firstNameShipping() {
    return $("#guestFrm_shipping_firstname");
  }

  get lastNameShipping() {
    return $("#guestFrm_shipping_lastname");
  }

  get addressOneShipping() {
    return $("#guestFrm_shipping_address_1");
  }

  get cityShipping() {
    return $("#guestFrm_shipping_city");
  }

  get regionStateShipping() {
    return $("#guestFrm_shipping_zone_id");
  }

  get zipCodeShipping() {
    return $("#guestFrm_shipping_postcode");
  }

  get countryShipping() {
    return $("#guestFrm_shipping_country_id");
  }

  get separateShippingAddressCheckbox() {
    return $(`#guestFrm_shipping_indicator`);
  }

  async fillInSeparateShippingAddressForm() {
    await commands.waitThenSetValue(this.firstNameShipping, testData.uniqueUser.firstName);
    await commands.waitThenSetValue(this.lastNameShipping, testData.uniqueUser.lastName);
    await commands.waitThenSetValue(this.addressOneShipping, testData.uniqueUser.addressOne);
    await commands.waitThenSetValue(this.cityShipping, testData.uniqueUser.city);
    await this.regionStateShipping.selectByVisibleText(testData.uniqueUser.regionState);
    await commands.waitThenSetValue(this.zipCodeShipping, testData.uniqueUser.zipCode);
    await this.countryShipping.selectByVisibleText(testData.uniqueUser.country);
  }
}

export default new CheckoutPage();
