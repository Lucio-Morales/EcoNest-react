import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footerBox}>
      {/* section 1  */}
      <div>
        <p>
          500 Terry Francine Street, <br />
          San Francisto. CA 94158 | <span>1-800-000-0000</span>
        </p>
        <div>
          <div>Iconos de redes aqui</div>
          <div>
            <button>Contact us</button>
          </div>
        </div>
        <p>@2035 by The Salinger Hotel. Powered and secured by Wib</p>
      </div>

      {/* section 2 */}
      <div>
        <label>Enter yout email here *</label>
        <input type="text" placeholder="Email" />
        {/* aqui deberia haber un cuadro seleccionable al ladod e un parrafo que
        diga "Yes, subscribe me to your newsletter" */}
      </div>
      <button>Subscribe now</button>
    </footer>
  );
};

export default Footer;
