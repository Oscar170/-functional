import lens from './lens';

const lensIndex = (index: number) =>
  lens(
    (store: any[]): any => store[index],
    (value: any, store: any[]): any[] => [
      ...store.slice(0, index),
      value,
      ...store.slice(index + 1),
    ],
  );

export default lensIndex;
