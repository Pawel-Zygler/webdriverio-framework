# webdriverio-framework

Go to root and

```
npm i
```

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

SCENARIOS(todo):
Add deleting items from cart to other tests to unflaky them
https://automationteststore.com/index.php?rt=product/category&path=43_47 - dodaj do koszyka za pomocą tego przycisku and validate items are in top cart

https://automationteststore.com/index.php?rt=product/category&path=36_39 - call to order btn test

As a user I want to complete checkout as a guest with different shipping address
As a user I want to checkout 10 items.
As a user I want to add 10 products QTY from subcategory page to Cart.
easy or later
As a user I want to add a product from latest products (home page, item page)
As a user i want to see breadcrumbs whereever I go
As a distributor, I want to buy 10 000 books.

MEDIUM
Implement sessions correctly, so test below can be independent from each other, then verify if passes

ADVANCED
Set it up so tests run on 4 browsers and pass
Analyse Kibana integration for visualising data
Improve github workflow in CI, it actually passes 10/10 but still fails in actions
Promise all dla rh - dla duzej ilosc async/await

CHANGELOG and NOTES:
Implementing commands support reduced suite execution time from 2:16s to 1:46s. 30s reduction or around 20%.
'move to out of bounds' issue is often fixed by npm i

SCENARIOS(completed)
As a user I want to add item to basket
As a user I want to add items to basket
As a user I want to add multiple categories items to basket
As a user i want to atempt to add out of stock item to basket and I want to be informed about it if fails to add
As a user I want to login through all locations
As a user I want to change between 3 currencies
As a user I want to visit socials in new page
As a user I want to remind me login
As a user I want to remind me password
As a user I want to remind me password but fail to do so
As a user I want to login to site
As a user I want to login to site but fail
As a user I want to register user succesfully
As a user I want to register myself but fail
As a user I want to log in from top menu Account button
As a user I want to check if there are any sales
As a user I want to add size 40 shoe
As a logged in user I want to go to checkout from all locations
As a logged in user I want to checkout item and go to invoice page
As a guest user I want to checkout one item and log in during checkout
As a user I want to complete checkout as a guest
