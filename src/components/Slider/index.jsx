import styles from './Slider.module.css';
import demo1 from '/img/demo1.jpg';
import demo2 from '/img/demo2.jpg';
import demo3 from '/img/demo3.jpg';
import demo4 from '/img/demo4.jpg';
import leftArrow from '/left-arrow.svg'; // Importa la flecha izquierda
import rightArrow from '/right-arrow.svg'; // Importa la flecha derecha

const Slider = () => {
  const handlePrev = () => {
    // Lógica para mover al slide anterior
    console.log('Previous Slide');
  };

  const handleNext = () => {
    // Lógica para mover al siguiente slide
    console.log('Next Slide');
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.contenedorPrincipal}>
        {/*  CONTENEDOR PRINCIPAL  */}

        <div className={styles.contenedorSlideshow}>
          {/* CONTENEDOR SLIDERSHOW  */}

          <div className={styles.slide}>
            <a href="https://github.com/lucio-morales">
              <img src={demo1} alt="slider image" />
            </a>
            <div className={styles.textoSlide}>
              <p>Parrafo para poner en cada imagen</p>
            </div>
          </div>
          <div className={styles.slide}>
            <a href="https://github.com/lucio-morales">
              <img src={demo2} alt="slider image" />
            </a>
            <div className={styles.textoSlide}>
              <p>Parrafo para poner en cada imagen</p>
            </div>
          </div>
          <div className={styles.slide}>
            <a href="https://github.com/lucio-morales">
              <img src={demo3} alt="slider image" />
            </a>
            <div className={styles.textoSlide}>
              <p>Parrafo para poner en cada imagen</p>
            </div>
          </div>
          <div className={styles.slide}>
            <a href="https://github.com/lucio-morales">
              <img src={demo4} alt="slider image" />
            </a>
            <div className={styles.textoSlide}>
              <p>Parrafo para poner en cada imagen</p>
            </div>
          </div>
        </div>

        <div className={styles.controles}>
          <button
            className={styles.buttonLeft}
            onClick={handlePrev}
            aria-label="Previous Slide"
          >
            <img src={leftArrow} alt="left arrow" />
          </button>
        </div>

        <div className={styles.controles}>
          <button
            className={styles.buttonRight}
            onClick={handleNext}
            aria-label="Next Slide"
          >
            <img src={rightArrow} alt="right arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
