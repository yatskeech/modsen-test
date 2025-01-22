import { createBrowserRouter } from 'react-router';
import Layout from '@layouts/Layout';
import MainPage from '@pages/MainPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
    ],
  },
]);

export default router;
