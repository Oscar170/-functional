import buildCurry from './build-curry';

test('should return the curry funciont', () => {
  const curry = buildCurry((args) => args);

  expect(curry).toBeInstanceOf(Function);
});

describe('should work the curry', () => {
  const curry = buildCurry((args) => args);
  const concat = (firstWord: string, secondWord: string) =>
    `${firstWord} ${secondWord}`;
  const curriedConcat = curry(concat);

  test('Pass all params should execute the function', () => {
    const result = curriedConcat('Hello', 'world');

    expect(result).toBe('Hello world');
  });

  test("Until don't pass all params should return the function", () => {
    const result = curriedConcat('Hello');

    expect(result).toBeInstanceOf(Function);
  });

  test('When pass all the params should execute the function', () => {
    const concatToHello = curriedConcat('Hello');
    const result = concatToHello('world');

    expect(result).toBe('Hello world');
  });
});
