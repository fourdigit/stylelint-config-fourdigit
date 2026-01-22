'use strict';
/**
 * @type {import('stylelint').Config}
 */
const stylelintConfig = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recess-order',
  ],
  plugins: [
    '@stylistic/stylelint-plugin',
    'stylelint-order',
  ],
  ignoreFiles: [
    '**/node_modules/**',
  ],
  rules: {
    // Core rules
    'at-rule-no-unknown': null,
    'color-hex-length': 'long',
    'media-feature-range-notation': null,
    'color-named': 'never',
    'comment-empty-line-before': 'never',
    'comment-whitespace-inside': 'always',
    'font-family-name-quotes': 'always-where-recommended',
    'function-url-quotes': 'always',
    'media-feature-name-no-vendor-prefix': true,
    'property-no-vendor-prefix': true,
    'rule-empty-line-before': ['always', { ignore: ['first-nested', 'after-comment'] }],
    'selector-attribute-quotes': 'always',
    'selector-no-vendor-prefix': true,
    'selector-pseudo-element-colon-notation': 'single',
    'value-no-vendor-prefix': true,

    // SCSS rules
    'scss/at-rule-no-unknown': true,

    // Stylistic rules (migrated to @stylistic/stylelint-plugin)
    '@stylistic/color-hex-case': 'lower',
    '@stylistic/declaration-block-trailing-semicolon': 'always',
    '@stylistic/declaration-colon-space-after': 'always-single-line',
    '@stylistic/declaration-colon-space-before': 'never',
    '@stylistic/indentation': 2,
    '@stylistic/media-feature-colon-space-after': 'never',
    '@stylistic/media-feature-colon-space-before': 'never',
    '@stylistic/media-feature-parentheses-space-inside': 'never',
    '@stylistic/selector-attribute-brackets-space-inside': 'never',
    '@stylistic/selector-attribute-operator-space-after': 'never',
    '@stylistic/selector-attribute-operator-space-before': 'never',
    '@stylistic/selector-combinator-space-after': 'always',
    '@stylistic/selector-pseudo-class-parentheses-space-inside': 'never',
    '@stylistic/string-quotes': 'single',
  }
};
module.exports = stylelintConfig;
