const assert = require('assert');
const capitalizeFirstLetters = require('../capitalizeFirstLetters');

describe('capitalizeFirstLetters', () => {
  it('is a function accepting one argument', () => {
    assert.strictEqual(typeof capitalizeFirstLetters, 'function');
    assert.strictEqual(capitalizeFirstLetters.length, 1);
  });

  it('tranforms javascript correctly', () => {
    assert.strictEqual(capitalizeFirstLetters('javaScript'), 'JavaScript');
  });

  it('tranforms javascript is awesome correctly', () => {
    assert.strictEqual(
      capitalizeFirstLetters('javaScript is awesome'),
      'JavaScript Is Awesome'
    );
  });

  it('transforms a letter correctly', () => {
    assert.strictEqual(capitalizeFirstLetters('z'), 'Z');
  });

  it('returns an empty string', () => {
    assert.strictEqual(capitalizeFirstLetters(''), '');
  });
});
