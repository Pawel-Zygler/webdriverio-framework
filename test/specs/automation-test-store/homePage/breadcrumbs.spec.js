import HomePage from "../../../pageObjects/automation-test-store/home.page";
import commands from "../../../../utils/commands.js";
import testData from "../../../data/testData.js";
import SharedPageComponents from "../../../pageObjects/automation-test-store/components/shared-page-components.comp";
import CategoryMenuComponent from "../../../pageObjects/automation-test-store/components/category-menu.comp";

describe("BREADCRUMBS - main category", () => {
  before(async () => {
    await HomePage.open();
    await commands.waitThenClick(
      CategoryMenuComponent.categoryMenuLink(testData.categories.apparel.name)
    );
  });

  it("checks if Apparel crumb is visible", async () => {
    const text = await commands.waitThenGetText(
      SharedPageComponents.lastBreadcrumb
    );

    await expect(text).toEqual(testData.categories.apparel.name);
  });
});

describe("BREADCRUMBS - subcategory", () => {
  beforeEach(async () => {
    await HomePage.open();

    //debug this, chyba musze razem dawac waitThenMoveTo by dzialalo waitThenClick
    //jak cos to w jedna komende toto dla fiksa
    await commands.waitThenMoveTo(
      HomePage.categoryMenuComponent.categoryMenuLink(
        testData.categories.skincare.name
      )
    );

    await commands.waitThenClick(
      HomePage.categoryMenuComponent.subcategory(
        testData.categories.skincare.name,
        testData.categories.skincare.subcategoryEyes.name
      )
    );
  });

  it("clicks Apparel item and checks if next crumb is visible", async () => {
    const text = await commands.waitThenGetText(
      SharedPageComponents.lastBreadcrumb
    );
    await console.log(`heheheh` + text);

    await expect(text).toEqual(
      testData.categories.skincare.subcategoryEyes.name
    );
  });
});
