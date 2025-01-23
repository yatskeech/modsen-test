import { ArtWork, ArtWorkResponse, ArtWorksResponse } from '@types';

const URL = 'https://api.artic.edu/api/v1/artworks';
const FIELDS: (keyof ArtWork)[] = [
  'id',
  'title',
  'artist_title',
  'image_id',
  'credit_line',
  'date_display',
  'dimensions',
];

const FIElDS_PARAMS = new URLSearchParams({ fields: FIELDS.toString() });

export async function fetchArtWorks(params?: URLSearchParams): Promise<ArtWorksResponse> {
  const urlSearchParams = new URLSearchParams(params);
  const response = await fetch(`${URL}/search/?${FIElDS_PARAMS}&${urlSearchParams}`);

  if (!response.ok) {
    throw new Error('Failed to connect to the server');
  }

  return response.json();
}

export async function fetchArtWork(id: number): Promise<ArtWorkResponse> {
  const response = await fetch(`${URL}/${id}/?${FIElDS_PARAMS}&`);

  if (!response.ok) {
    throw new Error('Failed to connect to the server');
  }

  return response.json();
}
