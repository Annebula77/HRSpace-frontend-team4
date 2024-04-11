import styled from 'styled-components';
import { media } from '../../styles/breakpoints';

export const StyledContactsList = styled.ul`
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;

  ${media.md`
    margin-left: 20px;
  `}

  ${media.lg`
    margin: 0 40px;
    flex-direction: row;
    justify-content: space-between;
  `}


`;

export const StyledContactElement = styled.li`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  box-sizing: border-box;
  margin: 0 12px 0 0;
  list-style: none;

  ${media.xs`
    flex-direction: column;   
  `}

  ${media.lg`
    flex-direction: column;   
  `}

  ${media.xl`
    flex-direction: row;  
  `}
`;

export const StyledContactDetails = styled.div`
  margin-right: 8px; 
  font-size: 12px;
  font-weight: 300;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(48, 50, 51, 1);
 

  ${media.md`
    font-size: 13px;
    font-weight: 300;
    line-height: 20px;
    letter-spacing: 0em;
  `}

  ${media.lg`
    font-size: 14px;
    font-weight: 300;
    line-height: 20px;
    letter-spacing: 0em;
  `}
`;

export const StyledPhoneNumber = styled.div`
  font-size: 12px;
  font-weight: 300;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(48, 50, 51, 0.4);

  ${media.md`
    font-size: 13px;
    font-weight: 300;
    line-height: 20px;
    letter-spacing: 0em;
  `}

  ${media.lg`
    font-size: 14px;
    font-weight: 300;
    line-height: 20px;
    letter-spacing: 0em;
  `}
`;
