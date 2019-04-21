function reduce(
  fn: (accumulator: any, current: any) => any,
  accumulator: any,
  list: any[],
): any {
  if (list.length <= 0) {
    return accumulator;
  }
  const [current, ...tail] = list;

  return reduce(fn, fn(accumulator, current), tail);
}

export default reduce;
