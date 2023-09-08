Automation tests for Automation Test Store in js and webdriver.io, node.js.

Website under test: automationteststore.com

Go to root and install dependencies:

```bash
npm i
```

enable/disable headless in wdio.conf file
To run the entire Automation Test Store test suite, use the following command:

```bash
npm run autostore
```

Run Specific Tests
Happy Path Login Test
To run only the login spec for the happy path:

```bash run login happy path test
npm run lh
```

Unhappy Path Login Test
To run only the login spec for the unhappy path:

```bash
npm run luh
```

WireMock
To run WireMock, execute the following command:

```bash
npm run wiremock
```
