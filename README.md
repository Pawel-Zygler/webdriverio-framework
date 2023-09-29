Test store framework done using: node.js, webdriver.io and js

Website under test: automationteststore.com

Go to root and install dependencies:

```bash
npm i
```

To run single test:

```bash
npx wdio --spec test/specs/automation-test-store/checkout/checkout-happy.spec.js
```

(check [package.json](package.json)) for more single spec shortcuts.

If you want to enable/disable headless, comment out browser setting in wdio.conf file.

To run the entire Automation Test Store test suite, use the following command:

```bash
npm run autostore
```

Run wiremock

```bash
npm run wiremock
```

To run wiremock export path to where the wiremock jar is located. Such as:

```bash
export WIREMOCK_PATH="/Users/jondoe/Documents"
```

To display report run tests locally and:

```bash
npm run report
```
