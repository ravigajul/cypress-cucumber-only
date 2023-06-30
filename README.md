# cypress-cucumber-only

## Install vs code extensions

1. Cucumber(Gherkin) Full support
2. Material Icon Theme
3. Prettier - Code formatter
   Reload the window after installation view->command Palette - > Developer:ReloadWindow
   Right click format document with prettier - code formatter

## Install cypress

```javascript
npm install --save-dev cypress@12.14.0
```

## install cypress-cucumber-preprocessor

```javascript
npm install --save-dev @badeball/cypress-cucumber-preprocessor
```

## Fix the error with esbuild

Add the below object in tsconfig.json under compiler option
<https://github.com/badeball/cypress-cucumber-preprocessor/blob/master/docs/faq.md#i-get-cannot-find-module-badeballcypress-cucumber-preprocessoresbuild> and change the import statement in cypress.config.ts to import \* as createBundler from "@bahmutov/cypress-esbuild-preprocessor";

```javascript
"paths": {
        "@badeball/cypress-cucumber-preprocessor/*": ["./node_modules/@badeball/cypress-cucumber-preprocessor/dist/subpath-entrypoints/*"]
      }
```

## Handle unknown .ts extension error

```javascript
npm install ts-loader --save-dev
```

## Setup Cucumber on VSCode

file->settings->cucumberautocomplete:Custom Parameters->EditinSettings.json

```json
Settings.json
{
    "files.exclude": {
        "**/.classpath": true,
        "**/.project": true,
        "**/.settings": true,
        "**/.factorypath": true
    },
    "editor.suggestSelection": "first",
    "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
    "redhat.telemetry.enabled": true,
    "javascript.updateImportsOnFileMove.enabled": "always",
    "files.autoSave": "afterDelay",
    "cucumberautocomplete.customParameters": [
    ],
    "cucumberautocomplete.strictGherkinCompletion": true,
    "cucumberautocomplete.steps": ["cypress/support/step_definitions/*.js"],
     "workbench.iconTheme": "material-icon-theme"
}
```

Update package.json

```json
 "cypress-cucumber-preprocessor":{
    "stepDefinitions":"cypress/support/step_definitions/**/*.js"
  }
```

## If cypress commands intellisense doesn't work

add below as the first line in .js file to see the cypress commands intellisense

```javascript
///<reference types="cypress"/>
```

## Open the page in same window instead of new window on clicking a link

```javascript
cy.get("a#contact-us").invoke("removeAttr", "target").click();
```

## Assertion for availability of a text

```javascript
cy.get("div#contact_reply h1").should(
  "have.text",
  "Thank You for your Message!"
);
```

## Assertion for contains text

```javascript
cy.get("body").should("contain.text", "Error");
or;
cy.get("body").contains("ErrorError: all fields are required");
```

## Cucumber Expressions

Regular expressions : <https://github.com/cucumber/cucumber-expressions#readme>

## Identifying multiple elements

Use comma seperated css selectors to identify the applicable element. This is like using an "OR" condition in xpath. In the below example 'body' is used when there is error and 'div#contact_reply h1' when the flow is successfull on the webdriveruniversity page

```javascript
cy.get("body,div#contact_reply h1").contains(message);
```

## Tag based execution

```javascript
npx cypress run -e TAGS='@login' --headed
npx cypress run -e TAGS='@smoke or @sanity' --headed
npx cypress run -e TAGS='(@login or @contact-us) and not @smoke' --headed
npx cypress run cypress/e2e/*.feature --headed
```

## Run features from a specific folder

```javascript
cypress run --headed --browser chrome --spec 'cypress/e2e/*.feature'
```

## Cucumber HTML Reports

Add the below configuration to package.json. The report automatically add a screenshot when something fails. Click on the failure to see the log and screenshot of the execution

```json
"cypress-cucumber-preprocessor": {
    "stepDefinitions": "cypress/support/step_definitions/**/*.js",
    "html":{
      "enabled":true,
      "output":"cypress/reports/cucumber-html/cucumber-report.html"
    }
  }
```

Note: The html report will not be generated if the script is triggered by clicking on the feature file in cypress runner. This needs to be executed using cypress run commands directly or through scripts in package.json. cucumber-messages.ndjson will be created in root location that is the basis for this report

In order to have this generated in a custom location make the below changes to package.json

```json
"cypress-cucumber-preprocessor": {
    "stepDefinitions": "cypress/support/step_definitions/**/*.js",
    "html":{
      "enabled":true,
      "output":"cypress/reports/cucumber-html/cucumber-report.html"
    },
    "messages":{
      "enabled":true,
      "output":"cypress/reports/cucumber-ndjson/cucumber-messages.ndjson"
    }
  }
```

## Cucumber JSON reports

1. This is the file that CI sytems like jenkins uses to generate the reports.
2. Install the cucumber json formatter from the below <https://github.com/cucumber/json-formatter/releases/tag/v19.0.0>
3. Change the file name to cucumber-json-formatter.exe
4. Set the path to downloaded file location
5. Set PATH : C:\Users\ravi\Downloads\cypress-cucumber-only\
6. Make the below changes to package.json

```json
 "json": {
      "enabled": true,
      "formatter": "cypress-json-formatter",
      "output": "cypress/reports/cucumber-json/cucumber-report.json"
    }
```

## Multiple Cucumber Html reports

<https://www.npmjs.com/package/multiple-cucumber-html-reporter>

```javascript
npm install multiple-cucumber-html-reporter --save-dev
```

1. Create cucumber-html-report.js at root location

```javascript
const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "cypress/reports/cucumber-json/",
  reportPath: "cypress/reports/html-multi-report/",
  ignoreBadJsonFile: true,
  displayReportTime: true,
  displayDuration: true,
  metadata: {
    device: "Local test machine.",
    platform: { name: "Windows", version: "11" },
  },
});
```

2. Run the npm script for executing the test
3. Run the .js file created above using node <test.js>
   $. The report should be generated.
