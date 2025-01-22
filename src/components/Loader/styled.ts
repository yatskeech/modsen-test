import styled, { keyframes } from 'styled-components';

const rotationAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const scaleAnimation = keyframes`
  0%,
  100% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
`;

export const StyledLoader = styled.span`
  width: 48px;
  height: 48px;
  display: block;
  margin: 15px auto;
  position: relative;
  box-sizing: border-box;
  animation: ${rotationAnimation} 1s linear infinite;

  &::after,
  &::before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    width: 24px;
    height: 24px;
    top: 0;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    animation: ${scaleAnimation} 1s infinite ease-in-out;
  }

  &::before {
    top: auto;
    bottom: 0;
    background-color: ${({ theme }) => theme.colors.accent};
    animation-delay: 0.5s;
  }
`;
