import styles from './Explore.module.css';

const ExplorePage = () => {
  return (
    <div className={styles.containerPrincipal}>
      <div className={styles.headerContainer}>
        <div className={`${styles.item} ${styles.imageItem}`}>
          <img
            className={styles.imageHeader}
            src="/img1.jpg"
            alt="primer imagen"
          />
        </div>
        <div className={`${styles.item} ${styles.middleItem}`}>
          <div className={styles.middleText}>
            <span>AN</span>
            <span>URBAN</span>
            <span>LUXURY</span>
            <span>HOTEL</span>
          </div>
        </div>
        <div className={`${styles.item} ${styles.item3} ${styles.textItem}`}>
          <p>
            I´m a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. Feel free to drag and drop me
            anywhere you like on your page. I’m a great place for you to tell a
            story and let your users know a little more about you.
          </p>
          <p>
            This is a great space to write long text about your company and your
            services. You can use this space to go into a little more detail
            about your company. Talk about your team and what services you
            provide.
          </p>
        </div>
      </div>

      <div className={styles.imagesContainer}>
        <div className={styles.column}>
          <div className={styles.imageCard}>
            <img src="/layout-img.webp" alt="tercera imagen" />
            <div className={styles.overlay}>
              <div className={styles.overlayContent}>
                <span className={styles.icon}>❤️</span>
                <span className={styles.icon}>🔗</span>
                <p className={styles.text}>Ver más</p>
              </div>
            </div>
          </div>

          <div className={styles.imageCard}>
            <img src="/layout-img4.webp" alt="sexta imagen" />
            <div className={styles.overlay}>
              <div className={styles.overlayContent}>
                <span className={styles.icon}>❤️</span>
                <span className={styles.icon}>🔗</span>
                <p className={styles.text}>Ver más</p>
              </div>
            </div>
          </div>

          <div className={styles.imageCard}>
            <img src="/layout-img6.webp" alt="octava imagen" />
            <div className={styles.overlay}>
              <div className={styles.overlayContent}>
                <span className={styles.icon}>❤️</span>
                <span className={styles.icon}>🔗</span>
                <p className={styles.text}>Ver más</p>
              </div>
            </div>
          </div>

          <div className={styles.imageCard}>
            <img src="/layout-img8.webp" alt="décima imagen" />
            <div className={styles.overlay}>
              <div className={styles.overlayContent}>
                <span className={styles.icon}>❤️</span>
                <span className={styles.icon}>🔗</span>
                <p className={styles.text}>Ver más</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.imageCard}>
            <img src="/layout-img2.webp" alt="cuarta imagen" />
            <div className={styles.overlay}>
              <div className={styles.overlayContent}>
                <span className={styles.icon}>❤️</span>
                <span className={styles.icon}>🔗</span>
                <p className={styles.text}>Ver más</p>
              </div>
            </div>
          </div>

          <div className={styles.imageCard}>
            <img src="/layout-img3.webp" alt="quinta imagen" />
            <div className={styles.overlay}>
              <div className={styles.overlayContent}>
                <span className={styles.icon}>❤️</span>
                <span className={styles.icon}>🔗</span>
                <p className={styles.text}>Ver más</p>
              </div>
            </div>
          </div>

          <div className={styles.imageCard}>
            <img src="/layout-img5.webp" alt="séptima imagen" />
            <div className={styles.overlay}>
              <div className={styles.overlayContent}>
                <span className={styles.icon}>❤️</span>
                <span className={styles.icon}>🔗</span>
                <p className={styles.text}>Ver más</p>
              </div>
            </div>
          </div>

          <div className={styles.imageCard}>
            <img src="/layout-img7.webp" alt="novena imagen" />
            <div className={styles.overlay}>
              <div className={styles.overlayContent}>
                <span className={styles.icon}>❤️</span>
                <span className={styles.icon}>🔗</span>
                <p className={styles.text}>Ver más</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
