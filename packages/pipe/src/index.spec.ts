import pipe from './index';

test('Should compose the functions', () => {
  const composedFunction = pipe(
    (val: number) => val * val,
    (val: number) => val * 2,
  );

  expect(composedFunction(5)).toBe(50);
});
