class CategoryMenuComponent {
  categoryMenuLink(linkText) {
    const element = $(`//a[contains(text(), '${linkText}')]`);
    element.waitForClickable();
    return element;
  }
}

export default new CategoryMenuComponent();
