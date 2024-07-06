import allure from "allure-commandline";
import fs from "fs";
import commands from "./utils/commands.js";
import path from "path";

const downloadFolder = path.resolve(__dirname, "Downloads");

const headless = process.env.HEADLESS === "true";

export const config = {
  runner: "local",
  exclude: [],
  suites: {
    smoke: ["test/specs/automation-test-store/add-items-to-cart-happy.spec.js"],
    autostore: ["test/specs/automation-test-store/**/**/*.spec.js"],
  },
  maxInstances: 10,
  capabilities: [
    {
      maxInstances: 2,
      browserName: "chrome",
      acceptInsecureCerts: true,
      "goog:chromeOptions": headless
        ? {
            args: [
              "--headless",
              "--disable-gpu",
              "--start-maximize",
              "--window-size=1920,1280",
            ],
            prefs: {
              "download.default_directory": downloadFolder,
              "download.prompt_for_download": false,
              "download.directory_upgrade": true,
              "safebrowsing.enabled": true,
            },
          }
        : {
            args: ["--start-maximize", "--window-size=1920,1280"],
            prefs: {
              "download.default_directory": downloadFolder,
              "download.prompt_for_download": false,
              "download.directory_upgrade": true,
              "safebrowsing.enabled": true,
            },
          },
      timeouts: {
        pageLoad: 30000, //30 seconds
      },
    },
  ],

  logLevel: "info",

  bail: 0,
  baseUrl: "https://automationteststore.com",
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ["chromedriver", "geckodriver"],
  framework: "mocha",
  specFileRetries: 0,
  reporters: [
    "spec",
    [
      "allure",
      {
        outputDir: "allure-results",
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
      },
    ],
  ],

  mochaOpts: {
    ui: "bdd",
    timeout: 600000,
    retry: 0,
  },

  onPrepare: function () {
    if (fs.existsSync("./allure-results")) {
      fs.rmSync("./allure-results", { recursive: true });
    }
  },

  beforeCommand: function () {
    Object.keys(commands).forEach((key) => {
      browser.addCommand(key, commands[key]);
    });
  },

  afterTest: async function ({ error }) {
    if (error) {
      await browser.takeScreenshot();
    }
  },

  after: async function () {
    await browser.pause(1000);
  },

  onComplete: function () {
    const reportError = new Error("Could not generate Allure report");
    const generation = allure(["generate", "allure-results", "--clean"]);
    return new Promise((resolve, reject) => {
      const generationTimeout = setTimeout(() => reject(reportError), 15000);

      generation.on("exit", function (exitCode) {
        clearTimeout(generationTimeout);

        if (exitCode !== 0) {
          return reject(reportError);
        }

        console.log("Allure report successfully generated");
        resolve();
      });
    });
  },
};
