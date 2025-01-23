export interface Artwork {
  id: number;
  title: string;
  artist_title: string;
  image_id: string;
  date_display: string;
  dimensions: string;
  credit_line: string;
}

export interface ArtworksResponse {
  pagination: {
    total: number;
    total_pages: number;
    current_page: number;
  };
  data: Artwork[];
}

export interface ArtworkResponse {
  data: Artwork;
}
