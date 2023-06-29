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
<https://github.com/badeball/cypress-cucumber-preprocessor/blob/master/docs/faq.md#i-get-cannot-find-module-badeballcypress-cucumber-preprocessoresbuild> and change the import statement in cypress.config.ts to import * as createBundler from "@bahmutov/cypress-esbuild-preprocessor";

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
cy.get('a#contact-us').invoke('removeAttr','target').click()
```
