import Header from '@components/header/Header';
import { Outlet } from 'react-router-dom';

const MyPageLayout = () => (
  <div>
    <Header />
    <main>
      <Outlet />
    </main>
  </div>
);

export default MyPageLayout;
