Webdriver.io + js + node.js

www.automationteststore.com - sut

Go to root and install dependencies:

```bash
npm i
```

Run suite:

```bash
npm run autostore:headless
```

```bash
npm run autostore:headed
```

```bash
npm run autostore:smoke
```

To run single test:

```bash
npx wdio --spec test/specs/automation-test-store/checkout/checkout-happy.spec.js
```

To display report run tests locally:

```bash
npm run report
```

There is also a possibility to run smoke test from CI/CD as a trigger dispatch.
