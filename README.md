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

or run just test with @smoke tag for a smoke test

```bash
npm run autostore:smoke
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

There is also a possibility to run smoke test from CI/CD as a trigger dispatch.
