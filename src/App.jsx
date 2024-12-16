import { Outlet } from 'react-router-dom';
import Header from './components/Header';
// import Footer from './components/Footer';
import MainPane from './components/MainPane';

function MainLayout() {
  return (
    <>
      <Header />
      <MainPane>
        <Outlet />
      </MainPane>
      {/* <Footer /> */}
    </>
  );
}

export default MainLayout;
