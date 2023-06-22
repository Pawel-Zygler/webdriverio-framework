import HomePage from "../../../pageObjects/automation-test-store/home.page";
import testData from "../../../data/testData";
import MyAccountPage from "../../../pageObjects/automation-test-store/my-account.page";
import TopMenuComp from "../../../pageObjects/automation-test-store/components/top-menu.comp";
import LoginPage from "../../../pageObjects/automation-test-store/login.page";
import commands from "../../../../utils/commands";
import CategoryMenuComponent from "../../../../test/pageObjects/automation-test-store/components/category-menu.comp";
import TopMenuComponent from "../../../../test/pageObjects/automation-test-store/components/top-menu.comp";
import SharedPageComponents from "../../../pageObjects/automation-test-store/components/shared-page-components.comp";

describe("SPECIALS", () => {
  beforeEach(async () => {
    await HomePage.open();
  });

  it("goes to Specials page", async () => {
    await commands.waitThenClick(
      TopMenuComponent.topMenuLink(testData.topMenu.specials.name)
    );

    await expect(
      SharedPageComponents.pageHeader(
        testData.headers.specialOffers
      ).toBeDisplayed()
    );
  });
});
