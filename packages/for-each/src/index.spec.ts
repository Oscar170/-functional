import forEach from './index';

test('should execute the action in every iteration of the list', () => {
  const action = jest.fn();

  forEach(action, [0, 1]);

  expect(action).toBeCalledTimes(2);
});

test('the action should recive the current item in the iteration', () => {
  const action = jest.fn();

  forEach(action, [0, 1]);

  expect(action).toHaveBeenNthCalledWith(1, 0);
  expect(action).toHaveBeenNthCalledWith(2, 1);
});
