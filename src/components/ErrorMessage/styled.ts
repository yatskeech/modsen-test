import styled from 'styled-components';
import Status from '@assets/icons/status.svg';

export const StyledError = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  max-width: 450px;
  min-width: 300px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const StyledStatus = styled(Status)`
  width: 80px;
  height: 80px;

  & path {
    stroke: ${({ theme }) => theme.colors.error};
    opacity: 0.8;
  }
`;
