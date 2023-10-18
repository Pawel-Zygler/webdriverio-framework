import HomePage from "../../../pageObjects/automation-test-store/home.page";
import commands from "../../../../utils/commands.js";
import ItemComponent from "../../../pageObjects/automation-test-store/components/item.comp";
import SearchPage from "../../../pageObjects/automation-test-store/search.page.js";
import testData from "../../../data/testData.js";
import assert from "assert";

const reviewsTab = "Reviews";
const tagsTab = "Tags";

describe("BRANDS SCROLLING LIST", () => {
  beforeEach(async () => {
    await HomePage.open();
  });

  it("checks if Pantene scrolling list redirects to correct products", async () => {
    const panteneBrand = await HomePage.brandsScrollingList(testData.brands.Pantene.name);
    await commands.waitThenClick(panteneBrand);

    const products = await ItemComponent.itemHeaderLinks;

    const results = [];
    for (const product of products) {
      const text = await commands.waitThenGetText(product);
      results.push(text);
    }

    await assert(results.includes(testData.brands.Pantene.hairShine.toUpperCase()));
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

  it("checks if tags have correct products", async () => {
    this.retries(1);
    await commands.waitThenSelectCategoryAndOrSubcategory(
      testData.categories.makeup.name,
      testData.categories.makeup.subcategoryCheeks.name
    );

    await commands.waitThenClickProduct(
      testData.categories.makeup.subcategoryCheeks.productOne.name
    );

    const tagsTabSelector = await ItemComponent.selectTab(tagsTab);
    await commands.waitThenClick(tagsTabSelector);
    await commands.waitThenClick(ItemComponent.tagName(testData.tags.cheeks));
    await expect(SearchPage.searchHeader).toBeDisplayed();
    await expect(SearchPage.searchDescriptionsCheckbox).toBeDisplayed();

    const products = await ItemComponent.itemHeaderLinks;

    const results = [];
    for (const product of products) {
      const text = await commands.waitThenGetText(product);
      results.push(text);
    }

    await assert(
      results.includes(
        testData.categories.makeup.subcategoryCheeks.productTwo.name.toUpperCase()
      )
    );
  });
});
