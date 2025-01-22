import { useCallback, useState } from 'react';
import { ERROR_MESSAGES, MAX_ARTWORKS, QUERY_PARAMETERS } from '@constants';
import { useSearchParams } from 'react-router';
import { fetchArtWorks } from '@utils/api.ts';
import { useDebounce } from './useDebounce.ts';
import { ArtWork } from '@types';

export function usePaginate(limit: number = 3) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [artWorks, setArtWorks] = useState<ArtWork[]>([]);

  const startFetching = useCallback(() => {
    setError('');
    setIsLoading(true);
  }, []);

  const searchDebounced = useDebounce(
    useCallback(async (searchParams: URLSearchParams) => {
      try {
        const { pagination, data } = await fetchArtWorks(searchParams);
        setArtWorks(data);
        setTotalPages(pagination.total_pages);
        setTotal(pagination.total);

        if (!pagination.total) {
          setError(ERROR_MESSAGES.NOT_FOUND);
        }
      } catch {
        setError(ERROR_MESSAGES.FETCHING);
      } finally {
        setIsLoading(false);
      }
    }, []),
    500,
  );

  // The API allows you to get only the first 1000 works of art.
  const maxPages = Math.floor(MAX_ARTWORKS / limit);
  const availablePages = Math.min(maxPages, totalPages);

  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(() => Number(searchParams.get(QUERY_PARAMETERS.PAGE)) || 1);

  const navigateToPage = (page: number) => (page > availablePages ? setCurrentPage(1) : setCurrentPage(page));
  return {
    fetching: {
      error,
      artWorks,
      isLoading,
      startFetching,
      searchDebounced,
    },
    pagination: {
      currentPage,
      total,
      availablePages,
      navigateToPage,
    },
  };
}
