import forEach from '@functional/for-each';

function filter<T>(action: (item: T) => boolean, list: T[]): T[] {
  const newList: T[] = [];
  forEach((item) => {
    if (action(item)) {
      newList.push(item);
    }
  }, list);

  return newList;
}

export default filter;
