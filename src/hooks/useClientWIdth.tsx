import { RefObject, useCallback, useEffect, useRef, useState } from "react";
import { debounce } from "src/util";
// element의 clientHeight를 내보냄 ref를 element에 설정해야됨
const useElementWIdth: <T extends HTMLElement>() => [RefObject<T>, number] = <
  T extends HTMLElement
>() => {
  const elementRef = useRef<T>(null);
  const [elementClientWidth, setElementClientwidth] = useState(100);

  const onResize = useCallback(
    debounce(() => {
      if (elementRef.current) {
        setElementClientwidth(elementRef.current.clientWidth);
      }
    }, 300),
    [elementRef]
  );

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
