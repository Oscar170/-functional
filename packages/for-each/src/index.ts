function forEach<T>(action: (item: T) => void, list: T[]) {
  if (list.length <= 0) {
    return;
  }

  action(list[0]);
  if (list.length <= 1) {
    return;
  }

  forEach(action, list.slice(1, list.length));
}

export default forEach;
