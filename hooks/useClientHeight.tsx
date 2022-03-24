import { RefObject, useCallback, useEffect, useRef, useState } from "react";
// element의 clientHeight를 내보냄 ref를 element에 설정해야됨
const useElementClientHeight: <T extends HTMLElement>() => [
  RefObject<T>,
  number
] = <T extends HTMLElement>() => {
  const elementRef = useRef<T>(null);
  const [elementClientHeight, setElementClientHeight] = useState(100);
  useEffect(() => {
    if (elementRef.current)
      setElementClientHeight(elementRef.current.clientHeight);
  });

  return [elementRef, elementClientHeight];
};

export default useElementClientHeight;
