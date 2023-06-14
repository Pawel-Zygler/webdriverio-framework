import ApparelAndAccessoriesPage from "../../pageObjects/automation-test-store/apparel-and-accessories.page";
import CartPage from "../../pageObjects/automation-test-store/cart.page";
import ItemComponent from "../../pageObjects/automation-test-store/components/item.comp";
import HomePage from "../../pageObjects/automation-test-store/home.page";
import SkinCarePage from "../../pageObjects/automation-test-store/skincare.page";

describe("add items to basket", () => {
  beforeEach(() => {
    HomePage.open();
  });
  it(`adds specific 'skincare products' & validates cart total`, async () => {
    await HomePage.categoryMenuComponent
      .categoryMenuLink("Skincare")[1]
      .click();

    await SkinCarePage.addSpecificItems(
      "creme precieuse nuit 50ml",
      "total moisture facial cream"
    );
  });

  it("checks basket and validate total", async () => {
    await HomePage.topMenuComponent.topMenuLink("Cart").click();
    //await browser.debug();
    await expect(browser).toHaveUrlContaining("checkout");
    await CartPage.validateTotal();
  });

  it("adds a shoe to basket without clicking dropdown", async () => {
    await HomePage.categoryMenuComponent
      .categoryMenuLink("Apparel & accessories")[1]
      .click();
    await ApparelAndAccessoriesPage.subcategory("Shoes").click();

    await ApparelAndAccessoriesPage.selectProduct(
      "Ruby Shoo Womens Jada T-Bar"
    );
    await ItemComponent.addToCartBtn.click();
    await expect(await ItemComponent.shoppingCartHeader).toBeDisplayed();
  });
});
