const tree = {
  a: 'foo',
  b: 'bar',
  someOtherKey: 123,
};

console.log(tree);

const { a, b: myB, c = 'hello', d: myD = 'toll', ...mySpread } = tree;

console.log(a, myB, c, myD, mySpread);

function foo(mya, _b) {
  return mya;
}

console.log(foo(1, 2));
