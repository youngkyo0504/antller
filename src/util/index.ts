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
  return arr.sort(compareFunction);
};

/**
  배열을 열개씩 분할한다.
  @param target : 배열
  @return [] 배열
*/
export const chunk = <T>(target: T[], size: number) => {
  return target.reduce(
    (memo: T[][], value, index) => {
      if (index % size == 0 && index !== 0) {
        memo.push([]);
      }
      memo[memo.length - 1].push(value);
      return memo;
    },
    [[]]
  );
};

/**
 * 인자로 받은 인덱스값을 배열의 길이보다 크지않게 순환시킨다.
 * @param length 배열의 길이
 * @param updatedIndex
 * @returns
 */
export const circle = (length: number, updatedIndex: number) => {
  if (updatedIndex < 0) return length - 1;
  return updatedIndex % length;
};

/**
  Convert radians to degrees
  @param [number]: Value in radians
  @return [number]: Value in degrees
*/
export const radiansToDegrees = (radians: number) => (radians * 180) / Math.PI;

type Point = {
  x: number;
  y: number;
};
/** 
  Angle between points
  @param [object]: X and Y coordinates of from point
  @param [object]: X and Y coordinates of to point
  @return [radian]: Angle between the two points in radians
*/
export const angle = (a: Point, b: Point = { x: 0, y: 0 }) =>
  radiansToDegrees(Math.atan2(b.y - a.y, b.x - a.x));

/**
 * 각이 수직인지 아닌지 판별
 * @param angle
 * @returns
 */
export const angleIsVertical = (angle: number) => {
  const isUp = angle <= -90 + 45 && angle >= -90 - 45;
  const isDown = angle <= 90 + 45 && angle >= 90 - 45;

  return isUp || isDown;
};
