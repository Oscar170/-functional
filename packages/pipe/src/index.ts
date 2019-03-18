import { buildCompose } from '@functional/core';

const pipe = buildCompose((funcs) => funcs.reverse());

export default pipe;
