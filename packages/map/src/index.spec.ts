import map from './index';

test('should return a list', () => {
  const action = jest.fn();

  const result = map(action, []);

  expect(result).toBeInstanceOf(Array);
});

test('should execute the transform function for every item', () => {
  const action = jest.fn();
  map(action, [0, 2]);

  expect(action).toHaveBeenNthCalledWith(1, 0);
  expect(action).toHaveBeenNthCalledWith(2, 2);
});

test('the new array should have the transformed values of the original', () => {
  const action = (x: number) => x * x;
  const result = map(action, [0, 1, 2, 3]);

  expect(result).toEqual([0, 1, 4, 9]);
});
