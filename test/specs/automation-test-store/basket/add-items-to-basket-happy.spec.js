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
    it(`adds specific 'skincare products' with clicking dropdown`, async () => {
      await browser.pause(4000);
      await commands.waitThenClick(
        HomePage.categoryMenuComponent.categoryMenuLink("Skincare")[1]
      );
      await SkinCarePage.addSpecificItems(
        "creme precieuse nuit 50ml",
        "total moisture facial cream"
      );
    });

    it("checks basket and validates total", async () => {
      await commands.waitThenClick(
        HomePage.topMenuComponent.topMenuLink("Cart")
      );
      await expect(browser).toHaveUrlContaining("checkout");
      await CartPage.validateTotal();
    });

    it("adds a shoe to basket without clicking dropdown and checks if user is in cart", async () => {
      await commands.waitThenClick(
        HomePage.categoryMenuComponent.categoryMenuLink(
          "Apparel & accessories"
        )[1]
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
  xdescribe("ADD T-SHIRTS", () => {
    it("adds a t-shirt and checks if items are in cart", async () => {
      const productOne =
        "Designer Men Casual Formal Double Cuffs Grandad Band Collar Shirt Elegant Tie";
      const productTwo = "Casual 3/4 Sleeve Baseball T-Shirt";
      const errorInName =
        "Designer Men Cassual Formal Double Cuffs Grandad Band Collar Shirt Elegant Tie";

      await commands.waitThenClick(
        HomePage.categoryMenuComponent.categoryMenuLink(
          "Apparel & accessories"
        )[1]
      );
      await commands.waitThenClick(
        ApparelAndAccessoriesPage.subcategory("T-shirts")
      );

      await commands.waitThenClickProduct(productOne);
      await commands.waitThenClick(ItemComponent.addToCartBtn);

      // await commands.waitThenClick(HomePage.categoryMenuComponent.categoryMenuLink("Apparel & accessories")[1]);
      // await commands.waitThenClick(ApparelAndAccessoriesPage.subcategory("T-shirts"));

      // await commands.waitThenClickProduct(productTwo);
      // await commands.waitThenClick(ItemComponent.addToCartBtn);

      let rows = await CartPage.getTextsFromItemsInBasket;
      let texts = [];
      //let allTextsInString = texts.join(" ");

      if (rows) {
        for (let row of rows) {
          let text = await row.getText();
          texts.push(text);
        }
      } else {
        console.log("row is undefined");
      }
      //this is still not working correctly, fix the expect, however, this is not obvious
      //await console.log(allTextsInString);
      for (let text of texts) {
        await expect(await text).toHaveTextContaining("Designer Men Casual");
      }
    });
  });

  xdescribe("MAKEUP", () => {
    it("goes to MAKEUP page, nails subcategory ", async () => {});
  });
});
