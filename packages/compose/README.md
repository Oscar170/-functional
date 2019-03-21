# @functional/compose

> Compose function.

This package contains the compose function. It receives X functions to create a new function.

When called, this new function iterates over the list of functions, and applies the function result to the next function, until it doesn't have any more, then returns the value.

The direction of the iteration is from the last function in the params to the first (back to front).

```
// a('test') -> 'TEST'
func a = (text) -> text.toUpperCase()

// b({ name: 'compose' }) -> 'compose'
func b = (item) -> item.name

'COMPOSE' === a(b({ name: 'compose' })) === compose(a, b)({ name: 'compose' })
```

## Install

Using npm:

```sh
npm install @functional/compose
```

or using yarn:

```sh
yarn add @functional/compose
```
