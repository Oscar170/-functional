import LensProp from './types';

const lens = (view: LensProp['view'], set: LensProp['set']): LensProp => ({
  set,
  view,
});

export default lens;
