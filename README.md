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
java -jar wiremock-standalone-2.35.0.jar
```


More scripts in package.js



TODO:
1. allure reports opening broke
2. gitgnore is missing some files to ignore from allure reports
3. add visiting home page to base page
4. add git password to not type it each time, possibly change it from being the pc password




5. Maybe add wiremock layer to mock response of succesfully registered user, this wiremock is possibly integrated incorrectly, having a file in repo to run? Not sure.
