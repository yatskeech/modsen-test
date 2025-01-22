import styled, { css } from 'styled-components';
import museum from '@assets/icons/museum.svg?url';
import { Link } from 'react-router';

const getImageUrl = (imageId: string, { width, height }: { width?: number; height?: number }) =>
  `https://www.artic.edu/iiif/2/${imageId}/full/${width || ''},${height || ''}/0/default.jpg`;

interface Props {
  $size: 'sm' | 'lg';
}

export const StyledWrapper = styled(Link)<Props>`
  position: relative;

  ${({ $size }) =>
    ({
      sm: css`
        display: flex;
        align-items: center;
        gap: 16px;
        padding: 20px 12px;
        background-color: white;
        overflow: hidden;
      `,
      lg: css`
        padding: 0 0 70px;
      `,
    })[$size]};
`;

export const StyledImageBox = styled.div<Props>`
  position: relative;
  z-index: ${({ $size }) => ($size == 'sm' ? '1' : 0)};
`;

interface StyledImageProps extends Props {
  $imageId: string;
}

export const StyledImage = styled.div<StyledImageProps>`
  position: relative;

  ${({ $imageId, $size }) =>
    ({
      sm: css`
        flex-shrink: 0;
        width: 80px;
        height: 80px;
        background:
          url(${getImageUrl($imageId, { height: 80 })}) center center no-repeat,
          url(${`"${museum}"`}) center center no-repeat;
        background-size:
          cover,
          60% 60%;
      `,
      lg: css`
        width: 100%;
        height: 444px;
        background:
          url(${getImageUrl($imageId, { height: 444 })}) center center no-repeat,
          url(${`"${museum}"`}) center center no-repeat;
        background-size:
          cover,
          20% 20%;
      `,
    })[$size]};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border: 1px solid ${({ theme }) => theme.colors.second};
    z-index: -1;
  }
`;

export const StyledContent = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  ${({ $size }) =>
    ({
      sm: css`
        flex-grow: 1;
        overflow: hidden;
      `,
      lg: css`
        position: absolute;
        bottom: 0;
        left: 24px;
        right: 24px;
        padding: 20px 24px;
        background-color: white;
      `,
    })[$size]};
`;

export const StyledInfo = styled.div<Props>`
  flex-shrink: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-family: ${({ $size }) => ($size == 'sm' ? '"Inter", sans-serif' : '"Lexend Deca", "Inter", sans-serif')};
  line-height: 1.5;
`;

export const StyledTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  text-wrap: nowrap;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const StyledAuthor = styled.span`
  display: block;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.second};
  text-wrap: nowrap;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const StyledStatus = styled.span`
  font-size: 14px;
  font-weight: 700;
`;
