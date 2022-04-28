import { useEffect } from "react";

const useOffsetTop = () => {
  const [offsetTop, setOffsetTop] = useState(1000);

  useEffect(() => {
    divRef.current && setOffsetTop(divRef.current.offsetTop);
  });
};
