import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <main>
      <section>
        <Outlet />
      </section>
    </main>
  );
};

export default Layout;
