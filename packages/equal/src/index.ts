import every from '@functional/every';

type definitionProp = (value: any) => boolean;

function equal(definition: { [key: string]: any | definitionProp }) {
  const keys: any[] = Object.keys(definition);

  const compare = (objectToCompare: { [key: string]: any }) => {
    const keysToCompare: any[] = [];

    // tslint:disable-next-line: forin
    for (const keyToCompare in objectToCompare) {
      keysToCompare.push(keyToCompare);
    }

    if (!every((key) => keysToCompare.includes(key), keys)) {
      return false;
    }

    return every((key) => {
      const definitionItem = definition[key];
      const itemToCompare = objectToCompare[key];

      if (typeof definitionItem === 'function') {
        return definitionItem(itemToCompare);
      }

      return definitionItem === itemToCompare;
    }, keys);
  };

  return compare;
}

export default equal;
