import { useEffect, useState } from 'react';
import { fetchArtWorks } from '@utils/api.ts';
import { ERROR_MESSAGES } from '@constants';
import { ArtWork } from '@types';

export function useFetch(size: number = 9) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [artWorks, setArtWorks] = useState<ArtWork[]>([]);

  useEffect(() => {
    const search = async () => {
      try {
        setIsLoading(true);
        const params = new URLSearchParams({ limit: size.toString() });
        const { pagination, data } = await fetchArtWorks(params);
        setArtWorks(data);

        if (!pagination.total) {
          setError(ERROR_MESSAGES.NOT_FOUND);
        }
      } catch {
        setError(ERROR_MESSAGES.FETCHING);
      } finally {
        setIsLoading(false);
      }
    };

    search();
  }, [size]);

  return { error, isLoading, artWorks };
}
