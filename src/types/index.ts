export interface ArtWork {
  id: number;
  title: string;
  artist_title: string;
  image_id: string;
  date_display: string;
  dimensions: string;
  credit_line: string;
}

export interface ArtWorkParams {
  q?: string;
  page?: string;
  limit?: string;
}

export interface ArtWorkResponse {
  pagination: {
    total: number;
    total_pages: number;
    current_page: number;
  };
  data: ArtWork[];
}
