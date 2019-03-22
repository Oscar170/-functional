import pipe from './index';

test('Should compose the functions', () => {
  const pipeFunction = pipe(
    (val: number) => val * val,
    (val: number) => val * 2,
  );

  expect(pipeFunction(5)).toBe(50);
});

test('The returned function should work whit multi params', () => {
  const pipeFunction = pipe(
    (val1: number, val2: number) => val1 * val2,
    (val: number) => val * 10,
  );

  expect(pipeFunction(5, 4)).toBe(200);
});

test('If function return an arrray, spread the values to the next function', () => {
  const pipeFunction = pipe(
    (val: number) => [val, 10],
    (val1: number, val2: number) => val1 * val2,
  );

  expect(pipeFunction(5)).toBe(50);
});
