type IArgsParser = (args: any[]) => any[];
type Currying = (...args: any[]) => Currying | any;

// tslint:disable-next-line:ban-types
const buildCurry = (argsParser: IArgsParser) => {
  // tslint:disable-next-line: ban-types
  const curry = (fn: Function, accArgs: any[] = []) => (
    ...newArgs: any[]
  ): Currying => {
    const combinedArgs = [...accArgs, ...newArgs];

    return combinedArgs.length >= fn.length
      ? fn(...argsParser(combinedArgs))
      : curry(fn, combinedArgs);
  };

  return curry;
};

export default buildCurry;
