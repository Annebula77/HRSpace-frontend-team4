import styled from 'styled-components';
import { media } from './breakpoints';

export const StyledSection = styled.section`
  width: 100%;
  box-sizing: border-box;
  margin: 86px 0 86px;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 32px;  
`;

export const StyledUlInputList = styled.ul`
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;

  ${media.md`
  flex-direction: row;
    `}
`;

export const StyledLiInputList = styled.li`
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: start;    
`;

export const StyledDivTwoChildren = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: start;
 `;

export const StyledDivThreeChildren = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: start;

  & > * {
    margin-top: 0;
  }

  & > *:last-child {
    margin-top: 12px;
  }
`;

export const StyledArticle = styled.article`
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 0 0 10px;
  display: flex;
  flex-direction: column;
  align-items: start;
  `;

export const ForkInputStyles = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 0 0 8px;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;

  ${media.md`
  flex-direction: row;
    `}
`;

export const StyledParagraph = styled.p` 
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.4;
  color: rgba(110, 113, 115, 1); 
  `;

export const StyledULCheckboxList = styled.ul`
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;

  ${media.md`
  flex-direction: row;
    `}
`;

export const StyledLiCheckboxList = styled.li`
box-sizing: border-box;
margin: 0;
padding: 0;
display: flex;
flex-direction: column;
align-items: start;
`;

export const ErrorContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin: 0 0 12px;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
