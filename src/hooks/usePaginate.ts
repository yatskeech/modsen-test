import { useCallback, useState } from 'react';
import { ERROR_MESSAGES, MAX_ARTWORKS, QUERY_PARAMETERS } from '@constants';
import { useSearchParams } from 'react-router';
import { fetchArtworks } from '@utils/api.ts';
import { useDebounce } from './useDebounce.ts';
import { Artwork } from '@types';

export function usePaginate() {
  const [limit] = useState(4);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [artworks, setArtworks] = useState<Artwork[]>([]);

  // The API allows you to get only the first 1000 works of art.
  const maxPages = Math.floor(MAX_ARTWORKS / limit);
  const availablePages = Math.min(maxPages, totalPages);

  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(() => Number(searchParams.get(QUERY_PARAMETERS.PAGE)) || 1);

  const fetchArtworksDebounced = useDebounce(
    useCallback(async (searchParams: URLSearchParams) => {
      try {
        setError('');
        setLoading(true);

        const { pagination, data } = await fetchArtworks(searchParams);

        setArtworks(data);
        setTotalPages(pagination.total_pages);
        setTotal(pagination.total);

        if (!pagination.total) {
          setError(ERROR_MESSAGES.NOT_FOUND);
        }
      } catch {
        setError(ERROR_MESSAGES.FETCHING);
      } finally {
        setLoading(false);
      }
    }, []),
    500,
  );

  const navigateToPage = (page: number) => {
    setError('');
    setLoading(true);
    return page > availablePages ? setCurrentPage(1) : setCurrentPage(page);
  };

  return {
    fetching: { error, artworks, loading, fetchArtworksDebounced },
    pagination: { limit, currentPage, total, availablePages, navigateToPage },
  };
}
