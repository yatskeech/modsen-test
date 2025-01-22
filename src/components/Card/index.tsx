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

function Card({ artWork, size = 'sm' }: CardProps) {
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
        <Button />
      </StyledContent>
    </StyledWrapper>
  );
}

export default Card;
