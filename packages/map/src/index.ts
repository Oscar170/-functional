import forEach from '@functional/for-each';

function map<T, E>(action: (item: T) => E, list: T[]): E[] {
  const newList: E[] = [];
  forEach((item) => {
    newList.push(action(item));
  }, list);

  return newList;
}

export default map;
