const assert = require('assert');
const main = require('..');

describe('img-area-selector', () => {
  it('returns with placeholder', () => {
    assert.equal(main(), 'img-area-selector');
  });
});
