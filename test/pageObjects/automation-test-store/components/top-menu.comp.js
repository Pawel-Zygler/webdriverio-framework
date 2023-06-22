class TopMenuComponent {
  topMenuLink(linkText) {
    return $(
      `//ul[@id='main_menu_top']//span[contains(text(), '${linkText}')]`
    );
  }

  get loginOrRegister() {
    return $(`//a[contains(text(), 'Login or register')]`);
  }

  get welcomeBackDropdown() {
    return $(`//div[@class='menu_text']`);
  }
}

export default new TopMenuComponent();
