import {
  StyledWrapper,
  StyledInput,
  Select,
  StyledTitle,
  StyledHeading,
  StyledGrid,
  StyledSection,
  StyledError,
  StyledStatus,
} from './styled.ts';
import Card from '@components/Card';
import Loader from '@components/Loader';
import { useFetch, useSearch } from '@hooks';
import Pagination from '@components/Pagination';

function MainPage() {
  const { fetching, pagination, searching } = useSearch();
  const { error, isLoading, artWorks } = fetching;
  const { total, currentPage, availablePages, navigateToPage } = pagination;
  const { searchInput, handleSearchInput } = searching;

  const recommendedData = useFetch();

  return (
    <StyledWrapper>
      <StyledSection>
        <StyledTitle>
          let's find some <Select>art</Select> here!
        </StyledTitle>
        <StyledInput value={searchInput} onChange={handleSearchInput} placeholder="Search art, artist, work..." />
      </StyledSection>
      {!error && (
        <>
          {isLoading && <Loader />}
          {!isLoading && (
            <StyledSection>
              <StyledHeading
                title={searchInput ? `Found ${total} works of art` : 'Our special gallery'}
                subtitle={searchInput ? 'According to your request' : 'Topics for you'}
              />
              <StyledGrid $rows={1} $columns={3} $gap={60}>
                {artWorks.map((artWork) => (
                  <Card key={artWork.id} artWork={artWork} size="lg" />
                ))}
              </StyledGrid>
              <Pagination currentPage={currentPage} totalPages={availablePages} handleNavigate={navigateToPage} />
            </StyledSection>
          )}
        </>
      )}
      {!searchInput && !error && (
        <>
          {recommendedData.isLoading && <Loader />}
          {!recommendedData.isLoading && (
            <StyledSection>
              <StyledHeading title="Other works for you" subtitle="Here some more" />
              <StyledGrid $rows={3} $columns={3} $gap={16}>
                {recommendedData.artWorks.map((artWork) => (
                  <Card key={artWork.id} artWork={artWork} />
                ))}
              </StyledGrid>
            </StyledSection>
          )}
        </>
      )}
      {!isLoading && error && (
        <StyledError>
          <StyledStatus />
          {error}
        </StyledError>
      )}
    </StyledWrapper>
  );
}

export default MainPage;
