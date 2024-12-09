import Header from '@components/header/Header';
import { Outlet } from 'react-router-dom';

const MyPageLayout = () => (
  <>
    <Header />
    <main>
      <Outlet />
    </main>
  </>
);

export default MyPageLayout;
