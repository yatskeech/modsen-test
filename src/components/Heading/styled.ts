import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 400;
`;

export const Subtitle = styled.span`
  color: ${({ theme }) => theme.colors.second};
  font-size: 16px;
  font-weight: 400;
`;
