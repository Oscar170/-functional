import { buildCurry } from '@functional/core';

const curry = buildCurry((funcs) => funcs);

export default curry;
