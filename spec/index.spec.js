/* global describe, it, expect, beforeEach */

'use strict';

const config = require('../');
const fs = require('fs');
const path = require('path');
const stylelint = require('stylelint');

const validCss = fs.readFileSync(path.resolve(__dirname, './mocks/valid.css'), 'utf-8');
const invalidCss = fs.readFileSync(path.resolve(__dirname, './mocks/invalid.css'), 'utf-8');

describe('valid css', () => {
  let result;

  beforeEach(() => {
    result = stylelint.lint({
      code: validCss,
      config
    })
  });

  it('did not error', () => {
    return result.then(data => expect(data.errored).toBeFalsy());
  });

  it('flags no warnings', () => {
    return result.then(data => expect(data.results[0].warnings).toHaveLength(0));
  })
});

describe('invalid css', () => {
  let result;

  beforeEach(() => {
    result = stylelint.lint({
      code: invalidCss,
      config
    })
  });

  it('did error', () => {
    return result.then(data => expect(data.errored).toBeTruthy());
  });

  it('flags warnings', () => {
    return result.then(data => expect(data.results[0].warnings.length).toBeGreaterThan(0));
  });
});
