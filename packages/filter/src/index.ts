import reduce from '@functional/reduce';

function filter<T>(action: (item: T) => boolean, list: T[]): T[] {
  return reduce((acc, curr) => (action(curr) ? [...acc, curr] : acc), [], list);
}

export default filter;
