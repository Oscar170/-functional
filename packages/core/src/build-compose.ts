type IFuncsParser = (
  funcs: Array<(val: any) => any>,
) => Array<(val: any) => any>;

const buildCompose = (funcsParser: IFuncsParser) => (
  ...funcs: Array<(val: any) => any>
) => (val: any) => funcsParser(funcs).reduce((a, b) => b(a), val);

export default buildCompose;
