import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPane from './components/MainPane';
// import styles from './App.module.css';

function MainLayout() {
  return (
    // <div className={styles.layoutContainer}>
    <>
      <Header />
      <MainPane>
        <Outlet />
      </MainPane>
      <Footer />
    </>
    // </div>
  );
}

export default MainLayout;
