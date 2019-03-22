import compose from './index';

test('Should compose the functions', () => {
  const composedFunction = compose(
    (val: number) => val * val,
    (val: number) => val * 2,
  );

  expect(composedFunction(5)).toBe(100);
});

test('The returned function should work whit multi params', () => {
  const composedFunction = compose(
    (val: number) => val * 10,
    (val1: number, val2: number) => val1 * val2,
  );

  expect(composedFunction(5, 4)).toBe(200);
});

test('If function return an arrray, spread the values to the next function', () => {
  const composedFunction = compose(
    (val1: number, val2: number) => val1 * val2,
    (val: number) => [val, 10],
  );

  expect(composedFunction(5)).toBe(50);
});
