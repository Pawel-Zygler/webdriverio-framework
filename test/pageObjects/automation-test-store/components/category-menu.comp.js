class CategoryMenuComponent {
  categoryMenuLink(linkText) {
    const e = $$(`//a[contains(text(), '${linkText}')]`);
    e.waitForClickable();
    return e;
  }
}

export default new CategoryMenuComponent();
