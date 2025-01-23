import { StyledBookmarkIcon, StyledHomeIcon, StyledLink, StyledList } from '@components/NavigationList/styled.tsx';
import { NavigationListProps } from '@components/NavigationList/types.ts';

function NavigationList({ className }: NavigationListProps) {
  return (
    <StyledList className={className}>
      <li>
        <StyledLink to="/">
          <StyledHomeIcon />
          Home
        </StyledLink>
      </li>
      <li>
        <StyledLink to="/favorites">
          <StyledBookmarkIcon />
          Your favorites
        </StyledLink>
      </li>
    </StyledList>
  );
}

export default NavigationList;
