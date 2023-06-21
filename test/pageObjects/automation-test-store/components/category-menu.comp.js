class CategoryMenuComponent {
  categoryMenuLink(linkText) {
    const element = $(
      `//ul[@class='nav-pills categorymenu']//a[contains(text(), '${linkText}')]`
    );

    return element;
  }

  subcategory(mainCategory, subcategory) {
    const element = $(
      `//ul[@class='nav-pills categorymenu']//a[contains(text(), '${subcategory}') and ancestor::*/a[contains(text(), '${mainCategory}')]]`
    );
    return element;
  }
}

export default new CategoryMenuComponent();
