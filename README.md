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



LESSONS and things TODO:
use waitThenClick command in more places


allure reports opening broke
gitgnore is missing some files to ignore from allure reports
home page open could be abstracted?
some commands from page objects could definitely be abstracted into utils
