import { useState } from 'react';
import styles from './HomePage.module.css';

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const texts = [
    'Texto 1',
    'Texto 2',
    'Texto 3',
    'Texto 4',
    'Texto 5',
    'Texto 6',
  ];

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + texts.length) % texts.length
    );
  };

  return (
    <div className={styles.carouselContainer}>
      <button className={`${styles.button} ${styles.prev}`} onClick={goToPrev}>
        &#8249;
      </button>
      <div className={styles.carouselText}>{texts[currentIndex]}</div>
      <button className={`${styles.button} ${styles.next}`} onClick={goToNext}>
        &#8250;
      </button>
    </div>
  );
};

export default HomePage;
