import { useEffect, useState } from 'react';
import { fetchArtwork, fetchArtworks } from '@utils/api.ts';
import { ERROR_MESSAGES } from '@constants';
import { Artwork } from '@types';

type ArtworkFetchParams = { id: number };
type ArtworksFetchParams = { limit: number };
type FetchParams = ArtworkFetchParams | ArtworksFetchParams;

export function useFetch(params: FetchParams) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [data, setData] = useState<Artwork[] | Artwork | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        if ('id' in params) {
          const { data } = await fetchArtwork(params.id);
          setData(data);
          return;
        }

        const stringParams = Object.entries(params).map(([key, value]) => [key, value.toString()]);
        const urlSearchParams = new URLSearchParams(stringParams);
        const { pagination, data } = await fetchArtworks(urlSearchParams);

        setData(data);
        if (!pagination.total) {
          setError(ERROR_MESSAGES.NOT_FOUND);
        }
      } catch {
        setError(ERROR_MESSAGES.FETCHING);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params]);

  return { error, loading, data };
}
