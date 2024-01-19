Webdriver.io + js + node.js

www.automationteststore.com - sut

Go to root and install dependencies:

```bash
npm i
```

Run suite:

```bash
npm run autostore
```

To run single test:

```bash
npx wdio --spec test/specs/automation-test-store/checkout/checkout-happy.spec.js
```

Run wiremock

```bash
npm run wiremock
```

To run wiremock export path to where the wiremock jar is located. Such as:

```bash
export WIREMOCK_PATH="/Users/jondoe/Documents"
```

To display report run tests locally:

```bash
npm run report
```
