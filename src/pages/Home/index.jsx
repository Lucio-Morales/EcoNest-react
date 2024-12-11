import styles from './HomePage.module.css';
import { data } from './data/data';

const HomePage = () => {
  return (
    <div className={styles.homeContainer}>
      <img
        className={styles.sliderImage}
        src={data[0].imgUrl}
        alt="imagen de prueba"
      />
    </div>
  );
};

export default HomePage;
