import styles from './Amenities.module.css';
import poolImg from '../../assets/images/pool.webp';
import gymImg from '../../assets/images/gym.webp';

const AmenitiesPage = () => {
  return (
    <div className={styles.container}>
      {/* Primera sección */}
      <div className={styles.topSection}>
        <div className={styles.textContainer}>
          <div className={styles.middleText}>
            <span>AMENITIES</span>
            <span>& SERVICES</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src={poolImg} alt="Descripción de la piscina" loading="lazy" />
        </div>
      </div>

      {/* Segunda sección */}
      <section className={styles.newSection}>
        <div className={styles.listItems}>
          <ul>
            <li>Award-winning restaurant</li>
            <li>Spa & indoor pool</li>
            <li>Fitness center & personal training</li>
            <li>Meeting facilities</li>
            <li>Concierge services</li>
            <li>Complimentary Wi-Fi</li>
            <li>Private balcony rooms</li>
            <li>Sweeping city views</li>
            <li>Fine art collection</li>
            <li>Complimentary bottled water</li>
            <li>Pet-friendly accommodation</li>
          </ul>
        </div>

        <div className={styles.imageBox}>
          <img src={gymImg} alt="Descripción del servicio" loading="lazy" />
        </div>
      </section>
    </div>
  );
};

export default AmenitiesPage;
