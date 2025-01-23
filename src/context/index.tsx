import { createContext, ReactNode, useEffect, useState } from 'react';
import { ArtWork } from '@types';
import { ArtWorksData } from './types.ts';
import { ARTWORKS_KEY, ERROR_MESSAGES } from '@constants';
import { fetchArtWork } from '@utils/api.ts';

export const ArtWorksContext = createContext<ArtWorksData | null>(null);

export function ArtWorksContextProvider({ children }: { children: ReactNode }) {
  const [artworks, setArtworks] = useState<ArtWork[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setIsLoading(true);
    const artworkIdsString = localStorage.getItem(ARTWORKS_KEY);

    if (!artworkIdsString) {
      return;
    }

    const artworkIds = JSON.parse(artworkIdsString);

    if (!Array.isArray(artworkIds)) {
      localStorage.removeItem(ARTWORKS_KEY);
      return;
    }

    const promiseArtworks = Promise.all(artworkIds.map(fetchArtWork));
    promiseArtworks
      .then((data) => {
        const artworks = data.map((x) => x.data);
        setArtworks(artworks);
      })
      .catch(() => {
        setArtworks([]);
        setError(ERROR_MESSAGES.FETCHING);
        localStorage.removeItem(ARTWORKS_KEY);
      })
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    setError(artworks.length ? '' : ERROR_MESSAGES.NO_FAVORITES);
    const artworkIds = artworks.map((artwork) => artwork.id);
    localStorage.setItem(ARTWORKS_KEY, JSON.stringify(artworkIds));
  }, [artworks]);

  const toggleArtwork = (artwork: ArtWork) => {
    setArtworks((artworks) => {
      const artworkIds = artworks.map((artwork) => artwork.id);

      if (artworkIds.includes(artwork.id)) {
        return artworks.filter((currentArtwork) => currentArtwork.id != artwork.id);
      }

      return [artwork, ...artworks];
    });
  };

  return (
    <ArtWorksContext.Provider value={{ artworks, error, isLoading, toggleArtwork }}>
      {children}
    </ArtWorksContext.Provider>
  );
}
