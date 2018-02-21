# myx

Random JS utility stuff

## myx-contracts

Dead-simple, functional typing contracts.

## Usage

```js
// without type checking
const add = (n1, n2) => n1 + n2;

// with type checking
const T = require('myx.contracts');
const add = (n1, n2) => T.number(n1) && T.number(n2) && (n1+n2);
```
