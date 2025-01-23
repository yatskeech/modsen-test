export interface ArtWork {
  id: number;
  title: string;
  artist_title: string;
  image_id: string;
  date_display: string;
  dimensions: string;
  credit_line: string;
}

export interface ArtWorksResponse {
  pagination: {
    total: number;
    total_pages: number;
    current_page: number;
  };
  data: ArtWork[];
}

export interface ArtWorkResponse {
  data: ArtWork;
}
