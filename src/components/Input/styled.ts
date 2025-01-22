import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 100%;
  border: none;
  border-radius: 16px;
  background: rgba(57, 57, 57, 0.05);
  color: ${({ theme }) => theme.colors.primary};
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  padding: 24px 64px 24px 16px;
  outline: none;

  &::placeholder {
    color: #39393980;
  }
`;
