import filter from './index';

test('should return a list', () => {
  const action = jest.fn();

  const result = filter(action, []);

  expect(result).toBeInstanceOf(Array);
});

test('should execute the compare function for every item', () => {
  const action = jest.fn();
  filter(action, [0, 2]);

  expect(action).toHaveBeenNthCalledWith(1, 0);
  expect(action).toHaveBeenNthCalledWith(2, 2);
});

test('the new array should have the values that pass the validation', () => {
  const action = (x: number) => x >= 2;
  const result = filter(action, [0, 1, 2, 3]);

  expect(result).toEqual([2, 3]);
});
