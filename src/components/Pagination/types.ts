export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  closePages?: number;
  endPages?: number;
  navigateToPage: (page: number) => void;
}
