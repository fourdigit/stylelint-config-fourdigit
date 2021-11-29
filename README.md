@fourdigit/stylelint-config-fourdigit
=====================================

> The shareable stylelint config for Fourdigit production.

Extends
- [`stylelint-config-standard-scss`](https://github.com/stylelint-scss/stylelint-config-standard-scss)
- [`stylelint-config-prettier`](https://github.com/prettier/stylelint-config-prettier)
- [`stylelint-config-recess-order`](https://github.com/stormwarning/stylelint-config-recess-order)

Installation
------------

```bash
// peerDependencies
npm i -D stylelint stylelint stylelint-config-prettier stylelint-config-standard-scss stylelint-config-recess-order

npm i -D @fourdigit/stylelint-config-fourdigit
```


Usage
-----

If you've installed `@fourdigit/stylelint-config-fourdigit` locally within your project, just set your stylelint config to:

`.stylelintrc.json`
```json
{
  "extends": "@fourdigit/stylelint-config-fourdigit"
}
```
`.stylelintrc.js`
```js
module.exports = {
  {
    extends: ["@fourdigit/stylelint-config-fourdigit"]
  }
}
```

Using on Vscode extension
-------------------------

If you use [`vscode-stylelint`](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint#migrating-from-vscode-stylelint-0.xstylelint-13.x) extension.
Add options on workspace or user settings

`.vscode/settings.json`
```
{
  "css.validate": false,
  "less.validate": false,
  "scss.validate": false,
  "stylelint.validate": ["css", "scss"],
}
```
