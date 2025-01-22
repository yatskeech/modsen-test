import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledTitle = styled.h2`
  font-size: 32px;
  font-weight: 400;
`;

export const StyledSubtitle = styled.span`
  color: ${({ theme }) => theme.colors.second};
  font-size: 16px;
  font-weight: 400;
`;
