import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Mypage from '@pages/Mypage/Mypage';
import Login from '@pages/Login/Login';
import Signup from '@pages/Signup/SignUp';

const Router = () => (
  <RouterProvider
    router={createBrowserRouter([
      {
        element: <Layout />,
        children: [
          {
            path: '/',
            element: <Mypage />,
          },
          {
            path: '/login',
            element: <Login />,
          },
          {
            path: '/signup',
            element: <Signup />,
          },
        ],
      },
    ])}
  />
);

export default Router;
