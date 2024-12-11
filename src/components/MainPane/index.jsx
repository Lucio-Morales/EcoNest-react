import { useLocation } from 'react-router-dom';
import styles from './MainPane.module.css';

const MainPane = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <main
      className={`${styles.mainBox} ${
        isHome ? styles.fullWidth : styles.centered
      }`}
    >
      {children}
    </main>
  );
};

export default MainPane;
