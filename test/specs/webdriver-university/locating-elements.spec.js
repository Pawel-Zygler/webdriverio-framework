describe("locating elements", () => {
  beforeEach(async () => {
    await browser.url("https://www.selectors.webdriveruniversity.com/");
  });

  it("$ - locate element", async () => {
    await browser.$("//a[@href='#portfolio']");
    const webdriverioButton = await browser.$(
      '[data-target="#portfolioModal1"]'
    );
    await webdriverioButton.click();
  });

  it("$$ locate elements", async () => {
    const expectedTitles = [
      "#",
      "First",
      "Last",
      "Handle",
      "1",
      "2",
      "3",
      "Firstname",
      "Lastname",
      "Age",
    ];
    const actualTitles = [];
    const tableHeaderTitle = await $$("//table//th");
    for (const title of tableHeaderTitle) {
      //console.log(await title.getText());
      actualTitles.push(await title.getText());
    }
    expect(expectedTitles).toEqual(actualTitles);
  });
});
