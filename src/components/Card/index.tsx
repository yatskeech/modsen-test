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
import { useContext } from 'react';
import { ArtWorksContext } from '../../context';

function Card({ artWork, size = 'sm' }: CardProps) {
  const context = useContext(ArtWorksContext);

  return (
    <StyledWrapper to={`/${artWork.id}`} $size={size}>
      <StyledImageBox $size={size}>
        <StyledImage $imageId={artWork.image_id} $size={size} />
      </StyledImageBox>
      <StyledContent $size={size}>
        <StyledInfo $size={size}>
          <div>
            <StyledTitle>{artWork.title || 'Untitled Work of Art'}</StyledTitle>
            <StyledAuthor>{artWork.artist_title || 'Anonymous author'}</StyledAuthor>
          </div>
          <StyledStatus>Public</StyledStatus>
        </StyledInfo>
        <Button
          onClick={(event) => {
            event.preventDefault();
            context!.toggleArtwork(artWork);
          }}
          $isFavorite={context!.artworks.map((x) => x.id).includes(artWork.id)}
        />
      </StyledContent>
    </StyledWrapper>
  );
}

export default Card;
