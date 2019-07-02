import getByPath from '@functional/get-by-path';
import updateByPath from '@functional/update-by-path';

import lens from './lens';

const lensPath = (path: Array<string | number>) =>
  lens(
    (store) => getByPath(path, store),
    (value, store) => updateByPath(path, value, store),
  );

export default lensPath;
