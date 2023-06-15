class SharedPageComponents {
  get continueButton() {
    const e = $(`//button[@title='Continue']`);
    return e;
  }
}

export default new SharedPageComponents();
