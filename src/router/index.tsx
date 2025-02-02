import { createBrowserRouter } from 'react-router';
import Layout from '@layouts/Layout';
import MainPage from '@pages/MainPage';
import FavoritesPage from '@pages/FavoritesPage';
import ArtworkPage from '@pages/ArtworkPage';
import NotFoundPage from '@pages/NotFoundPage';

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
      {
        path: 'artworks/:id',
        element: <ArtworkPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
