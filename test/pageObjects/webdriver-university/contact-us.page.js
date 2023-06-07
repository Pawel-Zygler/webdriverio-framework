import dataGenerator from "../../../utils/data-generator";
import BasePage from "./base.page";

class ContactUsPage extends BasePage {
  open() {
    return super.open("Contact-Us/contactus.html");
  }

  get inputFirstName() {
    return $('//*[@name="first_name"]');
  }
  get inputLastName() {
    return $('//*[@name="last_name"]');
  }
  get inputEmail() {
    return $('//*[@name="email"]');
  }
  get inputMessage() {
    return $('//*[@name="message"]');
  }
  get submitBtn() {
    return $('//input[@value="SUBMIT"]');
  }

  get successfulSubmissionHeader() {
    return $("#contact_reply > h1");
  }

  get unsuccessfulSubmissionHeader() {
    return $("body");
  }

  async submitForm(firstName, lastName, emailAddress, message) {
    await this.inputFirstName.setValue(firstName);
    await this.inputLastName.setValue(lastName);
    await this.inputEmail.setValue(emailAddress);
    await this.inputMessage.setValue(message);
    await this.submitBtn.click();
  }

  async submitRandomForm(firstName, lastName) {
    await this.inputFirstName.setValue(firstName);
    await this.inputLastName.setValue(lastName);
    await this.inputEmail.setValue(
      "AutoEmail" + dataGenerator.generateRandomString() + "@dsa.pl"
    );
    await this.inputMessage.setValue(
      "Random Message: " + dataGenerator.generateRandomString()
    );
    await this.submitBtn.click();
  }
}
export default new ContactUsPage();
