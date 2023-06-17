import HomePage from "../../../pageObjects/automation-test-store/home.page";
import CategoryMenuComponent from "../../../pageObjects/automation-test-store/components/category-menu.comp";

describe("ADD ITEMS TO BASKET", () => {
  beforeEach(async () => {
    await HomePage.open();
  });

  it("adds an item to basket", async () => {
    await CategoryMenuComponent.categoryMenuLink("Skincare")[1].click();
  });
});
