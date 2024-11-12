import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import Layout from './Layout';
import MyPageLayout from './MyPageLayout';
import Login from '@pages/Login/Login';
import Signup from '@pages/Signup/Singup';
import Hobby from '@pages/Mypage/hobby/Hobby';
import MyInfo from '@pages/Mypage/myInfo/MyInfo';
import ProtectedRoute from './ProtectedRoute';

const createProtectedRoute = (protect: boolean, Component: React.ReactNode) => (
  <ProtectedRoute protect={protect}>{Component}</ProtectedRoute>
);

const Router = () => (
  <RouterProvider
    router={createBrowserRouter([
      {
        element: <Layout />,
        children: [
          {
            path: '/',
            element: <Navigate to='/login' replace />,
          },
          {
            path: '/login',
            element: createProtectedRoute(false, <Login />),
          },
          {
            path: '/signup',
            element: createProtectedRoute(false, <Signup />),
          },
        ],
      },
      {
        element: <MyPageLayout />,
        path: '/mypage',
        children: [
          {
            path: 'hobby',
            element: createProtectedRoute(true, <Hobby />),
          },
          {
            path: 'info',
            element: createProtectedRoute(true, <MyInfo />),
          },
        ],
      },
    ])}
  />
);

export default Router;
