import styled from 'styled-components';
import Input from '@components/Input';
import Title from '@components/Title';
import Heading from '@components/Heading';
import search from '@assets/icons/search.svg?url';
import Status from '@assets/icons/status.svg';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 120px;
`;

export const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledTitle = styled(Title)`
  margin: 0 auto 72px;
  align-self: center;
`;

export const Select = styled.span`
  color: ${({ theme }) => theme.colors.accent};
`;

export const StyledInput = styled(Input)`
  max-width: 762px;
  width: 100%;
  position: relative;
  align-self: center;

  &::after {
    content: '';
    position: absolute;
    top: 16px;
    right: 16px;
    width: 32px;
    height: 32px;
    background-image: url(${`"${search}"`});
  }
`;

export const StyledHeading = styled(Heading)`
  margin-bottom: 40px;
  align-self: center;
`;

interface StyledGridProps {
  $rows: number;
  $columns: number;
  $gap: number;
}

export const StyledGrid = styled.div<StyledGridProps>`
  display: grid;
  grid-template-rows: repeat(${({ $rows }) => $rows}, 1fr);
  grid-template-columns: repeat(${({ $columns }) => $columns}, 1fr);
  gap: ${({ $gap }) => ($gap ? `${$gap}px` : '0')};
`;

export const StyledStatus = styled(Status)`
  width: 160px;
  height: 160px;

  & path {
    stroke: ${({ theme }) => theme.colors.error};
  }
`;

export const StyledError = styled.div`
  align-self: center;
  display: flex;
  align-items: center;
  gap: 32px;
  max-width: 30%;
  min-width: 300px;
  color: ${({ theme }) => theme.colors.primary};
`;
