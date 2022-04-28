import { RefObject, useCallback, useEffect, useRef, useState } from "react";
// element의 clientHeight를 내보냄 ref를 element에 설정해야됨
const useElementGeometry: <T extends HTMLElement>() => [
  RefObject<T>,
  number,
  number
] = <T extends HTMLElement>() => {
  const elementRef = useRef<T>(null);
  const [elementClientHeight, setElementClientHeight] = useState(100);
  const [offsetTop, setOffsetTop] = useState(1000);
  useEffect(() => {
    if (elementRef.current) {
      setElementClientHeight(elementRef.current.clientHeight);
      setOffsetTop(elementRef.current.offsetTop);
    }
  }, [elementRef.current]);

  return [elementRef, elementClientHeight, offsetTop];
};

export default useElementGeometry;
