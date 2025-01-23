import { StyledWrapper, StyledInput, Select, StyledTitle, StyledHeading, StyledSection } from './styled.ts';
import Card from '@components/Card';
import Loader from '@components/Loader';
import { useFetch, useSearch } from '@hooks';
import Pagination from '@components/Pagination';
import Grid from '@components/Grid';
import ErrorMessage from '@components/ErrorMessage';
import { Artwork } from '@types';
import { useCallback, useContext, useMemo } from 'react';
import { ArtworksContext } from '@context';

function MainPage() {
  const { fetching, pagination, searching } = useSearch();
  const { error, loading, artWorks } = fetching;
  const { total, currentPage, availablePages, navigateToPage } = pagination;
  const { searchInput, handleSearchInput } = searching;

  const params = useMemo(() => ({ limit: 9 }), []);
  const recommended = useFetch(params);
  const recommendedArtworks = recommended.data as Artwork[] | null;

  const context = useContext(ArtworksContext);

  const handleFavorite = useCallback((artwork: Artwork) => context?.toggleArtwork(artwork), [context]);
  const isFavorite = (artwork: Artwork) => Boolean(context?.isFavorite(artwork));

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
          {loading && <Loader />}
          {!loading && (
            <StyledSection>
              <StyledHeading
                title={searchInput ? `Found ${total} works of art` : 'Our special gallery'}
                subtitle={searchInput ? 'According to your request' : 'Topics for you'}
              />
              <Grid $rows={1} $columns={3} $gap={60}>
                {artWorks.map((artwork) => (
                  <Card
                    size="lg"
                    key={artwork.id}
                    artwork={artwork}
                    onFavorite={handleFavorite}
                    isFavorite={isFavorite(artwork)}
                  />
                ))}
              </Grid>
              <Pagination currentPage={currentPage} totalPages={availablePages} navigateToPage={navigateToPage} />
            </StyledSection>
          )}
        </>
      )}
      {!searchInput && !error && (
        <>
          {recommended.loading && <Loader />}
          {!recommended.loading && (
            <StyledSection>
              <StyledHeading title="Other works for you" subtitle="Here some more" />
              <Grid $rows={3} $columns={3} $gap={16}>
                {recommendedArtworks?.map((artwork) => (
                  <Card
                    key={artwork.id}
                    artwork={artwork}
                    onFavorite={() => handleFavorite(artwork)}
                    isFavorite={isFavorite(artwork)}
                  />
                ))}
              </Grid>
            </StyledSection>
          )}
        </>
      )}
      {!loading && error && <ErrorMessage message={error} />}
    </StyledWrapper>
  );
}

export default MainPage;
