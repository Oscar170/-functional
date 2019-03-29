import some from './index';

const condition = (value: number) => value > 10;

test("should return false if don't have items in the list", () => {
  const result = some(condition, []);

  expect(result).toBeFalsy();
});

test('should return true if some item pass the condition', () => {
  const result = some(condition, [20, 30]);

  expect(result).toBeTruthy();
});

test('should return false if any item pass the conditon', () => {
  const result = some(condition, [4, 5, 10]);

  expect(result).toBeFalsy();
});
