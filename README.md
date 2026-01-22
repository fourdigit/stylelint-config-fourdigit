# @fourdigit/stylelint-config-fourdigit

[![GitHub license](https://img.shields.io/github/license/fourdigit/stylelint-config-fourdigit)](https://github.com/fourdigit/stylelint-config-fourdigit/blob/master/LICENSE)

> The shareable stylelint config for Fourdigit production.

Extends

- [`stylelint-config-standard-scss`](https://github.com/stylelint-scss/stylelint-config-standard-scss)
- [`stylelint-config-recess-order`](https://github.com/stormwarning/stylelint-config-recess-order)

Plugins

- [`@stylistic/stylelint-plugin`](https://github.com/stylelint-stylistic/stylelint-stylistic)

## Requirements

- Node.js >= 18.12.0
- stylelint >= 16.8.0

## Installation

```bash
# peerDependencies
npm i -D stylelint stylelint-config-standard-scss stylelint-config-recess-order @stylistic/stylelint-plugin

npm i -D @fourdigit/stylelint-config-fourdigit
```

## Usage

If you've installed `@fourdigit/stylelint-config-fourdigit` locally within your project, just set your stylelint config to:

`.stylelintrc.json`

```json
{
  "extends": "@fourdigit/stylelint-config-fourdigit"
}
```

`stylelint.config.js`

```js
module.exports = {
  extends: ["@fourdigit/stylelint-config-fourdigit"],
};
```

## Using on Vscode extension

If you use [`vscode-stylelint`](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint#migrating-from-vscode-stylelint-0.xstylelint-13.x) extension.
Add options on workspace or user settings

`.vscode/settings.json`

```json
{
  "css.validate": false,
  "less.validate": false,
  "scss.validate": false,
  "stylelint.validate": ["css", "scss"]
}
```

## Migration from v4.x

v5.0.0 upgrades to stylelint 16 and introduces breaking changes:

### Breaking Changes

1. **Node.js requirement**: >= 18.12.0
2. **stylelint version**: >= 16.8.0
3. **New peer dependency**: `@stylistic/stylelint-plugin` is now required
4. **Removed**: `stylelint-config-prettier` (no longer needed)
5. **Removed rule**: `selector-no-qualifying-type` (removed from stylelint)

### Stylistic Rules

Stylistic rules (indentation, quotes, spacing, etc.) have been migrated to `@stylistic/stylelint-plugin`. The behavior remains the same.

### Update Steps

```bash
# Remove old packages
npm uninstall stylelint-config-prettier

# Update peer dependencies
npm i -D stylelint@^16.8.0 stylelint-config-standard-scss@^13.0.0 stylelint-config-recess-order@^4.6.0 @stylistic/stylelint-plugin@^3.0.0

# Update this package
npm i -D @fourdigit/stylelint-config-fourdigit@^5.0.0
```
