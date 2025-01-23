import styled from 'styled-components';
import { getImageUrl } from '@utils/api.ts';
import museum from '@assets/icons/museum.svg?url';
import ErrorMessage from '@components/ErrorMessage';

export const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 80px;
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  margin: 0 auto;
`;

export const StyledImageBox = styled.div`
  display: flex;
  position: relative;
  background: url(${`"${museum}"`}) center center no-repeat;
  background-size: 20% 20%;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border: 1px solid ${({ theme }) => theme.colors.second};
    z-index: 1;
  }
`;

interface StyledImageProps {
  $imageId: string;
}

export const StyledImage = styled.div<StyledImageProps>`
  width: 497px;
  height: 570px;
  background:
    ${({ $imageId }) => `url(${getImageUrl($imageId, { height: 444 })})`} center center no-repeat,
    url(${`"${museum}"`}) center center no-repeat;
  background-size:
    cover,
    20% 20%;
  z-index: 2;
`;

export const StyledButtonBox = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 3;
  border-radius: 50%;
  background-color: white;
`;

export const StyledContentBox = styled.div`
  max-width: 640px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledTitle = styled.h1`
  font-size: 32px;
  font-weight: 400;
  margin-bottom: 32px;
`;

export const StyledAuthor = styled.h2`
  font-size: 24px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.second};
`;

export const StyledDate = styled.span`
  font-weight: 700;
`;

export const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Select = styled.span`
  color: ${({ theme }) => theme.colors.second};
`;
