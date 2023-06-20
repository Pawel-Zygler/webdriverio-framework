import BasePage from "./base.page";

class ApparelAndAccessoriesPage extends BasePage {
  //subcategory should be moved to category menu components
  subcategory(subcategory) {
    const element = $(
      `//div[@class='subcategories']//a[contains(text(), '${subcategory}')]`
    );
    return element;
  }

  selectProduct(itemName) {
    const title = $(`//*[@title='${itemName}']`);
    title.waitForExist();
    title.waitForClickable();
    title.click();
  }
}
export default new ApparelAndAccessoriesPage();
