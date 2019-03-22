import equal from './index';

test('should return the comapre function', () => {
  const result = equal({ prop: 10 });

  expect(result).toBeInstanceOf(Function);
});

test('should use the functions in the definition', () => {
  const comapreProp = jest.fn(() => true);
  const definition = {
    prop: comapreProp,
  };

  const comparator = equal(definition);
  comparator({ prop: 20 });

  expect(comapreProp).toBeCalled();
});

test('If the object pass all the checks should return true', () => {
  const comparator = equal({
    prop: (value: number) => value > 10,
  });

  expect(comparator({ prop: 12 })).toBeTruthy();
});

test("If the object don't pass all the checks should retrun false", () => {
  const comparator = equal({
    prop: (value: number) => value > 10,
  });

  expect(comparator({ prop: 10 })).toBeFalsy();
});

test('Should compare whit simple values', () => {
  const comparator = equal({
    prop: 10,
  });

  expect(comparator({ prop: 10 })).toBeTruthy();
});

test('should work with the proto', () => {
  const comparator = equal({
    prop: 10,
  });

  expect(comparator(Object.setPrototypeOf({}, { prop: 10 }))).toBeTruthy();
});

test('should only look the propertis defined in the equal', () => {
  const comparator = equal({
    prop: 10,
  });

  expect(comparator({ prop: 10, otherProp: 0 })).toBeTruthy();
});
