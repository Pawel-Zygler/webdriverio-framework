import BasePage from "./base.page";
import CategoryMenuComponent from "../automation-test-store/components/category-menu.comp";
import TopMenuComponent from "../automation-test-store/components/top-menu.comp";

class HomePage extends BasePage {
  open() {
    return super.open("");
  }

  get categoryMenuComponent() {
    return CategoryMenuComponent;
  }

  get topMenuComponent() {
    return TopMenuComponent;
  }

  get currencyDropdown() {
    const e = $("//li//a[@class='dropdown-toggle']//span//span");
    return e;
  }

  currencyOption(currency) {
    const e = $(`//a[contains(text(),"${currency}")]`);
    return e;
  }

  get currentCurrency() {
    const e = $(`//span[@class='cart_total']`);
    e.waitForClickable();
    e.getText();
    return e;
  }

  socialMediaButton(socialMedia) {
    const e = $(`//a[contains(text(),'${socialMedia}')]`);
    e.waitForClickable();
    return e;
  }
}

export default new HomePage();
