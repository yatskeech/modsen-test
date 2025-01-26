import {
  StyledWrapper,
  StyledInput,
  Select,
  StyledTitle,
  StyledHeading,
  StyledSection,
  StyledErrorMessage,
  StyledLargeGrid,
  StyledSmallGrid,
} from './styled.ts';
import Card from '@components/Card';
import Loader from '@components/Loader';
import { useFetch, useSearch } from '@hooks';
import Pagination from '@components/Pagination';
import { Artwork } from '@types';
import { useContext, useMemo } from 'react';
import { ArtworksContext } from '@context';

function MainPage() {
  const { fetching, pagination, searching } = useSearch();
  const { error, loading, artworks } = fetching;
  const { total, currentPage, availablePages, navigateToPage } = pagination;
  const { searchInput, handleSearchInput } = searching;

  const params = useMemo(() => ({ limit: 9 }), []);
  const recommended = useFetch(params);
  const recommendedArtworks = recommended.data as Artwork[] | null;

  const context = useContext(ArtworksContext);

  const handleFavorite = (artwork: Artwork) => context?.toggleArtwork(artwork);
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
              <StyledLargeGrid>
                {artworks.map((artwork) => (
                  <Card
                    size="lg"
                    key={artwork.id}
                    artwork={artwork}
                    onFavorite={handleFavorite}
                    isFavorite={isFavorite(artwork)}
                  />
                ))}
              </StyledLargeGrid>
              <Pagination currentPage={currentPage} totalPages={availablePages} navigateToPage={navigateToPage} />
            </StyledSection>
          )}
        </>
      )}
      {!searchInput && !recommended.error && (
        <>
          {recommended.loading && <Loader />}
          {!recommended.loading && (
            <StyledSection>
              <StyledHeading title="Other works for you" subtitle="Here some more" />
              <StyledSmallGrid>
                {recommendedArtworks?.map((artwork) => (
                  <Card
                    key={artwork.id}
                    artwork={artwork}
                    onFavorite={() => handleFavorite(artwork)}
                    isFavorite={isFavorite(artwork)}
                  />
                ))}
              </StyledSmallGrid>
            </StyledSection>
          )}
        </>
      )}
      {!loading && error && <StyledErrorMessage message={error} />}
    </StyledWrapper>
  );
}

export default MainPage;
