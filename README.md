# understanding-js-destructuring-via-babel
What does js destructuring expand into? Let's see what babel does :)

## Spread operator

I like to see this line

```
mySpread = _objectWithoutProperties(tree, ["a", "b", "c", "d"]);
```

in the babel output :)

https://github.com/kisp/understanding-js-destructuring-via-babel/blob/15f0c004b30ae731df892b1280f3aacd69ab6287/babel-out.js#L46
