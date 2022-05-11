import { useContext } from "react";
import { SliderInfoContext } from "./SliderInfoProvider";

const useSliderInfoContext = () => {
  const sliderInfoContext = useContext(SliderInfoContext);
  if (!sliderInfoContext) {
    throw new Error("there is no sliderInfoContext");
  }
  return sliderInfoContext;
};
export default useSliderInfoContext;
