import forEach from '@functional/for-each';

function reduce(
  action: (acumulator: any, item: any) => any,
  initAcumulator: any,
  list: any[],
) {
  let acumulator = initAcumulator;

  forEach((item) => {
    acumulator = action(acumulator, item);
  }, list);

  return acumulator;
}

export default reduce;
