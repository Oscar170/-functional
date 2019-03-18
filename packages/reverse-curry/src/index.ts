import { buildCurry } from '@functional/core';

const reverseCurry = buildCurry((funcs) => funcs.reverse());

export default reverseCurry;
