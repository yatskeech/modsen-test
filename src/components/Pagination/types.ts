export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  closePages?: number;
  endPages?: number;
  handleNavigate: (page: number) => void;
}
