const assert = require('node:assert');

module.exports = function test(ultraMega) {
  assert.strictEqual(ultraMega.config[1].rules.ultraMegaConfig, 0);
  assert.strictEqual(ultraMega.globals.commonjs.require, false);
  assert.strictEqual(typeof ultraMega.globals.node.require, 'undefined');

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
