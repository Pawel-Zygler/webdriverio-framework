import HomePage from "../../../pageObjects/automation-test-store/home.page";
import testData from "../../../data/testData";

describe("SOCIAL MEDIA - happy path", () => {
  beforeEach(() => {
    HomePage.open();
  });

  it("verified Facebook page opened in a separate tab", async () => {
    await HomePage.socialMediaButton(testData.socialMedia.fb).click();
    await browser.switchWindow(testData.socialMedia.fburl)

    await expect(await browser).toHaveUrlContaining(testData.socialMedia.fburl);
  });

  it("verifies Twitter page opened in a separate tab", async () => {
    await HomePage.socialMediaButton(testData.socialMedia.tt).click();
    await browser.switchWindow(testData.socialMedia.tturl)

    await expect(await browser).toHaveUrlContaining(testData.socialMedia.tturl);
  });
  
//prod bug, linked in opens in same page
  xit("verifies Linked in page opened in a separate tab", async () => {
    await HomePage.socialMediaButton(testData.socialMedia.li).click();
    await browser.switchWindow(testData.socialMedia.liurl)

    await expect(await browser).toHaveUrlContaining(testData.socialMedia.liurl);
  });
});
