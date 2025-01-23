import { createBrowserRouter } from 'react-router';
import Layout from '@layouts/Layout';
import MainPage from '@pages/MainPage';
import FavoritesPage from '@pages/FavoritesPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: 'favorites',
        element: <FavoritesPage />,
      },
    ],
  },
]);

export default router;
