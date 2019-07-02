import lens from './lens';

const lensProp = (prop: string) =>
  lens(
    (store) => store[prop],
    (value, store) => ({
      ...store,
      [prop]: value,
    }),
  );

export default lensProp;
