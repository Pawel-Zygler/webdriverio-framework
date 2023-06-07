export default class BasePage {
  open(path) {
    return browser.url(`http://www.webdriveruniversity.com/${path}`);
  }
}
