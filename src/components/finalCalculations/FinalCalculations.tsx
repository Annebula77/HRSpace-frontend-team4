import { type FC } from "react";
import styled from "styled-components";

const StyledSection = styled.div`
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
  finalAmount: number | null;

}

const FinalCalculations: FC<FinalCalculationsProps> = ({
  finalAmount,
}) => {
  const formattedFinalAmount = finalAmount?.toLocaleString("ru-RU");
  const awardPerEmployee = () => {
    if (!finalAmount) {
      return;
    }

    const formattedAmount = (finalAmount * 0.8).toLocaleString("ru-RU");
    return formattedAmount;
  };
  const serviceFee = () => {
    if (!finalAmount) {
      return;
    }
    const formattedAmount = (finalAmount * 0.2).toLocaleString("ru-RU");
    return formattedAmount;
  };
  return (
    <StyledSection>
      <StyledArticle>
        <StyledH2>Итоговая сумма:</StyledH2>
        <StyledH2>{formattedFinalAmount}</StyledH2>
      </StyledArticle>
      <StyledArticle>
        <StyledH3>Вознаграждение за одного сотрудника</StyledH3>
        <StyledH3>{awardPerEmployee()}</StyledH3>
      </StyledArticle>
      <StyledArticle>
        <StyledH3>Комиссия сервиса 20% за одного сотрудника</StyledH3>
        <StyledH3>{serviceFee()}</StyledH3>
      </StyledArticle>
    </StyledSection>
  );
};

export default FinalCalculations;
