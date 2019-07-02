const updateByPath = (path: Array<string | number>, value: any, state: any) => {
  const [current, ...tail] = path;
  if (path.length === 0) {
    return value;
  }

  try {
    const updateValue: any = updateByPath(tail, value, state[current]);

    if (Array.isArray(state)) {
      return [
        ...state.slice(0, current as number),
        updateValue,
        ...state.slice((current as number) + 1),
      ];
    }

    if (typeof state === 'object') {
      return {
        ...state,
        [current]: updateValue,
      };
    }

    return updateValue;
  } catch {
    return state;
  }
};

export default updateByPath;
