import styled from 'styled-components';
import Status from '@assets/icons/status.svg';

export const StyledText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  font-size: 20px;
  margin: 0 auto;
  padding: 120px 0;
`;

export const StyledStatus = styled(Status)`
  width: 80px;
  height: 80px;

  & path {
    stroke: ${({ theme }) => theme.colors.error};
    opacity: 0.8;
  }
`;
