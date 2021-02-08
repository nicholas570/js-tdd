const assert = require('assert');

// WRITE THE ACTUAL FUNCTION HERE

const capitalizeFirstLetters = (string) => {
  if (string.length > 0) {
    const testArr = string.split(' ');
    const capitalized = testArr.map(
      (word) => word.charAt(0).toUpperCase() + word.substring(1)
    );
    return capitalized.join(' ');
  }
  return '';
};

// Check that capitalizeFirst is a function
assert.strictEqual(typeof capitalizeFirstLetters, 'function');

// Check that capitalizeFirst accepts one argument
assert.strictEqual(capitalizeFirstLetters.length, 1);

// Check that capitalizeFirst transforms javaScript correctly
assert.strictEqual(capitalizeFirstLetters('javaScript'), 'JavaScript');

// Check that capitalizeFirst transforms javaScript is awesome correctly
assert.strictEqual(
  capitalizeFirstLetters('javaScript is awesome'),
  'JavaScript Is Awesome'
);

// Check that it works for a 1-character string
assert.strictEqual(capitalizeFirstLetters('z'), 'Z');

// Check that it works for an empty string
assert.strictEqual(capitalizeFirstLetters(''), '');
