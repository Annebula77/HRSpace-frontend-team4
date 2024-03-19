import { type FC, ReactNode } from 'react';
import styled from 'styled-components';
import { media } from '../../styles/breakpoints';

interface MainProps {
  children: ReactNode;
}

const StyledMain = styled.main<MainProps>`
  box-sizing: border-box;
  width: 80%;
  display: flex;
  flex-direction: column;  
  padding: 0;
  margin: 0 auto;
  
  ${media.lg`
  width: 50%;
    `}
`;

const Main: FC<MainProps> = ({ children }) => (
  <StyledMain>
    {children}
  </StyledMain>
);

export default Main;
