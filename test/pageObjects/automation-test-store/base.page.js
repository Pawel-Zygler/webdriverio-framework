export default class BasePage {
  async open(path) {
    return browser.url(`https://automationteststore.com/${path}`);
  }
}
