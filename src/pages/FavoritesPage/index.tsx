import {
  StyledBookmark,
  StyledHeading,
  StyledMessage,
  StyledTitle,
  StyledTitleWrapper,
  StyledWrapper,
} from './styled.tsx';
import Grid from '@components/Grid';
import { useCallback, useContext } from 'react';
import Card from '@components/Card';
import { ArtworksContext } from '@context';
import Loader from '@components/Loader';
import { Artwork } from '@types';

function FavoritesPage() {
  const context = useContext(ArtworksContext);

  const handleFavorite = useCallback((artwork: Artwork) => context?.toggleArtwork(artwork), [context]);
  const isFavorite = (artwork: Artwork) => Boolean(context?.isFavorite(artwork));

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
      {context?.loading && <Loader />}
      {!context?.loading && (
        <Grid $columns={3} $gap={16}>
          {context?.artworks.map((artwork) => (
            <Card
              size="sm"
              key={artwork.id}
              artwork={artwork}
              onFavorite={handleFavorite}
              isFavorite={isFavorite(artwork)}
            />
          ))}
        </Grid>
      )}
      {!context?.loading && context?.error && <StyledMessage>{context.error}</StyledMessage>}
    </StyledWrapper>
  );
}

export default FavoritesPage;
