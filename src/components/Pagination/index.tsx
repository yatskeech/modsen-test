import { StyledButton, StyledWrapper } from './styled.ts';
import { PaginationProps } from './types.ts';
import { Fragment } from 'react';

function Pagination({ currentPage, totalPages, handleNavigate, closePages = 1, endPages = 2 }: PaginationProps) {
  const pages = Array.from({ length: totalPages })
    .map((_, i) => i + 1)
    .filter(
      (page) => page - 1 < endPages || totalPages - page < endPages || Math.abs(currentPage - page) <= closePages,
    );

  return (
    <StyledWrapper>
      {currentPage !== 1 && (
        <StyledButton onClick={() => handleNavigate(currentPage - 1)} key="prev" $isActive={false}>
          &lt;
        </StyledButton>
      )}
      {pages.map((page, index) => {
        const previousPage = pages[index - 1];
        const isSkipped = page > 1 && page - previousPage !== 1;

        return (
          <Fragment key={page}>
            {isSkipped && <span key="skip">...</span>}
            <StyledButton onClick={() => handleNavigate(page)} key={page} $isActive={page == currentPage}>
              {page}
            </StyledButton>
          </Fragment>
        );
      })}
      {currentPage !== totalPages && (
        <StyledButton onClick={() => handleNavigate(currentPage + 1)} key="next" $isActive={false}>
          &gt;
        </StyledButton>
      )}
    </StyledWrapper>
  );
}
export default Pagination;
