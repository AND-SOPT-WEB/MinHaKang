import Header from '@components/header/Header';
import { Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();

  const isAuthPage =
    location.pathname === '/login' || location.pathname === '/signup';

  return (
    <div>
      {!isAuthPage && <Header />}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
