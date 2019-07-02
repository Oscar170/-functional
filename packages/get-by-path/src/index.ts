const getByPath = (
  path: Array<string | number>,
  store: any,
  defValue: any = null,
) => {
  try {
    return path.reduce((part, step) => part[step], store);
  } catch {
    return defValue;
  }
};

export default getByPath;
