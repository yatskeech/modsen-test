import { Artwork, ArtworkResponse, ArtworksResponse } from '@types';

const URL = 'https://api.artic.edu/api/v1/artworks';
const IMAGE_URL = 'https://www.artic.edu/iiif/2';
const FIELDS: (keyof Artwork)[] = [
  'id',
  'title',
  'artist_title',
  'image_id',
  'credit_line',
  'date_display',
  'dimensions',
];

const FIElDS_PARAMS = new URLSearchParams({ fields: FIELDS.toString() });

export const getImageUrl = (imageId: string, { width, height }: { width?: number; height?: number }) =>
  `${IMAGE_URL}/${imageId}/full/${width || ''},${height || ''}/0/default.jpg`;

export async function fetchArtworks(params?: URLSearchParams): Promise<ArtworksResponse> {
  const response = await fetch(`${URL}/search/?${FIElDS_PARAMS}&${params}`);

  if (!response.ok) {
    throw new Error('Failed to connect to the server');
  }

  return response.json();
}

export async function fetchArtwork(id: number): Promise<ArtworkResponse> {
  const response = await fetch(`${URL}/${id}/?${FIElDS_PARAMS}&`);

  if (!response.ok) {
    throw new Error('Failed to connect to the server');
  }

  return response.json();
}
