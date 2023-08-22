import HomePage from "../../../pageObjects/automation-test-store/home.page";
import commands from "../../../../utils/commands.js";
import ItemComponent from "../../../pageObjects/automation-test-store/components/item.comp";
import testData from "../../../data/testData.js";
import { assert } from "chai";

const reviewsTab = "Reviews";

describe("BRANDS SCROLLING LIST", () => {
  beforeEach(async () => {
    await HomePage.open();
  });

  it("checks if Dove has product has review", async () => {
    const doveBrand = await HomePage.brandsScrollingList(testData.brands.Dove.name);
    await commands.waitThenClick(doveBrand);

    await ItemComponent.selectProduct(testData.brands.Dove.showerTool);

    const reviewsTabSelector = await ItemComponent.selectTab(reviewsTab);
    await commands.waitThenClick(reviewsTabSelector);

    const reviewText = await commands.waitThenGetText(await ItemComponent.reviewContent);
    await expect(reviewText).toHaveText(testData.brands.Dove.showerToolReview); //thorows undefined at.toHaveText
  });
});
