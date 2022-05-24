import { RefObject, useCallback, useEffect, useRef, useState } from "react";
// element의 clientHeight를 내보냄 ref를 element에 설정해야됨
const useElementWIdth: <T extends HTMLElement>() => [RefObject<T>, number] = <
  T extends HTMLElement
>() => {
  const elementRef = useRef<T>(null);
  const [elementClientWidth, setElementClientwidth] = useState(100);

  const onResize = () => {
    if (elementRef.current) {
      setElementClientwidth(elementRef.current.clientWidth);
    }
  };

  useEffect(() => {
    if (elementRef.current) {
      setElementClientwidth(elementRef.current.clientWidth);
    }
    window.addEventListener("click", onResize);

    return () => {
      window.removeEventListener("click", onResize);
    };
  }, [elementRef.current]);

  return [elementRef, elementClientWidth];
};

export default useElementWIdth;
