class TopMenuComponent {
  topMenuLink(linkText) {
    return $(
      `//ul[@id='main_menu_top']//span[contains(text(), '${linkText}')]`
    );
  }

  get loginOrRegister() {
    const element = $(`//a[contains(text(), 'Login or register')]`);
    return element;
  }

  get welcomeBackDropdown() {
    const element = $(`//div[contains(text(), 'Welcome back pawel')]`);
    element.waitForClickable();
    return element;
  }
}

export default new TopMenuComponent();
