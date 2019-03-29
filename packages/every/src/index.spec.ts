import every from './index';

const condition = (value: number) => value > 10;

test("should return true if don't have items in the list", () => {
  const result = every(condition, []);

  expect(result).toBeTruthy();
});

test('should return true if all items pass the condition', () => {
  const result = every(condition, [20, 30]);

  expect(result).toBeTruthy();
});

test("should return false if some item don't pass the conditon", () => {
  const result = every(condition, [20, 5, 30]);

  expect(result).toBeFalsy();
});
