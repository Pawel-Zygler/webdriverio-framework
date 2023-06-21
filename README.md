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
FLAKY TEST add items happy - out of bounds bug

add item with certai size
add items of certain numbers (through many sources)
https://automationteststore.com/index.php?rt=product/category&path=43_47 - ten przycisk dodaje od razu do koszyka przedmioty, sprawdz czy sie updejtją

MEDIUM
is total price same as price?
gitgnore is missing some files to ignore from allure reports
kontynuuj test z login z 4 miejsca na stronie, klikając w podwójny dropdown - trudne

HARD
Set it up so tests run on 40 browsers
Analyse Kibana integration
Improve github workflow in CI, it actually passes 10/10 but still fails in actions

CHANGELOG:
Implementing commands support reduced github execution time from 2:16s to 1:46s. 30s reduction. Or around 20%.
