import updateByPath from '.';

const source = { foo: [{ bar: 20 }] };

test('should update the source', () => {
  const path = ['foo', 0, 'bar'];
  const expected = { foo: [{ bar: 30 }] };

  expect(updateByPath(path, 30, source)).toEqual(expected);
});

test('should create the first prop if the path is wrong', () => {
  const path = ['bar', 0, 'foo'];
  const expected = { foo: [{ bar: 20 }], bar: undefined };

  expect(updateByPath(path, 30, source)).toEqual(expected);
});
