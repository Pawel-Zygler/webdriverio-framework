class CategoryMenuComponent {
  categoryMenuLink(linkText) {
    return $(
      `//ul[@class='nav-pills categorymenu']/li/a[contains(text(),'${linkText}')]`
    );
  }

  subcategory(mainCategory, subCategory) {
    return $(
      `//ul[@class='nav-pills categorymenu']//a[contains(text(), '${subCategory}') and ancestor::*/a[contains(text(), '${mainCategory}')]]`
    );
  }

  homeSubcategoryOption(subcategory) {
    return $(
      `//ul[@class='nav-pills categorymenu']//span[contains(text(), '${subcategory}')]`
    );
  }

  get homeCategoryDropdownLoginBtn() {
    return $(`//ul[@id='main_menu']//span[text()='Login']`);
  }
}

export default new CategoryMenuComponent();
