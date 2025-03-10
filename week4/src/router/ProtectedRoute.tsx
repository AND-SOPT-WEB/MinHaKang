import { ACCESS_TOKEN_KEY } from '@constants/config';
import { Navigate, Outlet } from 'react-router-dom';

interface ProtectedRouteProps {
  protect?: boolean;
  children?: React.ReactNode;
}

const ProtectedRoute = ({ protect = false, children }: ProtectedRouteProps) => {
  const isLoggedIn = !!sessionStorage.getItem(ACCESS_TOKEN_KEY);

  if (protect && !isLoggedIn) {
    return <Navigate to='/login' replace />;
  }

  if (!protect && isLoggedIn) {
    return <Navigate to='/mypage/hobby' replace />;
  }

  return children ? <>{children}</> : <Outlet />;
};

export default ProtectedRoute;
