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
    const element = $("//li//a[@class='dropdown-toggle']//span//span");
    return element;
  }

  currencyOption(currency) {
    const element = $(`//a[contains(text(),"${currency}")]`);
    return element;
  }

  get currentCurrency() {
    const element = $(`//span[@class='cart_total']`);
    return element;
  }

  socialMediaButton(socialMedia) {
    const element = $(`//a[contains(text(),'${socialMedia}')]`);
    return element;
  }

  get bannerSlide() {
    const slide = $(`//div[@class='oneByOneSlide']`);
    return slide;
  }

  async scrollToLogo() {
    const element = $(`[title='Automation Test Store']`);
    await element.waitForExist();
    await element.scrollIntoView();
    await element.waitForDisplayed();
  }
}

export default new HomePage();
