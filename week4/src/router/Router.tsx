import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import Layout from './Layout';
import Login from '@pages/Login/Login';
import Signup from '@pages/Signup/Singup';
import Hobby from '@pages/Mypage/hobby/Hobby';
import MyInfo from '@pages/Mypage/myInfo/MyInfo';
import ProtectedRoute from './ProtectedRoute';

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
            element: (
              <ProtectedRoute protect={false}>
                <Login />
              </ProtectedRoute>
            ),
          },
          {
            path: '/signup',
            element: (
              <ProtectedRoute protect={false}>
                <Signup />
              </ProtectedRoute>
            ),
          },
          {
            path: '/mypage/hobby',
            element: (
              <ProtectedRoute protect={true}>
                <Hobby />
              </ProtectedRoute>
            ),
          },
          {
            path: '/mypage/info',
            element: (
              <ProtectedRoute protect={true}>
                <MyInfo />
              </ProtectedRoute>
            ),
          },
        ],
      },
    ])}
  />
);

export default Router;
