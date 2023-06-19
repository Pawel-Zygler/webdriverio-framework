class CategoryMenuComponent {
  categoryMenuLink(linkText) {
    const element = $(
      `//ul[@class='nav-pills categorymenu']//a[contains(text(), '${linkText}')]`
    );
    return element;
  }
}

export default new CategoryMenuComponent();
