const compose = (...funcs: Array<(val: any) => any>) => (val: any) =>
  funcs.reduce((a, b) => b(a), val);

export default compose;
