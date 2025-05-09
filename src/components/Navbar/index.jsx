import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navBox}>
      <NavLink to="/" className={({ isActive }) => (isActive ? `${styles.link} ${styles.active}` : styles.link)}>
        Home
      </NavLink>
      <NavLink to="/explore" className={({ isActive }) => (isActive ? `${styles.link} ${styles.active}` : styles.link)}>
        Explore
      </NavLink>
      <NavLink
        to="/amenities"
        className={({ isActive }) => (isActive ? `${styles.link} ${styles.active}` : styles.link)}
      >
        Amenities
      </NavLink>
      <NavLink
        to="/meetings-events"
        className={({ isActive }) => (isActive ? `${styles.link} ${styles.active}` : styles.link)}
      >
        Meetings & Events
      </NavLink>
    </nav>
  );
};

export default Navbar;
