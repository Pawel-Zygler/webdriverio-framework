import HomePage from "../../../pageObjects/automation-test-store/home.page";
import testData from "../../../data/testData";
import commands from "../../../../utils/commands";

describe("SOCIAL MEDIA - happy path", async () => {
  beforeEach(async () => {
    await HomePage.open();
  });

  //this test for linked in has a prod bug, linked in opens in same tab
  describe("SOCIAL MEDIA - happy path", async () => {
    const socials = [
      { name: "fb", url: "fburl" },
      { name: "tt", url: "tturl" },
      //{name: "li", url: "liurl"}, prod bug here
    ];

    for (let social of socials) {
      it(`verifies ${socials.name} page opens in new tab`, async () => {
        await commands.waitThenClick(
          HomePage.socialMediaButton(testData.socialMedia[social.name])
        );
        await browser.switchWindow(testData.socialMedia[social.url]);

        await expect(await browser).toHaveUrlContaining(testData.socialMedia[social.url]);
      });
    }
  });
});
