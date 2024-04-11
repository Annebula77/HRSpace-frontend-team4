import styled from 'styled-components';

export const StyledFeeSection = styled.section`
    width: 100%;
    display:flex;
    flex-direction: column;
    margin: 0 0 86px;
    box-sizing: border-box;
  `;

export const StyledInputWrapper = styled.div`
  width: 170px;
  height: 48px;
  display:flex;
  align-items: center;
  margin: 0 0 12px 0;
  padding: 0;
  box-sizing: border-box;

  & span {
    margin: 0 0 0 7px;
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: left;
    padding-left: 12px;
    color: rgba(110, 113, 115, 1);
  }
`;