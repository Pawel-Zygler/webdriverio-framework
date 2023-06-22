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

SCENARIOS
As a user I want to check if there are any sales.
As a user I want to add size 7 shoes for Women.
As a distributor, I want to buy 10 000 books.
As a user I want to add 10 products QTY from subcategory page to Cart.
As a user I want to checkout one item.
As a user I want to checkout 10 items.

https://automationteststore.com/index.php?rt=product/category&path=43_47 - ten przycisk dodaje od razu do koszyka przedmioty, sprawdz czy sie updejtją

MEDIUM
gitgnore is missing some files to ignore from allure reports

HARD
Set it up so tests run on 4 browsers and pass
Analyse Kibana integration for visualising data
Improve github workflow in CI, it actually passes 10/10 but still fails in actions

CHANGELOG:
Implementing commands support reduced github execution time from 2:16s to 1:46s. 30s reduction. Or around 20%.

Completed stories:
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
