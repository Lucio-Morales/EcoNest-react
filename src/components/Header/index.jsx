import Navbar from '../Navbar';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.headerBox}>
      <div className={styles.logo}>
        <p>The</p>
        <p>Falekin</p>
        <p>Hotel</p>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
