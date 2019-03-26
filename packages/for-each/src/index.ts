function forEach<T>(action: (item: T) => void, list: T[]) {
  action(list[0]);
  if (list.length <= 1) {
    return;
  }
  forEach(action, list.slice(1, list.length));
}

export default forEach;
