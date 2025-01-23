import { createContext, ReactNode, useEffect, useState } from 'react';
import { Artwork } from '@types';
import { ArtworksData } from './types.ts';
import { ARTWORKS_KEY, ERROR_MESSAGES } from '@constants';
import { fetchArtwork } from '@utils/api.ts';

export const ArtworksContext = createContext<ArtworksData | null>(null);

export function ArtworksContextProvider({ children }: { children: ReactNode }) {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    const artworkIdsString = localStorage.getItem(ARTWORKS_KEY);

    if (!artworkIdsString) {
      return;
    }

    const artworkIds = JSON.parse(artworkIdsString);

    if (!Array.isArray(artworkIds)) {
      localStorage.removeItem(ARTWORKS_KEY);
      return;
    }

    const setFavoriteArtworks = async () => {
      try {
        const favoriteArtworks = await Promise.all(artworkIds.map(fetchArtwork));
        setArtworks(favoriteArtworks.map((a) => a.data));
      } catch {
        setArtworks([]);
        setError(ERROR_MESSAGES.FETCHING);
        localStorage.removeItem(ARTWORKS_KEY);
      } finally {
        setLoading(false);
      }
    };

    setFavoriteArtworks();
  }, []);

  useEffect(() => {
    setError(artworks.length ? '' : ERROR_MESSAGES.NO_FAVORITES);
    const artworkIds = artworks.map((a) => a.id);
    localStorage.setItem(ARTWORKS_KEY, JSON.stringify(artworkIds));
  }, [artworks]);

  const toggleArtwork = (artwork: Artwork) => {
    setArtworks((artworks) => {
      const filteredArtworks = artworks.filter((a) => a.id !== artwork.id);

      if (filteredArtworks.length === artworks.length) {
        return [artwork, ...artworks];
      }

      return filteredArtworks;
    });
  };

  const isFavorite = (artwork: Artwork): boolean => {
    return Boolean(artworks.find((a) => a.id === artwork.id));
  };

  return (
    <ArtworksContext.Provider value={{ artworks, error, loading, isFavorite, toggleArtwork }}>
      {children}
    </ArtworksContext.Provider>
  );
}
