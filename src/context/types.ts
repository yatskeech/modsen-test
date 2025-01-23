import { ArtWork } from '@types';

export interface ArtWorksData {
  artworks: ArtWork[];
  error: string;
  isLoading: boolean;
  toggleArtwork: (artwork: ArtWork) => void;
}
