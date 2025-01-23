import {
  StyledBookmark,
  StyledGrid,
  StyledHeading,
  StyledMessage,
  StyledTitle,
  StyledTitleWrapper,
  StyledWrapper,
} from './styled.tsx';
import { useCallback, useContext } from 'react';
import Card from '@components/Card';
import { ArtworksContext } from '@context';
import Loader from '@components/Loader';
import { Artwork } from '@types';

function FavoritesPage() {
  const context = useContext(ArtworksContext);

  const handleFavorite = useCallback((artwork: Artwork) => context?.toggleArtwork(artwork), [context]);
  const isFavorite = (artwork: Artwork) => Boolean(context?.isFavorite(artwork));

  if (context?.loading) {
    return <Loader />;
  }

  return (
    <StyledWrapper>
      <StyledTitleWrapper>
        <StyledTitle>Here are your</StyledTitle>
        <StyledTitle $accent>
          <StyledBookmark />
          favorites
        </StyledTitle>
      </StyledTitleWrapper>
      {!context?.error && <StyledHeading title="Your favorites list" subtitle="Saved by you" />}
      {!context?.loading && (
        <StyledGrid>
          {context?.artworks.map((artwork) => (
            <Card
              size="sm"
              key={artwork.id}
              artwork={artwork}
              onFavorite={handleFavorite}
              isFavorite={isFavorite(artwork)}
            />
          ))}
        </StyledGrid>
      )}
      {context?.error && <StyledMessage>{context.error}</StyledMessage>}
    </StyledWrapper>
  );
}

export default FavoritesPage;
