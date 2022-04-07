export const sortStrings = <T>(
  arr: T[],
  compareKey?: keyof T,
  option: { isReverse: boolean } = { isReverse: false }
) => {
  const { isReverse } = option;
  const compareFunction = (a: any, b: any) => {
    [a, b] = compareKey
      ? [Number(a[compareKey]), Number(b[compareKey])]
      : [Number(a), Number(b)];
    return isReverse ? b - a : a - b;
  };
  console.log(arr.sort(compareFunction));
  return arr.sort(compareFunction);
};
