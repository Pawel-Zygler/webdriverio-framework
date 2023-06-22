class CategoryMenuComponent {
  categoryMenuLink(linkText) {
    const element = $(
      `//ul[@class='nav-pills categorymenu']/li/a[contains(text(),'${linkText}')]`
    );
    return element;
  }

  subcategory(mainCategory, subCategory) {
    const element = $(
      `//ul[@class='nav-pills categorymenu']//a[contains(text(), '${subCategory}') and ancestor::*/a[contains(text(), '${mainCategory}')]]`
    );
    return element;
  }

  homeSubcategoryOption(subcategory) {
    const element = $(
      `//ul[@class='nav-pills categorymenu']//span[contains(text(), '${subcategory}')]`
    );
    return element;
  }

  get homeCategoryDropdownLoginBtn() {
    const element = $(`//ul[@id='main_menu']//span[text()='Login']`);
    return element;
  }
}

export default new CategoryMenuComponent();
