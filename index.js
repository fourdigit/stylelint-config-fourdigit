'use strict';
/**
 * @type {import('stylelint').Config}
 */
const stylelintConfig = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier'
  ],
  plugins: [
    'stylelint-order',
    'stylelint-scss'
  ],
  rules: {
    'at-rule-no-unknown': null,
    'color-hex-case': 'lower',
    'color-hex-length': 'long',
    'color-named': 'never',
    'comment-empty-line-before': 'never',
    'comment-whitespace-inside': 'always',
    'declaration-block-trailing-semicolon': 'always',
    'declaration-colon-space-after': 'always-single-line',
    'declaration-colon-space-before': 'never',
    'font-family-name-quotes': 'always-where-recommended',
    'function-url-quotes': 'always',
    'indentation': 2,
    'media-feature-colon-space-after': 'never',
    'media-feature-colon-space-before': 'never',
    'media-feature-name-no-vendor-prefix': true,
    'media-feature-parentheses-space-inside': 'never',
    'media-feature-range-operator-space-after': 'never',
    'media-feature-range-operator-space-before': 'never',
    'number-leading-zero': 'never',
    'order/order': ['custom-properties', 'declarations'], // Sort alphabetically
    'order/properties-alphabetical-order': true,
    'property-no-vendor-prefix': true,
    'rule-empty-line-before': ['always', { ignore: ['first-nested', 'after-comment'] }],
    'scss/at-rule-no-unknown': true,
    'selector-attribute-brackets-space-inside': 'never',
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-operator-space-before': 'never',
    'selector-attribute-quotes': 'always',
    'selector-combinator-space-after': 'always',
    'selector-no-qualifying-type': true,
    'selector-no-vendor-prefix': true,
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'selector-pseudo-element-colon-notation': 'single',
    'string-quotes': 'single',
    'value-no-vendor-prefix': true,
  }
};
module.exports = stylelintConfig;
