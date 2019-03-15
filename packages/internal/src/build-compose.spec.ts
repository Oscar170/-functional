import buildCompose from './build-compose';

test('should return the compose funciont', () => {
  const compose = buildCompose((funcs) => funcs);

  expect(compose).toBeInstanceOf(Function);
});
