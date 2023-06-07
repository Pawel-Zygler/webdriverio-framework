import BasePage from "./base.page";

class ApparelAndAccessoriesPage extends BasePage {
  subcategory(subcategory) {
    return $(`//a[text()='${subcategory}']`);
  }

  selectProduct(itemName) {
    const title = $(`//*[@title='${itemName}']`);
    title.waitForExist();
    title.waitForClickable();
    title.click();
  }
}
export default new ApparelAndAccessoriesPage();
