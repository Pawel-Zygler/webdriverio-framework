class MyAccountPage {
  get topMenuLogoff() {
    return $(
      `//ul[@class='sub_menu dropdown-menu']//a[contains(text(),'Logoff')]`
    );
  }

  get sideMenuLogoff() {
    return $(`//ul[@class='side_account_list']//a[contains(text(),'Logoff')]`);
  }

  get footerMenuLogoff() {
    return $(`//ul[@class='info_links_footer']//a[contains(text(),'Logoff')]`);
  }
}

export default new MyAccountPage();
