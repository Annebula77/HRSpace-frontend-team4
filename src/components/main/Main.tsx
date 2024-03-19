import { type FC, ReactNode } from 'react';
import styled from 'styled-components';

interface MainProps {
  children: ReactNode;
}

const StyledMain = styled.main<MainProps>`
  box-sizing: border-box;
  width: 50%;
  display: flex;
  flex-direction: column;  
  padding: 0;
  margin: 0 auto;
`;



const Main: FC<MainProps> = (props) => {
  return (
    <StyledMain>
      {props.children}
    </StyledMain>
  )
}

export default Main;