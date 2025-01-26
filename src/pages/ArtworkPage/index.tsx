import {
  Select,
  StyledAuthor,
  StyledBox,
  StyledButtonBox,
  StyledContentBox,
  StyledDate,
  StyledErrorMessage,
  StyledImage,
  StyledImageBox,
  StyledTitle,
  StyledWrapper,
} from './styled.ts';
import { useContext, useMemo } from 'react';
import { useParams } from 'react-router';
import { DEFAULT_VALUE } from '@constants';
import { ArtworksContext } from '@context';
import Button from '@components/Button';
import { useFetch } from '@hooks';
import { Artwork } from '@types';
import Loader from '@components/Loader';

function ArtworkPage() {
  const context = useContext(ArtworksContext);

  const { id } = useParams();
  const params = useMemo(() => ({ id: Number(id) }), [id]);

  const { error, loading, data } = useFetch(params);
  const artwork = data as Artwork | null;

  const handleFavorite = () => artwork && context?.toggleArtwork(artwork);
  const isFavorite = artwork ? Boolean(context?.isFavorite(artwork)) : false;

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <StyledWrapper>
        <StyledErrorMessage message={error} />
      </StyledWrapper>
    );
  }

  return (
    <StyledWrapper>
      <StyledImageBox>
        <StyledImage $imageId={artwork?.image_id || ''} />
        <StyledButtonBox>
          <Button onClick={handleFavorite} $isFavorite={isFavorite} />
        </StyledButtonBox>
      </StyledImageBox>
      <StyledContentBox>
        <div>
          <StyledTitle>{artwork?.title || DEFAULT_VALUE.title}</StyledTitle>
          <StyledBox>
            <StyledAuthor>{artwork?.artist_title || DEFAULT_VALUE.artist_title}</StyledAuthor>
            <StyledDate>{artwork?.date_display}</StyledDate>
          </StyledBox>
        </div>
        <div>
          <StyledTitle>Overview</StyledTitle>
          <StyledBox>
            <span>
              <Select>Dimensions: </Select>
              {artwork?.dimensions}
            </span>
            <span>
              <Select>Credit Line: </Select>
              {artwork?.credit_line}
            </span>
            <span>Public</span>
          </StyledBox>
        </div>
      </StyledContentBox>
    </StyledWrapper>
  );
}

export default ArtworkPage;
