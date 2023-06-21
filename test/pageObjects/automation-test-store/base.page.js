export default class BasePage {
  async open(path) {
    return browser.url(`/${path}`);
  }
}
