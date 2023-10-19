import HomePage from "../../../pageObjects/automation-test-store/home.page";
import commands from "../../../../utils/commands.js";
import testData from "../../../data/testData.js";
import SharedPageComponents from "../../../pageObjects/automation-test-store/components/shared-page-components.comp";
import CategoryMenuComponent from "../../../pageObjects/automation-test-store/components/category-menu.comp";

describe("BREADCRUMBS - main category", async () => {
  before(async () => {
    await HomePage.open();
    await commands.waitThenClick(
      CategoryMenuComponent.categoryMenuLink(testData.categories.apparel.name)
    );
  });

  it("checks if Apparel crumb is visible", async () => {
    const text = await commands.waitThenGetText(SharedPageComponents.lastBreadcrumb);

    await expect(text).toEqual(testData.categories.apparel.name);
  });
});

describe("BREADCRUMBS - subcategory", async () => {
  beforeEach(async () => {
    await HomePage.open();
    await commands.waitThenSelectCategoryAndOrSubcategory(
      testData.categories.skincare.name,
      testData.categories.skincare.subcategoryEyes.name
    );
  });

  it("clicks Apparel item and checks if next crumb is visible", async () => {
    const text = await commands.waitThenGetText(SharedPageComponents.lastBreadcrumb);

    await expect(text).toEqual(testData.categories.skincare.subcategoryEyes.name);
  });
});
