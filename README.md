Test store framework done using: node.js, webdriver.io and js

Website under test: automationteststore.com

Go to root and install dependencies:

```bash
npm i
```

To run single test, login happy path in this case:

```bash
npm run lh
```

If you want to enable/disable headless, comment out browser setting in wdio.conf file.

To run the entire Automation Test Store test suite, use the following command:

```bash
npm run autostore
```

WireMock
To run WireMock, execute the following command:

```bash
npm run wiremock
```
