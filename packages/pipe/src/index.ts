import { buildCompose } from '@functional/core';

const pipe = buildCompose((funcs) => funcs);

export default pipe;
