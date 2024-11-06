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
            element: <Login />,
          },
          {
            path: '/signup',
            element: <Signup />,
          },
          {
            path: '/mypage/hobby',
            element: <Hobby />,
          },
          {
            path: '/mypage/info',
            element: <MyInfo />,
          },
        ],
      },
    ])}
  />
);

export default Router;
