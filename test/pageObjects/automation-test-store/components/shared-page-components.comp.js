class SharedPageComponents {
  get continueButton() {
    const e = $(`//button[@title='Continue']`);
    e.waitForClickable();
    return e;
  }
}

export default new SharedPageComponents();
