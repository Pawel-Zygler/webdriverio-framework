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
As a user I want to login through left side dropdown

HARD
Set it up so tests run on 4 browsers
Analyse Kibana integration
Improve github workflow in CI, it actually passes 10/10 but still fails in actions

CHANGELOG:
Implementing commands support reduced github execution time from 2:16s to 1:46s. 30s reduction. Or around 20%.
