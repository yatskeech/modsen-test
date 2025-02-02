import styled from 'styled-components';
import NavigationList from 'components/NavigationList';

interface StyledProps {
  $isOpen: boolean;
}

export const StyledWrapper = styled.div`
  display: none;

  @media (max-width: 600px) {
    display: block;
  }
`;

export const StyledOverlay = styled.div<StyledProps>`
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgb(255, 255, 255, 0.75);
  z-index: 10;
  cursor: pointer;
`;

export const StyledContent = styled.div<StyledProps>`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 120px 32px;
  transform: ${({ $isOpen }) => ($isOpen ? 'translateX(0)' : 'translateX(100%)')};
  z-index: 11;
  transition: 0.3s;
`;

export const StyledNav = styled.nav`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledNavigationList = styled(NavigationList)`
  display: flex;
  flex-direction: column;
`;

export const StyledButton = styled.button<StyledProps>`
  display: none;

  &::before,
  &::after {
    content: '';
    width: 36px;
    height: 2px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.second};
    transform-origin: center center;
    transition: 0.3s;
  }

  &::before {
    transform: ${({ $isOpen }) => ($isOpen ? 'translateY(12px) rotate(45deg)' : '')};
  }

  &::after {
    transform: ${({ $isOpen }) => ($isOpen ? 'translateY(-12px) rotate(-45deg)' : '')};
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: absolute;
    top: 52px;
    right: 16px;
    z-index: 100;
    cursor: pointer;
    border: none;
    background: none;
  }
`;

export const StyledLine = styled.div<StyledProps>`
  width: 36px;
  height: 2px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.second};
  opacity: ${({ $isOpen }) => ($isOpen ? '0' : '1')};
  transition: 0.3s;
`;
