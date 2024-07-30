import HomePage from "../../../../pageObjects/automation-test-store/home.page";
import testData from "../../../../data/testData.js";

describe("TESTIMONIALS", async () => {
  beforeEach(async () => {
    await HomePage.open();
  });

  it("checks if testimonials have correct review", async () => {
    await HomePage.clickTestimonial(1);

    const testimonialElements = await HomePage.testimonialTexts;

    const testimonialTexts = await Promise.all(
      testimonialElements.map(async (element) => {
        return element.getText();
      })
    );

    const found = testimonialTexts.some((text) =>
      text.includes(testData.testimonials.MeganWitmore)
    );
    await expect(found).toBe(true);
  });
});
