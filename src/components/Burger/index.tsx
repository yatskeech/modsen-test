import { useEffect, useState } from 'react';
import {
  StyledWrapper,
  StyledOverlay,
  StyledOpenButton,
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

  return (
    <>
      <StyledWrapper>
        <StyledOverlay $isOpen={isOpen} />
        <StyledContent $isOpen={isOpen}>
          <StyledNav>
            <StyledNavigationList />
          </StyledNav>
        </StyledContent>
      </StyledWrapper>
      <StyledOpenButton $isOpen={isOpen} onClick={() => setIsOpen((a) => !a)}>
        <StyledLine $isOpen={isOpen} />
      </StyledOpenButton>
    </>
  );
}

export default Burger;
