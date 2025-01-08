import { createContext, useEffect } from 'react';

const ImagePreloadContext = createContext({});

const preloadImage = (src) => {
  const img = new Image();
  img.src = src;
};

export const ImagePreloadProvider = ({ children }) => {
  useEffect(() => {
    const images = [
      '/food.webp',
      '/gym.webp',
      '/img1.webp',
      '/img2.webp',
      '/img3.webp',
      '/img4.webp',
      '/layout-img.webp',
      '/layout2-img.webp',
      '/layout3-img.webp',
      '/layout4-img.webp',
      '/layout5-img.webp',
      '/layout6-img.webp',
      'layout7-img.webp',
      'layout8-img.webp',
      'meeting.webp',
      'pool.webp',
    ];
    images.forEach(preloadImage);
  }, []);

  return (
    <ImagePreloadContext.Provider value={{}}>
      {children}
    </ImagePreloadContext.Provider>
  );
};
