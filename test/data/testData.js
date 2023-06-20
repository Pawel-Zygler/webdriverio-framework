import dataGenerator from "../../utils/data-generator";

const testData = {
  user: {
    firstName: "pawel",
    lastName: "tester",
    email: "pawsel@tester.pl",
    telephone: 12345678,
    fax: "123456b",
    addressOne: "ul. Portowa",
    city: "Gdynia",
    regionState: "Angus",
    zipCode: 12345678,
    country: "United Kingdom",
    loginName: "pawel233333",
    password: "pawelpawell",
    passwordConfirm: "pawelpawell",
  },

  registeredUser: {
    loginName: "autoTester",
    password: "autoTester",
    email: "pawel.zygler2@yandex.com",
    lastName: "zygler",
  },
  userInvalidMin: {
    firstName: "",
    lastName: "",
    email: "padsadsa@ddsadsa",
    telephone: dataGenerator.generateRandomString(2, "numeric"),
    fax: dataGenerator.generateRandomString(1, "alphanumeric"),
    addressOne: dataGenerator.generateRandomString(2),
    city: dataGenerator.generateRandomString(2),
    regionState: " --- Please Select --- ",
    zipCode: dataGenerator.generateRandomString(2),
    country: " --- Please Select --- ",
    loginName: dataGenerator.generateRandomString(4, "alphabetic"),
    password: "paw",
    passwordConfirm: "pawel2",
  },

  userInvalidMax: {
    firstName: dataGenerator.generateRandomString(33, "alphabetic"),
    lastName: dataGenerator.generateRandomString(33, "alphabetic"),
    email: "padsadsa@ddsadsa",
    telephone: dataGenerator.generateRandomString(33, "numeric"),
    fax: dataGenerator.generateRandomString(150, "alphanumeric"),
    addressOne: dataGenerator.generateRandomString(129),
    city: dataGenerator.generateRandomString(129),
    regionState: " --- Please Select --- ",
    zipCode: dataGenerator.generateRandomString(11),
    country: " --- Please Select --- ",
    loginName: dataGenerator.generateRandomString(65, "alphabetic"),
    password: dataGenerator.generateRandomString(21, "alphabetic"),
    passwordConfirm: "pawel2",
  },

  registerValidationErrors: {
    firstName: "First Name must be between 1 and 32 characters!",
    lastName: "Last Name must be between 1 and 32 characters!",
    email: "Email Address does not appear to be valid!",
    telephone: "Telephone must be between 3 and 32 characters!",
    fax: "Fax must be between 3 and 32 characters!", //this is fake message
    addressOne: "Address 1 must be between 3 and 128 characters!",
    city: "Address 1 must be between 3 and 128 characters!",
    regionState: "Please select a region / state!",
    zipCode: "Zip/postal code must be between 3 and 10 characters!",
    country: "Please select a region / state!",
    loginName:
      "Login name must be alphanumeric only and between 5 and 64 characters!",
    loginNameTaken:
      "This login name is not available. Try different login name!",
    password: "Password must be between 4 and 20 characters!",
    passwordConfirm: "Password confirmation does not match password!",
  },

  failedValidationAboveForm: {
    privacyPolicy: "Error: You must agree to the Privacy Policy!",
    incorrectLoginOrPassword: "Error: Incorrect login or password provided.",
    noRecords:
      "Error: No records found matching information your provided, please check your information and try again!",
    emailNotProvided:
      "Error: The Email address was not provided or not found in our records, please try again!",
    noLoginProvided:
      "Error: The Login name was not provided or not found in our records, please try again!",
    noRecordsMatched:
      "Error: No records found matching information your provided, please check your information and try again!",
    noLastNameProvided:
      "Error: The Last name was not provided or not found in our records, please try again!",
  },

  successValidationAboveForm: {
    resetLinkSent:
      "Success: Password reset link has been sent to your e-mail address.",
    loginNameSent:
      "Success: Your login name reminder has been sent to your e-mail address.",
  },

  currency: {
    pound: "£ Pound Sterling",
    euro: "€ Euro",
    dollar: "$ US Dollar",
    poundSymbol: "£",
    euroSymbol: "€",
    dollarSymbol: "$",
  },

  socialMedia: {
    fb: "Facebook",
    tt: "Twitter",
    li: "Linkedin",
    fburl: "https://www.facebook.com/",
    tturl: "https://twitter.com/",
    liurl: "https://www.linkedin.com/",
  },

  categories: {
    home: "Home",
    apparel: {
      name: "Apparel & accessories",
      subcategoryTshirts: "T-shirts",
      subcategoryShoes: "Shoes",
      productOne:
        "Designer Men Casual Formal Double Cuffs Grandad Band Collar Shirt Elegant Tie",
      productTwo: "Casual 3/4 Sleeve Baseball T-Shirt",
      productThree: "Ruby Shoo Womens Jada T-Bar",
    },
    skincare: {
      name: "Skincare",
      productOne: "creme precieuse nuit 50ml",
      productTwo: "total moisture facial cream",
    },

    books: {
      name: "Books",
      subcategoryPaperback: "Paperback",
      productOne: "Paper Towns by John Green",
    },

    fragrance: {
      name: "Fragrance",
      subcategoryMen: "Men",
      productOne: "Euphoria Men Intense Eau De Toilette Spray",
    },
    men: {
      name: "Men",
      subcategoryMen: "Body & Shower",
      productOne: "Men+Care Active Clean Shower Tool",
      productOutOfStock:
        "Lancome Slimissime 360 Slimming Activating Concentrate Unisex Treatment",
    },
  },
};

module.exports = testData;
