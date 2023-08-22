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
    return $("//li//a[@class='dropdown-toggle']//span//span");
  }

  currencyOption(currency) {
    return $(`//a[contains(text(),"${currency}")]`);
  }

  get currentCurrency() {
    return $(`//span//span[@class='label label-orange font14']`);
  }

  socialMediaButton(socialMedia) {
    return $(`//a[contains(text(),'${socialMedia}')]`);
  }

  get bannerSlide() {
    return $(`//div[@class='oneByOneSlide']`);
  }

  async scrollToLogo() {
    const element = $(`[title='Automation Test Store']`);
    await element.waitForExist();
    await element.scrollIntoView();
    await element.waitForDisplayed();
  }

  async brandsScrollingList(brand) {
    return $(`//img[@alt='${brand}']`);
  }
}

export default new HomePage();
