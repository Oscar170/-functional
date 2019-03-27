import reduce from '@functional/reduce';

function map<T, E>(action: (item: T) => E, list: T[]): E[] {
  return reduce((acc, curr) => [...acc, action(curr)], [], list);
}

export default map;
