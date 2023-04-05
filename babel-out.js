"use strict";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var tree = {
  a: 'foo',
  b: 'bar',
  someOtherKey: 123
};
console.log(tree);
var a = tree.a,
  myB = tree.b,
  _tree$c = tree.c,
  c = _tree$c === void 0 ? 'hello' : _tree$c,
  _tree$d = tree.d,
  myD = _tree$d === void 0 ? 'toll' : _tree$d,
  mySpread = _objectWithoutProperties(tree, ["a", "b", "c", "d"]);
console.log(a, myB, c, myD, mySpread);
function foo(mya, _b) {
  return mya;
}
console.log(foo(1, 2));

