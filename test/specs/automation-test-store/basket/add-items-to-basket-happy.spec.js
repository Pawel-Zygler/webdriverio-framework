import ApparelAndAccessoriesPage from "../../../pageObjects/automation-test-store/apparel-and-accessories.page";
import CartPage from "../../../pageObjects/automation-test-store/cart.page";
import ItemComponent from "../../../pageObjects/automation-test-store/components/item.comp";
import SkinCarePage from "../../../pageObjects/automation-test-store/skincare.page";
import commands from "../../../../utils/commands";
import HomePage from "../../../pageObjects/automation-test-store/home.page";

describe("BASKET - happy path", () => {
  beforeEach(async () => {
    await HomePage.open();
  });

  describe("ADD SKINCARE PRODUCTS", () => {
    it(`adds two products and validates total`, async () => {
      await commands.waitThenClick(
        HomePage.categoryMenuComponent.categoryMenuLink("Skincare")
      );

      await SkinCarePage.addSpecificItems(
        "creme precieuse nuit 50ml",
        "total moisture facial cream"
      );

      await commands.waitThenClick(
        HomePage.topMenuComponent.topMenuLink("Cart")
      );

      await expect(browser).toHaveUrlContaining("checkout");
      await CartPage.validateTotal();
    });

    it("adds a shoe to basket without clicking dropdown and checks if user is in cart", async () => {
      await commands.waitThenClick(
        HomePage.categoryMenuComponent.categoryMenuLink("Apparel & accessories")
      );
      await commands.waitThenClick(
        ApparelAndAccessoriesPage.subcategory("Shoes")
      );

      await ApparelAndAccessoriesPage.selectProduct(
        "Ruby Shoo Womens Jada T-Bar"
      );

      await commands.waitThenClick(ItemComponent.addToCartBtn);
      await expect(ItemComponent.shoppingCartHeader).toBeDisplayed();
      //add expect if item is in baskets
    });
  });

  //wip
  describe("ADD T-SHIRTS", () => {
    it.only("adds a t-shirt and checks if items are in cart", async () => {
      const productOne =
        "Designer Men Casual Formal Double Cuffs Grandad Band Collar Shirt Elegant Tie";
      const productTwo = "Casual 3/4 Sleeve Baseball T-Shirt";
      const errorInName =
        "Designer Men Cassual Formal Double Cuffs Grandad Band Collar Shirt Elegant Tie";

      await commands.waitThenClick(
        HomePage.categoryMenuComponent.categoryMenuLink("Apparel & accessories")
      );
      await commands.waitThenClick(
        ApparelAndAccessoriesPage.subcategory("T-shirts")
      );

      await commands.waitThenClickProduct(productOne);
      await commands.waitThenClick(ItemComponent.addToCartBtn);

      await commands.waitThenClick(
        HomePage.categoryMenuComponent.categoryMenuLink("Apparel & accessories")
      );
      await commands.waitThenClick(
        ApparelAndAccessoriesPage.subcategory("T-shirts")
      );

      await commands.waitThenClickProduct(productTwo);
      await commands.waitThenClick(ItemComponent.addToCartBtn);

      let rows = await CartPage.getTextsFromItemsInBasket;
      let texts = [];
      //let allTextsInString = texts.join(" ");

      for (let row of rows) {
        let text = await row.getText();
        texts.push(text);
      }

      await expect(texts).toHaveTextContaining(productOne);
    });
  });
});
