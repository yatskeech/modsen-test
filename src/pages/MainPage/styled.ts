import styled from 'styled-components';
import Input from '@components/Input';
import Title from '@components/Title';
import Heading from '@components/Heading';
import search from '@assets/icons/search.svg?url';

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
