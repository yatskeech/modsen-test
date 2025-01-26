import { StyledButton, StyledLeftArrow, StyledRightArrow, StyledWrapper } from './styled.ts';
import { PaginationProps } from './types.ts';
import { Fragment } from 'react';

function Pagination({ currentPage, totalPages, navigateToPage, closePages = 1, endPages = 1 }: PaginationProps) {
  const shouldShowPage = (page: number) =>
    page - 1 < endPages || totalPages - page < endPages || Math.abs(currentPage - page) <= closePages;

  const pages = Array.from({ length: totalPages })
    .map((_, i) => i + 1)
    .filter(shouldShowPage);

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <StyledWrapper>
      {!isFirstPage && (
        <StyledButton onClick={() => navigateToPage(currentPage - 1)} key="prev">
          <StyledLeftArrow />
        </StyledButton>
      )}
      {pages.map((page, index) => {
        const previousPage = pages[index - 1];
        const isSkipped = page > 1 && page - previousPage !== 1;

        return (
          <Fragment key={page}>
            {isSkipped && <span key="skip">...</span>}
            <StyledButton onClick={() => navigateToPage(page)} key={page} $isActive={page == currentPage}>
              {page}
            </StyledButton>
          </Fragment>
        );
      })}
      {!isLastPage && (
        <StyledButton onClick={() => navigateToPage(currentPage + 1)} key="next">
          <StyledRightArrow />
        </StyledButton>
      )}
    </StyledWrapper>
  );
}
export default Pagination;
