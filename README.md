@fourdigit/stylelint-config-fourdigit
=====================================

> The shareable stylelint config for Fourdigit production.

Extends [`stylelint-config-standard`](https://github.com/stylelint/stylelint-config-standard) and uses following plugins.

* [`stylelint-order`]('https://github.com/hudochenkov/stylelint-order')
* [`stylelint-scss`]('https://github.com/kristerkari/stylelint-scss')

Installation
------------

```bash
// peerDependencies
npm i -D stylelint stylelint-config-prettier stylelint-config-standard stylelint-order stylelint-scss

npm i -D @fourdigit/stylelint-config-fourdigit
```


Usage
-----

If you've installed `@fourdigit/stylelint-config-fourdigit` locally within your project, just set your stylelint config to:

```json
{
  "extends": "@fourdigit/stylelint-config-fourdigit"
}
```
