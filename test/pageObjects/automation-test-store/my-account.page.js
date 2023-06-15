class MyAccountPage {
  get MyAccountPageHeader() {
    const e = $(`//h1//span[contains(text(),'My Account')]`);
    return e;
  }

  get topMenuLogoff() {
    const e = $(
      `//ul[@class='sub_menu dropdown-menu']//a[contains(text(),'Logoff')]`
    );
    return e;
  }

  get sideMenuLogoff() {
    const e = $(
      `//ul[@class='side_account_list']//a[contains(text(),'Logoff')]`
    );
    return e;
  }

  get footerMenuLogoff() {
    const e = $(
      `//ul[@class='info_links_footer']//a[contains(text(),'Logoff')]`
    );
    return e;
  }

  get logoutHeader() {
    const e = $(`//span[contains(text(),'Account Logout')]`);
    return e;
  }
}

export default new MyAccountPage();
