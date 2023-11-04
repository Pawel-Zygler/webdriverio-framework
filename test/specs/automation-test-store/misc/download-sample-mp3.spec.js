import HomePage from "../../../pageObjects/automation-test-store/home.page";
import commands from "../../../../utils/commands";
import testData from "../../../data/testData";
import ItemComponent from "../../../pageObjects/automation-test-store/components/item.comp";

const downloadsTab = "Downloads";

describe("BOOKS", async () => {
  beforeEach(async () => {
    await HomePage.open();
  });

  it("goes to Books and downloads sample", async () => {
    await commands.waitThenSelectCategoryAndOrSubcategory(
      testData.categories.books.name,
      testData.categories.books.subcategoryAudioCD.name
    );

    await commands.waitThenClickProduct(
      testData.categories.books.subcategoryAudioCD.productTwo
    );

    const downloadsTabSelector = await ItemComponent.selectTab(downloadsTab);
    await commands.waitThenClick(downloadsTabSelector);

    const downloadsButtonSelector = await ItemComponent.startDownload;
    await commands.waitThenClick(downloadsButtonSelector);

    //verify file got downloaded now
  });
});
