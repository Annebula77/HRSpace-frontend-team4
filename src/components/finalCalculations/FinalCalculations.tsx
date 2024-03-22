import { type FC } from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const StyledArticle = styled.article`
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledH2 = styled.h2`
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.16;
  color: rgba(48, 50, 51, 1);
  margin: 0;
  padding: 0;
`;

const StyledH3 = styled.h3`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; 
  color: rgba(73, 75, 77, 1);
  margin: 0;
  padding: 0;
`;


interface FinalCalculationsProps {
  finalAmount: number;
  awardPerEmployee: number;
  serviceFee: number;
}

const FinalCalculations: FC<FinalCalculationsProps> = ({ finalAmount, awardPerEmployee, serviceFee }) => (
  <StyledSection>
    <StyledArticle>
      <StyledH2>Итоговая сумма:</StyledH2>
      <StyledH2>{finalAmount}</StyledH2>
    </StyledArticle>
    <StyledArticle>
      <StyledH3>Вознаграждение за одного сотрудника</StyledH3>
      <StyledH3>{awardPerEmployee}</StyledH3>
    </StyledArticle>
    <StyledArticle>
      <StyledH3>Комиссия сервиса 20% за одного сотрудника</StyledH3>
      <StyledH3>{serviceFee}</StyledH3>
    </StyledArticle>
  </StyledSection>
)

export default FinalCalculations;