import { useRef } from 'react';
import styles from './Slider.module.css';
import demo1 from '/img/demo1.jpg';
import demo2 from '/img/demo2.jpg';
import demo3 from '/img/demo3.jpg';
import demo4 from '/img/demo4.jpg';
import leftArrow from '/left-arrow.svg'; // Importa la flecha izquierda
import rightArrow from '/right-arrow.svg'; // Importa la flecha derecha

const Slider = () => {
  const slideShow = useRef(null);

  const handleNext = () => {
    // Comprobamos que el slideShow tenga elementos dentro.
    if (slideShow.current.children.length > 0) {
      // Obtengo el primer elemento.
      const firstElement = slideShow.current.children[0];

      //Establezco la transicion.
      slideShow.current.style.transition = `400ms ease-out all`;

      const slideSize = slideShow.current.children[0].offsetWidth;

      // Muevo el slideShow
      slideShow.current.style.transform = `translateX(-${slideSize}px)`;

      const transition = () => {
        // Restablezco la posicion del slideShow
        slideShow.current.style.transition = 'none';
        slideShow.current.style.transform = `translateX(0)`;

        //Agarro el primer elemento y lo envio al final.
        slideShow.current.appendChild(firstElement);

        slideShow.current.removeEventListener('transitionend', transition);
      };

      //Eventlistener para cuando termina la animacion.
      slideShow.current.addEventListener('transitionend', transition);
    }
  };

  const handlePrev = () => {
    if (slideShow.current.children.length > 0) {
      // Obtengo el ultimo elemento del slideShow:
      const index = slideShow.current.children.length - 1;
      const lastElement = slideShow.current.children[index];
      // Lo reubico al principio:
      slideShow.current.insertBefore(lastElement, slideShow.current.firstChild);

      slideShow.current.style.transition = 'none';
      const slideSize = slideShow.current.children[0].offsetWidth;
      slideShow.current.style.transform = `translateX(-${slideSize}px)`;

      setTimeout(() => {
        slideShow.current.style.transition = '400ms ease-out all';
        slideShow.current.style.transform = `translateX(0)`;
      }, 30);
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.contenedorPrincipal}>
        <div className={styles.contenedorSlideshow} ref={slideShow}>
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
