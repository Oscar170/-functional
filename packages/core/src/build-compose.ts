type IFuncsParser = (
  funcs: Array<(...vals: any[]) => any>,
) => Array<(...vals: any[]) => any>;

const spreadArgs = (args: any | any[]) => {
  if (args instanceof Array) {
    return args;
  }
  return [args];
};

const buildCompose = (funcsParser: IFuncsParser) => (
  ...funcs: Array<(...val: any[]) => any>
) => (...vals: any[]) =>
  funcsParser(funcs).reduce((a, b) => {
    return b(...spreadArgs(a));
  }, vals);

export default buildCompose;
