describe("advanced element interactions - examples", () => {
  it("inputs", async () => {
    await browser.url("/Contact-Us/contactus.html");
    const firstNameTextField = await $(`[name='first_name']`); //css instead of xpath selector

    await firstNameTextField.addValue("primus text");
    await firstNameTextField.addValue("secundus text");

    await firstNameTextField.setValue(`tertius text from ".setValue" command`);

    await firstNameTextField.clearValue();
  });

  it("dropdowns lists", async () => {
    await browser.url("/Dropdown-Checkboxes-RadioButtons/index.html");

    const programmingLanguageDD = await $("#dropdowm-menu-1");
    await programmingLanguageDD.selectByAttribute("value", "python");
    await expect(programmingLanguageDD).toHaveValueContaining("python");
  });

  it("dropdowns - index testng", async () => {
    await browser.url("/Dropdown-Checkboxes-RadioButtons/index.html");

    const programmingLanguageDD = await $("#dropdowm-menu-2");
    await programmingLanguageDD.selectByIndex(2);
    await expect(programmingLanguageDD).toHaveValueContaining("TestNG", {
      ignoreCase: true,
    });
  });

  it("dropdowns - by text 'css'", async () => {
    await browser.url("/Dropdown-Checkboxes-RadioButtons/index.html");

    const programmingLanguageDD = await $("#dropdowm-menu-3");
    await programmingLanguageDD.selectByVisibleText("CSS");
    await expect(programmingLanguageDD).toHaveValueContaining("css", {
      ignoreCase: true,
    });
  });

  it("state commands", async () => {
    await browser.url("/Dropdown-Checkboxes-RadioButtons/index.html");

    const lettuceRadioCheckbox = await $('[value="lettuce"]');
    const lettuceRadioCheckbox_isDisplayed =
      await lettuceRadioCheckbox.isDisplayed();
    await expect(lettuceRadioCheckbox_isDisplayed).toEqual(true);
    await expect(lettuceRadioCheckbox).toBeEnabled();
    const lettuceRadioCheckbox_isClickable =
      await lettuceRadioCheckbox.isClickable();
    await expect(lettuceRadioCheckbox_isClickable).toEqual(true);

    const cabbageRadioCheckbox = await $('[value="cabbage"]');
    const cabbageRadioCheckbox_isEnabled =
      await cabbageRadioCheckbox.isEnabled();
    await expect(cabbageRadioCheckbox_isEnabled).toEqual(false);
    await expect(cabbageRadioCheckbox).toBeDisabled();
  });

  it("actions", async () => {
    await browser.url("/Actions/index.html");

    //drag & drop

    const elem = await $("[id='draggable']");
    const target = await $("[id='droppable']");
    await elem.dragAndDrop(target);

    //double click
    const elem2 = await $("#double-click");
    await elem2.doubleClick();

    //mouse over and click link
    await $(`//button[text()='Hover Over Me First!']`).moveTo(); //we move to one of three hover dropdowns
    const firstLink = await $(`(//*[text()='Link 1'])[1]`);
    await firstLink.click();
  });

  it("handling windows", async () => {
    await browser.url("https://webdriveruniversity.com/");
    await browser.newWindow("https://automationteststore.com/");

    let currentWindowTitle = await browser.getTitle();
    console.log(`>>Current Window Title: ${currentWindowTitle}`);
    await expect(browser).toHaveUrlContaining("automationteststore.com/");

    await browser.switchWindow("webdriveruniversity.com/");
    let parentWindowTitle = await browser.getTitle();
    console.log(`>>Parent Window Title: ${parentWindowTitle}`);
    await expect(browser).toHaveUrlContaining("webdriveruniversity.com/");

    await $("#contact-us").click();
    await browser.switchWindow("automationteststore");
    await browser.closeWindow();

    await browser.switchWindow("contactus");
    await browser.closeWindow();

    await browser.switchWindow("webdriveruniversi");
    console.log(await browser.getTitle());
  });

  it("iframes", async () => {
    await browser.url("/IFrame/index.html");
    const iframe = await $("#frame");
    await browser.switchToFrame(iframe);
    await $(`//*[text()='Our Products']`).click();

    //now we don't want to be in iframe anymore, let's switch window to our website
    await browser.switchToParentFrame();
  });

  it("alerts", async () => {
    await browser.url("/Popup-Alerts/index.html");

    await $("#button1").click();
    await browser.acceptAlert();

    await $("#button4").click();
    const alertText = await browser.getAlertText();
    await expect(alertText).toEqual("Press a button!");
    await browser.acceptAlert();
    await expect($("#confirm-alert-text")).toHaveText("You pressed OK!");

    await $("#button4").click();
    const alertText2 = await browser.getAlertText();
    await expect(alertText2).toEqual("Press a button!");
    await browser.dismissAlert();
    await expect($("#confirm-alert-text")).toHaveText("You pressed Cancel!");
  });

  it("file upload", async () => {
    await browser.url("/File-Upload/index.html");

    await $("#myFile").addValue(`${process.cwd()}//data//dummy_file.txt`);
    await $("#submit-button").click();
    const alertText = await browser.getAlertText();
    await expect(alertText).toEqual("Your file has now been uploaded!");
  });

  it("file upload - negative", async () => {
    await browser.url("/File-Upload/index.html");

    await $("#submit-button").click();
    const alertText = await browser.getAlertText();
    await expect(alertText).toEqual("You need to select a file to upload!");
  });

  it("JS execute", async () => {
    await browser.url("/Hidden-Elements/index.html");
    await browser.execute(() => {
      return document.getElementById("not-displayed").setAttribute("id", "");
    });

    await browser.execute(() => {
      return (document.body.style.backgroundColor = "tomato");
    });
  });
});
