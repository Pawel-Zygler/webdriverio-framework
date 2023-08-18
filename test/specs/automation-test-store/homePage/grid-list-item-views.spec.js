import ItemComponent from "../../../pageObjects/automation-test-store/components/item.comp";
import SharedPageComponents from "../../../pageObjects/automation-test-store/components/shared-page-components.comp";
import commands from "../../../../utils/commands.js";
import testData from "../../../data/testData.js";
import HomePage from "../../../pageObjects/automation-test-store/home.page";

describe("SWITCH TO LIST VIEW", () => {
  before(async () => {
    await HomePage.open();
    await commands.waitThenSelectCategoryAndOrSubcategory(
      testData.categories.skincare.name,
      testData.categories.skincare.subcategoryEyes.name
    );
  });

  it("checks if the items are in list view", async () => {
    await commands.waitThenClick(SharedPageComponents.listButton);
    const elems = await ItemComponent.itemHeaderDescriptions;

    // const descriptions = await commands.waitThenGetText(elems);

    const descriptions = [];

    for (let elem of elems) {
      const description = await commands.waitThenGetText(elem);
      descriptions.push(description);
    }

    await expect(descriptions).toContain(
      testData.categories.skincare.subcategoryFace.productOne.description
    );
  });

  xit("checks if the items are in grid view", async () => {});
});
