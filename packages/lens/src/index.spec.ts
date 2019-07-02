import lensProp from './lensProp';
import set from './set';
import view from './view';

const lens = lensProp('foo');
const state = { foo: 'bar' };

test('view(lens, set(lens, value, state)) === value', () => {
  const value = 'baz';

  expect(view(lens, set(lens, value, state))).toBe(value);
});

test('set(lens, b, set(lens, a, state)) === set(lens, b, state)', () => {
  const a = 'baz';
  const b = 'biz';

  expect(set(lens, b, set(lens, a, state))).toEqual(set(lens, b, state));
});

test('set(lens, view(lens, state), state) === state', () => {
  expect(set(lens, view(lens, state), state)).toEqual(state);
});
