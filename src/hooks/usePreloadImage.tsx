import { useEffect } from "react";

export type ImageInfo = {
  src: string;
};

const usePreloadImage = <T extends ImageInfo>(images: T[]) => {
  useEffect(() => {
    images.forEach((image) => {
      const imageComponent = new Image();
      imageComponent.src = image.src;
    });
  }, []);
};
export default usePreloadImage;
