// import styles from './Footer.module.css';

// const Footer = () => {
//   return (
//     <footer className={styles.footerBox}>
//       {/* section 1  */}
//       <div className={styles.firstSection}>
//         <p>
//           500 Terry Francine Street, <br />
//           San Francisto. CA 94158 | <span>1-800-000-0000</span>
//         </p>
//         <div>
//           <div>Iconos de redes aqui</div>
//           <div>
//             <button>Contact us</button>
//           </div>
//         </div>
//         <p>@2035 by The Salinger Hotel. Powered and secured by Wib</p>
//       </div>

//       {/* section 2 */}
//       <div className={styles.secondSection}>
//         <p>Join our mailing list</p>
//         <div>
//           <label>Enter yout email here *</label>
//           <input type="text" placeholder="Email" />
//         </div>
//         <div>
//           <p>Yes, subscribe me to your newsletter</p>
//           <input type="checkbox" />
//         </div>
//         <div>
//           <button>Subscribe now</button>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footerBox}>
      {/* Sección de contacto */}
      <div className={styles.contactSection}>
        <p className={styles.address}>
          500 Terry Francine Street, <br />
          San Francisco, CA 94158 | <span>1-800-000-0000</span>
        </p>
        <div className={styles.socialAndContact}>
          <div className={styles.socialIcons}>Iconos de redes aquí</div>
          <button className={styles.contactButton}>Contact Us</button>
        </div>
        <p className={styles.copyright}>
          ©2035 by The Salinger Hotel. Powered and secured by Wib
        </p>
      </div>

      {/* Sección de suscripción */}
      <div className={styles.subscriptionSection}>
        <p className={styles.subscriptionTitle}>Join our mailing list</p>
        <div className={styles.emailInput}>
          <label htmlFor="email" className={styles.emailLabel}>
            Enter your email here *
          </label>
          <input
            type="email"
            id="email"
            className={styles.inputField}
            placeholder="Email"
          />
        </div>
        <div className={styles.newsletterCheckbox}>
          <input type="checkbox" id="subscribe" className={styles.checkbox} />
          <label htmlFor="subscribe" className={styles.checkboxLabel}>
            Yes, subscribe me to your newsletter
          </label>
        </div>
        <button className={styles.subscribeButton}>Subscribe Now</button>
      </div>
    </footer>
  );
};

export default Footer;
