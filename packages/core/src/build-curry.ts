type IArgsParser = (args: any[]) => any[];
type Currying = (...args: any[]) => Currying | any;

// tslint:disable-next-line:ban-types
const buildCurry = (argsParser: IArgsParser) => (func: Function) => {
  const currying = (...args: any[]): Currying => {
    return args.length >= func.length
      ? func(...argsParser(args))
      : currying.bind(null, ...args);
  };

  return currying;
};

export default buildCurry;
