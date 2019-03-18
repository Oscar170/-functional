import reverseCurry from './index';

const concat = (firstWord: string, secondWord: string) =>
  `${firstWord} ${secondWord}`;
const curriedConcat = reverseCurry(concat);

test('Pass all params should execute the function', () => {
  const result = curriedConcat('world', 'Hello');

  expect(result).toBe('Hello world');
});

test("Until don't pass all params should return the function", () => {
  const result = curriedConcat('Hello');

  expect(result).toBeInstanceOf(Function);
});

test('When pass all the params should execute the function', () => {
  const concatToWorld = curriedConcat('world');
  const result = concatToWorld('Hello');

  expect(result).toBe('Hello world');
});
