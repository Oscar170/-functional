# @functional/equal

> Equal function.

This package contains the equal function. It receives object definition to use for comapre with other object.

```
const propShouldBeGreaterThanTen = equal({  prop: (value) => value > 10 })

// propShouldBeGreaterThanTen({ prop: 20 }) -> true
// propShouldBeGreaterThanTen({ prop: 10 }) -> false
```

## Install

Using npm:

```sh
npm install @functional/equal
```

or using yarn:

```sh
yarn add @functional/equal
```
