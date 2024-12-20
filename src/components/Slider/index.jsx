import { useRef } from 'react';
import styles from './Slider.module.css';
import leftArrow from '/left-arrow.svg';
import rightArrow from '/right-arrow.svg';
import { useEffect } from 'react';
import img1 from '../../assets/images/img1.webp';
import img2 from '../../assets/images/img2.webp';
import img3 from '../../assets/images/img3.webp';
import img4 from '../../assets/images/img4.webp';

const data = [
  { id: 1, imgUrl: img1 },
  { id: 2, imgUrl: img2 },
  { id: 3, imgUrl: img3 },
  { id: 4, imgUrl: img4 },
];

const Slider = () => {
  const slideShow = useRef(null);
  const autoSlideInterval = useRef(null);
  // const slideShowInterval = useRef(null);

  const handleNext = () => {
    // Comprobamos que el slideShow tenga elementos dentro.
    if (slideShow.current.children.length > 0) {
      // Obtengo el primer elemento.
      const firstElement = slideShow.current.children[0];

      //Establezco la transicion.
      slideShow.current.style.transition = `400ms ease-out all`;

      // Obtengo el ancho del primer slide para saber cuanto debe desplazarse el carrusel
      const slideSize = slideShow.current.children[0].offsetWidth;

      // Muevo el slideShow en funcion del slideSize
      slideShow.current.style.transform = `translateX(-${slideSize}px)`;

      const transition = () => {
        // Restablezco la posicion del slideShow
        slideShow.current.style.transition = 'none';
        slideShow.current.style.transform = `translateX(0)`;

        //Agarro el primer elemento y lo envio al final.
        slideShow.current.appendChild(firstElement);

        // Remuevo el evento
        slideShow.current.removeEventListener('transitionend', transition);
      };

      //  Event que se dispara cuando termina la animacion.
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

  const startAutoSlide = () => {
    autoSlideInterval.current = setInterval(() => {
      handleNext();
    }, 3000);
  };

  const stopAutoSlide = () => {
    clearInterval(autoSlideInterval.current);
  };

  useEffect(() => {
    // Inicio el slider cuando se monta el componente
    startAutoSlide();

    // Y lo freno cuando se desmonta
    return () => stopAutoSlide();
  }, []);

  return (
    <div
      className={styles.mainContainer}
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
    >
      <div className={styles.contenedorPrincipal}>
        <div className={styles.contenedorSlideshow} ref={slideShow}>
          <div className={styles.slide}>
            <img src={data[0].imgUrl} alt="slider image" loading="lazy" />
          </div>
          <div className={styles.slide}>
            <img src={data[1].imgUrl} alt="slider image" loading="lazy" />
          </div>
          <div className={styles.slide}>
            <img src={data[2].imgUrl} alt="slider image" loading="lazy" />
          </div>
          <div className={styles.slide}>
            <img src={data[3].imgUrl} alt="slider image" loading="lazy" />
          </div>
        </div>

        <div className={styles.controles}>
          <button
            className={styles.buttonLeft}
            onClick={handlePrev}
            aria-label="Previous Slide"
          >
            <img src={leftArrow} alt="left arrow" loading="lazy" />
          </button>
        </div>

        <div className={styles.controles}>
          <button
            className={styles.buttonRight}
            onClick={handleNext}
            aria-label="Next Slide"
          >
            <img src={rightArrow} alt="right arrow" loading="lazy" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
