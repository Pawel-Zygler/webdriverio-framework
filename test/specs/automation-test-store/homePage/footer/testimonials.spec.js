import HomePage from "../../../../pageObjects/automation-test-store/home.page";
import commands from "../../../../../utils/commands";

describe("TESTIMONIALS", async () => {
  beforeEach(async () => {
    await HomePage.open();
  });

  it("checks if testimonials have correct review", async () => {
    await HomePage.clickTestimonial(1);

    const testimonialText = await commands.waitThenGetText(HomePage.testimonialText); //element ("//ul//li//br") still not displayed, czyli lepszy selektor trzeba

    await expect(testimonialText).toContain(
      "Really great products and professional service!"
    );
  });
});
