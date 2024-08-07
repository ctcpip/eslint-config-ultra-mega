const assert = require('node:assert');

module.exports = function test(ultraMegaConfig) {
  assert.strictEqual(ultraMegaConfig[1].rules.ultraMegaConfig, 0);

  // make sure expected globals do not trigger eslint/no-undef
  try {
    noop(require); // from commonjs
  }
  catch (e) {
    noop(e);
  }
};

function noop() {
  // the function!  it does nothing!
}
