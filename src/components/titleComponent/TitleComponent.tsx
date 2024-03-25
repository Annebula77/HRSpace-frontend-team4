import { type ReactNode } from 'react';
import styled from 'styled-components';

interface TitleProps {
  includeAsterisk?: boolean;
  children: ReactNode;
}

const Title = styled.h2<TitleProps>`
  margin: 0 0 12px;
  padding: 0;
  box-sizing: border-box;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.4;
  color: rgba(48, 50, 51, 1);
  
  span {
    margin: 0;
    padding: 0 0 0 8px;
    color: rgba(214, 0, 29, 1);
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 1.4;    
  }
`;

const TitleComponent: React.FC<TitleProps> = ({ includeAsterisk, children }) => (
  <Title>
    {children}
    {includeAsterisk && <span>*</span>}
  </Title>
);

export default TitleComponent;
