import { useSearchParams } from 'react-router';
import { ChangeEvent, useState } from 'react';
import { QUERY_PARAMETERS } from '@constants';

export function useSearchInput(resetPagination: () => void) {
  const [searchParams] = useSearchParams();
  const [searchInput, setSearchInput] = useState(() => searchParams.get(QUERY_PARAMETERS.SEARCH) || '');

  const handleSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
    resetPagination();
  };

  return { searchInput, handleSearchInput };
}
