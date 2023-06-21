import commands from "../../../../utils/commands";
import HomePage from "../../../pageObjects/automation-test-store/home.page";
import testData from "../../../data/testData";
import SharedPageComponents from "../../../pageObjects/automation-test-store/components/shared-page-components.comp";

describe("ADD ITEMS - unhappy path", () => {
  beforeEach(async () => {
    await HomePage.open();
  });

  it("tries to add item out of stock", async () => {
    await commands.waitThenMoveTo(
      HomePage.categoryMenuComponent.categoryMenuLink(
        testData.categories.men.name
      )
    );

    await commands.waitThenClick(
      HomePage.categoryMenuComponent.subcategory(
        testData.categories.men.name,
        testData.categories.men.subcategoryMen
      )
    );

    //out of stock
  });
});
