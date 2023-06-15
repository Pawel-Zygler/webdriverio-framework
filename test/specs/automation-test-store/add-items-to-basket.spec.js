import ApparelAndAccessoriesPage from "../../pageObjects/automation-test-store/apparel-and-accessories.page";
import CartPage from "../../pageObjects/automation-test-store/cart.page";
import ItemComponent from "../../pageObjects/automation-test-store/components/item.comp";
import HomePage from "../../pageObjects/automation-test-store/home.page";
import SkinCarePage from "../../pageObjects/automation-test-store/skincare.page";
import commands from "../../../utils/commands";

describe("BASKET - happy path", () => {
  beforeEach(async() => {
    await HomePage.open();
  });

  it(`adds specific 'skincare products' & validates cart total`, async () => {
    await commands.waitThenClick(HomePage.categoryMenuComponent.categoryMenuLink("Skincare")[1]);

    await SkinCarePage.addSpecificItems("creme precieuse nuit 50ml", "total moisture facial cream");
  });

  it("checks basket and validate total", async () => {
    await commands.waitThenClick(HomePage.topMenuComponent.topMenuLink("Cart"));
    await expect(browser).toHaveUrlContaining("checkout");
    await CartPage.validateTotal();
  });

  it("adds a shoe to basket without clicking dropdown", async () => {
    await commands.waitThenClick(HomePage.categoryMenuComponent.categoryMenuLink("Apparel & accessories")[1])
    await commands.waitThenClick(ApparelAndAccessoriesPage.subcategory("Shoes"));

    await ApparelAndAccessoriesPage.selectProduct("Ruby Shoo Womens Jada T-Bar");
    await commands.waitThenClick(ItemComponent.addToCartBtn);
    await expect(await ItemComponent.shoppingCartHeader).toBeDisplayed();
  });

  //I could probably make this into for loop and then subsidize skincare products with any other products
  //change variables and play with it later if there is time, or when you try to automate other categories
});
