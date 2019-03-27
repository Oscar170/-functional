import reducer from './index';

test('should execute the action in every iteration of the list', () => {
  const action = jest.fn();

  reducer(action, 0, [0, 1]);

  expect(action).toBeCalledTimes(2);
});

test('should return the acumulator with the result of all iterations', () => {
  const action = jest.fn((acc, curr) => acc + curr);

  const result = reducer(action, 0, [10, 5]);

  expect(result).toBe(15);
});

test('should recibe the correct params', () => {
  const action = jest.fn((acc, curr) => acc + curr);

  reducer(action, 0, [10, 5]);

  expect(action).toHaveBeenNthCalledWith(1, 0, 10);
  expect(action).toHaveBeenNthCalledWith(2, 10, 5);
});
