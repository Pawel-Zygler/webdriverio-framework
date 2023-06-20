class CategoryMenuComponent {
  categoryMenuLink(linkText) {
    const element = $(
      `//ul[@class='nav-pills categorymenu']//a[contains(text(), '${linkText}')]`
    );
    return element;
  }

  subcategory(subcategory) {
    const element = $(
      `//div[@class='subcategories']//a[contains(text(), '${subcategory}')]`
    );
    return element;
  }
}

export default new CategoryMenuComponent();
