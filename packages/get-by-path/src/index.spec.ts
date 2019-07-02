import getByPath from '.';

const source = { foo: [{ bar: 10 }, { bar: 20 }] };

test('should use the path to extract the prop form the source', () => {
  const path = ['foo', 1, 'bar'];
  const expectdResult = 20;

  expect(getByPath(path, source)).toBe(expectdResult);
});

test('should return null if the path is wrong', () => {
  const path = ['bar', 3, 'foo'];

  expect(getByPath(path, source)).toBeNull();
});

test('should return defaultValue if the path is wrong and is provided', () => {
  const path = ['bar', 3, 'foo'];
  const defaultValue = Math.PI;

  expect(getByPath(path, source, defaultValue)).toBe(Math.PI);
});
