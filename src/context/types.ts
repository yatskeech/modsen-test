import { Artwork } from '@types';

export interface ArtworksData {
  artworks: Artwork[];
  error: string;
  loading: boolean;
  toggleArtwork: (artwork: Artwork) => void;
  isFavorite: (artwork: Artwork) => boolean;
}
