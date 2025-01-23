import { Artwork } from '@types';

export const ERROR_MESSAGES = {
  FETCHING: 'Failed to connect to the server. Please check your internet connection and try again later.',
  NOT_FOUND: 'No artworks found. Please try searching with different keywords or filters.',
  NO_FAVORITES: "You don't have any favorite artworks yet.",
};

export const MAX_ARTWORKS = 1000;

export const QUERY_PARAMETERS = {
  SEARCH: 'search',
  PAGE: 'page',
};

export const ARTWORKS_KEY = 'artworks';

export const DEFAULT_VALUE: Partial<Artwork> = {
  title: 'Untitled Work of Art',
  artist_title: 'Anonymous author',
};
