import buildCompose from './build-compose';

test('should return the compose funciont', () => {
  const compose = buildCompose((funcs) => funcs);

  expect(compose).toBeInstanceOf(Function);
});

test('should return the compose funciont', () => {
  const compose = buildCompose((funcs) => funcs);
  const composedFunction = compose(
    (val1, val2) => val1 * val2,
    (val) => [val, 10],
    (val1, val2) => val1 + val2,
  );

  expect(composedFunction(10, 10)).toBe(110);
});
