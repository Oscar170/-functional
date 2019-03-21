# @functional/pipe

> Pipe function.

This package contains the pipe function. It receives X functions to create a new function.

When called, this new function iterates over the list of functions, and applies the function result to the next function, until it doesn't have any more, then returns the value.

The direction of the iteration is from the first function in the params to the last (front to back).

```
// a('test') -> 'TEST'
func a = (text) -> text.toUpperCase()

// b({ name: 'pipe' }) -> 'pipe'
func b = (item) -> item.name

'PIPE' === a(b({ name: 'pipe' })) === pipe(b, a)({ name: 'pipe' })
```

## Install

Using npm:

```sh
npm install @functional/pipe
```

or using yarn:

```sh
yarn add @functional/pipe
```
