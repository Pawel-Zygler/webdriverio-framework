import HomePage from "../../../pageObjects/automation-test-store/home.page";
import testData from "../../../data/testData";
import commands from "../../../../utils/commands";
import CategoryMenuComponent from "../../../../test/pageObjects/automation-test-store/components/category-menu.comp";
import TopMenuComponent from "../../../../test/pageObjects/automation-test-store/components/top-menu.comp";
import SharedPageComponents from "../../../pageObjects/automation-test-store/components/shared-page-components.comp";

describe("SPECIALS", async () => {
  beforeEach(async () => {
    await HomePage.open();
  });

  it("goes to Specials page from Top Menu", async () => {
    await commands.waitThenClick(
      TopMenuComponent.topMenuLink(testData.topMenu.specials.name)
    );

    await expect(
      SharedPageComponents.pageHeader(testData.headers.specialOffers).toBeDisplayed()
    );
  });

  it("goes to Specials page from Home menu", async () => {
    await commands.waitThenSelectCategoryAndOrSubcategory(testData.categories.home.name);

    await commands.waitThenClick(
      CategoryMenuComponent.homeCategorySubcategoryOption(
        testData.categories.home.subcategorySpecials.name
      )
    );

    await expect(
      SharedPageComponents.pageHeader(testData.headers.specialOffers).toBeDisplayed()
    );
  });
});
