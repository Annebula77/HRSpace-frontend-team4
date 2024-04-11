import { type FC } from 'react';
import { StyledArticle, StyledH2, StyledH3, StyledSection } from './finalCalculationsStyles';


interface FinalCalculationsProps {
  finalAmount: number | null;

}

const FinalCalculations: FC<FinalCalculationsProps> = ({
  finalAmount,
}) => {
  const formattedFinalAmount = finalAmount?.toLocaleString('ru-RU');
  const awardPerEmployee = () => {
    if (!finalAmount) {
      return;
    }

    const formattedAmount = (finalAmount * 0.8).toLocaleString('ru-RU');
    // eslint-disable-next-line consistent-return
    return formattedAmount;
  };
  const serviceFee = () => {
    if (!finalAmount) {
      return;
    }

    const formattedAmount = (finalAmount * 0.2).toLocaleString('ru-RU');
    // eslint-disable-next-line consistent-return
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
