import { StyledBookmark, StyledHeading, StyledTitle, StyledTitleWrapper, StyledWrapper } from './styled.tsx';
import Grid from '@components/Grid';
import { useContext } from 'react';
import Card from '@components/Card';
import { ArtWorksContext } from '@context';
import Loader from '@components/Loader';
import ErrorMessage from '@components/ErrorMessage';

function FavoritesPage() {
  const context = useContext(ArtWorksContext);

  return (
    <StyledWrapper>
      <StyledTitleWrapper>
        <StyledTitle>Here are your</StyledTitle>
        <StyledTitle $isAccent>
          <StyledBookmark />
          favorites
        </StyledTitle>
      </StyledTitleWrapper>
      <StyledHeading title="Your favorites list" subtitle="Saved by you" />
      {context?.isLoading && <Loader />}
      {!context?.isLoading && (
        <Grid $columns={3} $gap={16}>
          {context?.artworks.map((artWork) => <Card key={artWork.id} artWork={artWork} size="sm" />)}
        </Grid>
      )}
      {!context?.isLoading && context?.error && <ErrorMessage message={context.error} />}
    </StyledWrapper>
  );
}

export default FavoritesPage;
