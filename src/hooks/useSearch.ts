import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import { ArtWork, ArtWorkParams } from '@types';
import { getArtWorks } from '@utils/api.ts';
import { useDebounce } from './useDebounce.ts';
import { ERROR_MESSAGES } from '@constants/index.ts';

export function useSearch() {
  const [searchInput, setSearchInput] = useState('');
  const [artWorks, setArtWorks] = useState<ArtWork[] | null>(null);

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setSearchInput(searchParams.get('q') || '');
  }, [searchParams]);

  useEffect(() => {
    if (!Array.isArray(artWorks)) {
      return;
    }

    if (!artWorks.length) {
      setError(ERROR_MESSAGES.NOT_FOUND);
    }
  }, [artWorks]);

  const search = useCallback(
    async (params: ArtWorkParams) => {
      try {
        setArtWorks(await getArtWorks(params));

        const urlSearchParams = new URLSearchParams(params as Record<string, string>);
        urlSearchParams.forEach((value, key) => value || urlSearchParams.delete(key));
        navigate(`/?${urlSearchParams}`);
      } catch {
        setError(ERROR_MESSAGES.FETCHING);
      } finally {
        setIsLoading(false);
      }
    },
    [navigate],
  );

  const searchDebounced = useDebounce(search, 500);
  const handleSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
    setError('');
    setIsLoading(true);
    setSearchInput(event.target.value);
  };

  useEffect(() => {
    searchDebounced({ q: searchInput });
  }, [searchDebounced, searchInput]);

  return { searchInput, handleSearchInput, artWorks, isLoading, error };
}
