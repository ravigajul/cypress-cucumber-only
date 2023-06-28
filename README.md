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
