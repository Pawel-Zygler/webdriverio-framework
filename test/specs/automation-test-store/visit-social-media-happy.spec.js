import HomePage from "../../pageObjects/automation-test-store/home.page";
import testData from "../../data/testData";

describe("SOCIAL MEDIA - happy path", () => {
  beforeEach(() => {
    HomePage.open();
  });

  it("verified Facebook page opened in a separate tab", async () => {
    await HomePage.socialMediaButton(testData.socialMedia.fb).click();

    await expect(await browser).toHaveUrlContaining(testData.socialMedia.fburl);
    q;
  });
});
