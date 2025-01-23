import styled from 'styled-components';
import Status from '@assets/icons/status.svg';

export const StyledError = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  max-width: 30%;
  min-width: 300px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const StyledStatus = styled(Status)`
  width: 160px;
  height: 160px;

  & path {
    stroke: ${({ theme }) => theme.colors.error};
  }
`;
