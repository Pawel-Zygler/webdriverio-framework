# webdriverio-framework

Run all automation test store suite:

```
npm run autostore
```

How to run single test? Go to root folder, type this to run login spec happy path

```
npm run lh
```

To run login spec unhappy path, type this in root folder

```
npm run luh
```

To run wiremock, go to root:

```
npm run wiremock
```

More scripts in package.js

LESSONS and things TODO:
bh = FireFox in bh for some reason does not click main category skincare - chrome ok
bh = Chrome sometimes have 'move target out of bounds' error gdzie przycisk jest poza ekranem
próbowałem juz 4-5 rozwiązań, ale tylko udalo sie zredukowac severity, ale czasem wpada blad nadal

SCENARIOS(todo):
Adapt testData and headers in tests
As a user I want to check if there are any sales - now
As a user I want to log in frm top menu login button
As a user I want to add size 7 shoes for Women.
As a distributor, I want to buy 10 000 books.
As a user I want to add 10 products QTY from subcategory page to Cart.
As a user I want to checkout one item.
As a user I want to checkout 10 items.

https://automationteststore.com/index.php?rt=product/category&path=43_47 - ten przycisk dodaje od razu do koszyka przedmioty, sprawdz czy sie updejtją

MEDIUM
gitgnore is missing some files to ignore from allure reports

ADVANCED
Set it up so tests run on 4 browsers and pass
Analyse Kibana integration for visualising data
Improve github workflow in CI, it actually passes 10/10 but still fails in actions

2023-06-22T15:01:58.980Z ERROR @wdio/utils:shim: Error [ERR_REQUIRE_ESM]: require() of ES Module /Users/pawel.zygler/Documents/webdriverio-framework/node_modules/expect-webdriverio/lib/index.js from /Users/pawel.zygler/Documents/webdriverio-framework/wdio.conf.js not supported.
[0-0] Instead change the require of index.js in /Users/pawel.zygler/Documents/webdriverio-framework/wdio.conf.js to a dynamic import() which is available in all CommonJS modules.
[0-0] at Object.newLoader [as .js] (/Users/pawel.zygler/Documents/webdriverio-framework/node_modules/pirates/lib/index.js:141:7)
[0-0] at Object.before (/Users/pawel.zygler/Documents/webdriverio-framework/wdio.conf.js:238:5)
[0-0] at file:///Users/pawel.zygler/Documents/webdriverio-framework/node_modules/@wdio/utils/build/shim.js:31:27
[0-0] at new Promise (<anonymous>)
[0-0] at file:///Users/pawel.zygler/Documents/webdriverio-framework/node_modules/@wdio/utils/build/shim.js:28:47
[0-0] at Array.map (<anonymous>)
[0-0] at executeHooksWithArgsShim (file:///Users/pawel.zygler/Documents/webdriverio-framework/node_modules/@wdio/utils/build/shim.js:28:33)
[0-0] at Runner.run (file:///Users/pawel.zygler/Documents/webdriverio-framework/node_modules/@wdio/runner/build/index.js:88:15)

CHANGELOG:
Implementing commands support reduced github execution time from 2:16s to 1:46s. 30s reduction. Or around 20%.

SCENARIOS(completed)
As a user I want to add item to basket
As a user I want to add items to basket
As a user I want to add multiple categories items to basket
As a user i want to atempt to add out of stock item to basket and I want to be informed about it if fails to add
As a user I want to login through left side dropdown
As a user I want to change currency
As a user I want to visit socials in new page
As a user I want to remind me login
As a user I want to remind me password
As a user I want to remind me password but fail to do so
As a user I want to login to site
As a user I want to login to site but fail
As a user I want to register user succesfully
As a user I want to register myself but fail
