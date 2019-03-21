import { buildCompose } from '@functional/core';

const compose = buildCompose((funcs) => funcs.reverse());

export default compose;
