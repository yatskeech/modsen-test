import { useEffect, useState } from 'react';
import {
  StyledWrapper,
  StyledOverlay,
  StyledButton,
  StyledLine,
  StyledContent,
  StyledNav,
  StyledNavigationList,
} from './styled.ts';
import { useSearchParams } from 'react-router';

function Burger() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    setIsOpen(false);
  }, [searchParams]);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = 'auto';
      return;
    }

    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';
  }, [isOpen]);

  return (
    <>
      <StyledWrapper>
        <StyledOverlay $isOpen={isOpen} onClick={() => setIsOpen(false)} />
        <StyledContent $isOpen={isOpen}>
          <StyledNav>
            <StyledNavigationList />
          </StyledNav>
        </StyledContent>
      </StyledWrapper>
      <StyledButton $isOpen={isOpen} onClick={() => setIsOpen((isOpen) => !isOpen)}>
        <StyledLine $isOpen={isOpen} />
      </StyledButton>
    </>
  );
}

export default Burger;
