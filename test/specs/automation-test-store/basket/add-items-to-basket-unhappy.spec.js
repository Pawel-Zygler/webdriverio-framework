import commands from "../../../../utils/commands";
import HomePage from "../../../pageObjects/automation-test-store/home.page";
import testData from "../../../data/testData";

describe("ADD ITEMS - unhappy path", () => {
  beforeEach(async () => {
    await HomePage.open();
  });

  it("tries to add item out of stock", async () => {
    //this selector again finds men in sub and main cateogries - need to find one, use ai
    await commands.waitThenMoveTo(
      HomePage.categoryMenuComponent.categoryMenuLink(
        testData.categories.men.name
      )
    );

    await commands.waitThenClick(
      HomePage.categoryMenuComponent.categoryMenuLink(
        testData.categories.subcategoryMen
      )
    );

    await commands.waitThenClickProduct(
      testData.categories.men.productOutOfStock
    );
  });
});
