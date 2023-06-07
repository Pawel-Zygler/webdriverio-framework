import BasePage from "./base.page";
import ItemComponent from "../automation-test-store/components/item.comp";

class SkinCarePage extends BasePage {
  get itemComponent() {
    return ItemComponent;
  }

  async addSpecificItems(item1, item2) {
    const skincareProducts_Header_Links = await ItemComponent.itemHeaderLinks;

    const itemPrices = []; //$220.00 $38.00

    for (const header of skincareProducts_Header_Links) {
      const tempHeaderText = await header.getText();

      if (
        tempHeaderText.toLowerCase() == item1.toLowerCase() ||
        tempHeaderText.toLowerCase() == item2.toLowerCase()
      ) {
        const attr = await header.getAttribute("href");

        const itemId = attr.split("id=").pop();
        console.log(itemId); //93 66

        await $('//a[@data-id="' + itemId + '"]').click();

        itemPrices.push(
          await $(
            "//a[@data-id='" +
              itemId +
              "']/following-sibling::div/div[@class='pricenew']" +
              "| //a[@data-id='" +
              itemId +
              "']/following-sibling::div/div[@class='oneprice']"
          ).getText()
        );
      }
      const formattedItemPrices = []; //$220.00 -> 220.00, $38.00 -> 38.00

      itemPrices.forEach((price) => {
        formattedItemPrices.push(price.replace("$", ""));
      });

      var itemsTotal = 0;
      formattedItemPrices.forEach((price) => (itemsTotal += parseFloat(price)));
      console.log("Items Total: " + itemsTotal); //258
    }
  }
}
export default new SkinCarePage();
