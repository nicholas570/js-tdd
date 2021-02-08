const assert = require('assert');
const Rectangle = require('../Rectangle');

describe('Rectangle', () => {
  it('checks if rectangle is square', () => {
    assert.strictEqual(new Rectangle(10, 10).isSquare(), true);
    assert.strictEqual(new Rectangle(15, 10).isSquare(), false);
  });

  it('checks the aera', () => {
    assert.strictEqual(new Rectangle(3, 14).getArea(), 42);
  });

  it('checks the perimeter', () => {
    assert.strictEqual(new Rectangle(3, 14).getPerimeter(), 34);
  });
});
