import BasePage from "./base.page";
import CategoryMenuComponent from "./components/category-menu.comp";
import TopMenuComponent from "./components/top-menu.comp";

class SearchPage extends BasePage {
  open() {
    return super.open("");
  }

  get categoryMenuComponent() {
    return CategoryMenuComponent;
  }

  get topMenuComponent() {
    return TopMenuComponent;
  }

  get searchHeader() {
    return $("//span[contains(text(),'Search')]");
  }

  get searchDescriptionsCheckbox() {
    return $("//label[contains(text(),'Search in product descriptions')]");
  }
}

export default new SearchPage();
