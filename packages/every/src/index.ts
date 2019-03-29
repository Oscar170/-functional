import reduce from '@functional/reduce';

function every(condition: (item: any) => boolean, list: any[]) {
  return reduce((acc, curr) => acc && condition(curr), true, list);
}

export default every;
