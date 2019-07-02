import LensProp from './types';

const view = (lens: LensProp, store: any) => lens.view(store);

export default view;
