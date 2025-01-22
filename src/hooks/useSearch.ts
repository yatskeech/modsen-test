import { useEffect } from 'react';
import { useSearchParams } from 'react-router';
import { usePaginate } from './usePaginate.ts';
import { QUERY_PARAMETERS } from '@constants';
import { useSearchInput } from './useSearchInput.ts';

export function useSearch() {
  const { fetching, pagination } = usePaginate();
  const { error, isLoading, artWorks, startFetching, searchDebounced } = fetching;
  const { currentPage, availablePages, total, navigateToPage } = pagination;

  const { searchInput, handleSearchInput } = useSearchInput(() => navigateToPage(1));
  const [, setSearchParams] = useSearchParams();

  useEffect(() => {
    startFetching();
    const params = new URLSearchParams({ q: searchInput, page: currentPage.toString(), limit: '3' });
    searchDebounced(params);
  }, [currentPage, searchInput, startFetching, searchDebounced]);

  useEffect(() => {
    setSearchParams({ [QUERY_PARAMETERS.SEARCH]: searchInput, [QUERY_PARAMETERS.PAGE]: currentPage.toString() });
  }, [searchInput, currentPage, setSearchParams]);

  return {
    fetching: {
      error,
      isLoading,
      artWorks,
    },
    pagination: {
      total,
      currentPage,
      availablePages,
      navigateToPage,
    },
    searching: {
      searchInput,
      handleSearchInput,
    },
  };
}
