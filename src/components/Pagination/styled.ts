import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: end;
  gap: 10px;
  padding: 24px 0;
`;

interface StyledButtonProps {
  $isActive: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 4px;
  padding: 3px 10px;
  font-family: 'Lexend Deca', 'Inter', sans-serif;
  font-size: 18px;
  font-weight: ${({ $isActive }) => ($isActive ? '600' : '300')};
  color: ${({ theme, $isActive }) => ($isActive ? 'white' : theme.colors.primary)};
  background-color: ${({ theme, $isActive }) => ($isActive ? theme.colors.accent : 'transparent')};
  cursor: pointer;
`;
