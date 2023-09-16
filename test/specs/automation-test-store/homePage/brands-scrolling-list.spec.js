import HomePage from "../../../pageObjects/automation-test-store/home.page";
import commands from "../../../../utils/commands.js";
import ItemComponent from "../../../pageObjects/automation-test-store/components/item.comp";
import testData from "../../../data/testData.js";
import assert from "assert";

const reviewsTab = "Reviews";

describe("BRANDS SCROLLING LIST", () => {
  beforeEach(async () => {
    await HomePage.open();
  });

  xit("checks if Pantene scrolling list redirects to correct products", async () => {
    const panteneBrand = await HomePage.brandsScrollingList(testData.brands.Pantene.name);
    await commands.waitThenClick(panteneBrand);

    //const products = await ItemComponent.itemHeaderLinks;
    const products = await commands.waitThenGetText(await ItemComponent.itemHeaderLinks);
    await assert(products.includes(testData.brands.Pantene.hairShine));
  });

  it("checks if Dove product has a review", async () => {
    const doveBrand = await HomePage.brandsScrollingList(testData.brands.Dove.name);
    await commands.waitThenClick(doveBrand);

    await ItemComponent.selectProduct(testData.brands.Dove.showerTool);

    const reviewsTabSelector = await ItemComponent.selectTab(reviewsTab);
    await commands.waitThenClick(reviewsTabSelector);

    const reviewText = await commands.waitThenGetText(await ItemComponent.reviewContent);
    await assert(reviewText.includes(testData.brands.Dove.showerToolReview));
  });
});
