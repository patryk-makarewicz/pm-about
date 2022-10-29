import { useEffect, useRef, useState } from 'react';

export const PhotoLoad = () => {
  const [loaded, setLoaded] = useState(false);
  const refImage = useRef<HTMLImageElement>(null);
  const onLoad = () => {
    setLoaded(true);
  };
  useEffect(() => {
    if (refImage.current && refImage.current.complete) {
      onLoad();
    }
  });

  return {
    onLoad,
    loaded,
    refImage,
  };
};
