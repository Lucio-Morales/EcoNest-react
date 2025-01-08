import { useState } from 'react';

const ImageComponent = ({ src, alt, styles, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <>
      {!isLoaded && <p>Loading...</p>}
      <img
        src={src}
        alt={alt}
        onLoad={handleImageLoad}
        style={styles}
        className={className}
      />
    </>
  );
};

export default ImageComponent;
