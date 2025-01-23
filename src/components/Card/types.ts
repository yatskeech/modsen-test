import { Artwork } from '@types';

export interface CardProps {
  artwork: Artwork;
  isFavorite: boolean;
  onFavorite: (artwork: Artwork) => void;
  size?: 'sm' | 'lg';
}
