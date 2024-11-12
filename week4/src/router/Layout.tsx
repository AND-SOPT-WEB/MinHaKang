import { Outlet } from 'react-router-dom';

const Layout = () => (
  <div>
    <main>
      <Outlet />
    </main>
  </div>
);

export default Layout;
