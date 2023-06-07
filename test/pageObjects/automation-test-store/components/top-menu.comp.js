class TopMenuComponent {
  topMenuLink(linkText) {
    return $(`//span[contains(text(), '${linkText}')]`);
  }

  get loginOrRegister() {
    const e = $(`//a[contains(text(), 'Login or register')]`);
    e.waitForClickable();
    return e;
  }

  get welcomeBackDropdown() {
    const e = $(`//div[contains(text(), 'Welcome back pawel')]`);
    e.waitForClickable();
    return e;
  }
}

export default new TopMenuComponent();
