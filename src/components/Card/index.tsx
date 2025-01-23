import { CardProps } from './types.ts';
import {
  StyledAuthor,
  StyledImage,
  StyledInfo,
  StyledContent,
  StyledStatus,
  StyledTitle,
  StyledWrapper,
  StyledImageBox,
} from './styled.ts';
import Button from '@components/Button';
import { DEFAULT_VALUE } from '@constants';
import { MouseEvent } from 'react';

function Card({ artwork, isFavorite, onFavorite, size = 'sm' }: CardProps) {
  const handleFavorite = (event: MouseEvent) => {
    event.preventDefault();
    onFavorite(artwork);
  };

  return (
    <StyledWrapper to={`/${artwork.id}`} $size={size}>
      <StyledImageBox $size={size}>
        <StyledImage $imageId={artwork.image_id} $size={size} />
      </StyledImageBox>
      <StyledContent $size={size}>
        <StyledInfo $size={size}>
          <div>
            <StyledTitle>{artwork.title || DEFAULT_VALUE.title}</StyledTitle>
            <StyledAuthor>{artwork.artist_title || DEFAULT_VALUE.artist_title}</StyledAuthor>
          </div>
          <StyledStatus>Public</StyledStatus>
        </StyledInfo>
        <Button onClick={handleFavorite} $isFavorite={isFavorite} />
      </StyledContent>
    </StyledWrapper>
  );
}

export default Card;
