import reduce from '@functional/reduce';

function some(condition: (item: any) => boolean, list: any[]) {
  return reduce((acc, curr) => acc || condition(curr), false, list);
}

export default some;
