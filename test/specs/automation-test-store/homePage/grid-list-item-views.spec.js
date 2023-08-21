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
      testData.categories.skincare.subcategoryFace.name
    );
  });

  //checks if element in a list has part of this text
  it("checks if the items are in list view", async () => {
    await commands.waitThenClick(SharedPageComponents.listButton);
    const descriptions = await ItemComponent.itemHeaderDescriptions;

    let descriptionsAsTexts = [];

    for (let description of descriptions) {
      const descriptionTexts = await commands.waitThenGetText(description);
      descriptionsAsTexts.push(descriptionTexts);
    }

    const isTextPresent = descriptionsAsTexts.some((description) =>
      description.includes(
        testData.categories.skincare.subcategoryFace.productOne.description
      )
    );

    await expect(isTextPresent).toBe(true);
  });

  it("checks if the items are in grid view", async () => {
    await commands.waitThenClick(SharedPageComponents.gridButton);
    const descriptions = await ItemComponent.itemHeaderDescriptions;
    await expect(descriptions[1]).not.toBeDisplayed();
  });
});
