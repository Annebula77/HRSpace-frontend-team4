import { useEffect, useState } from 'react';
import TitleComponent from '../titleComponent/TitleComponent';
import RadioInput from '../radioChip/RadioInput';
import {
  ForkInputStyles,
  StyledArticle,
  StyledDivTwoChildren,
  StyledLiInputList,
  StyledParagraph,
  StyledSection,
  StyledUlInputList,
} from '../../styles/formStepsStyles';
import Counter from '../counter/Counter';
import CalendarInput from '../calendarInput/CalendarInput';
import FeeSection from '../feeSection/FeeSection';
import FinalCalculations from '../finalCalculations/FinalCalculations';
import styled from 'styled-components';
import { media } from '../../styles/breakpoints';

const CalendarWrapper = styled.div`
   width: 100%;
   box-sizing: border-box;
   margin: 0;
   padding: 0;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   gap: 12px;

   ${media.md`
  flex-direction: row;
    `}
`;

const HrFormStepThree = () => {
  const [inputValue, setInputValue] = useState<string | number>('');
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  useEffect(() => {
  }, [selectedValues]);


  return (
    <StyledSection>
      <StyledDivTwoChildren>
        <TitleComponent>Количество сотрудников</TitleComponent>
        <Counter
          value={1}
          min={1}
          max={5}
          onChange={() => { }}
        />
      </StyledDivTwoChildren>

      <StyledArticle>
        <TitleComponent includeAsterisk>Желаемый период поиска сотрудника</TitleComponent>
        <CalendarWrapper>
          <StyledParagraph>c</StyledParagraph>
          <CalendarInput
            value={null}
            onChange={() => { }}
          />
          <StyledParagraph>по</StyledParagraph>
          <CalendarInput
            value={null}
            onChange={() => { }}
          />
        </CalendarWrapper>
      </StyledArticle>

      <StyledDivTwoChildren>
        <TitleComponent>Количество рекрутеров</TitleComponent>
        <Counter
          value={1}
          min={1}
          max={5}
          onChange={() => { }}
        />
      </StyledDivTwoChildren>

      <StyledDivTwoChildren>
        <TitleComponent includeAsterisk>Выберите модель оплаты </TitleComponent>
        <StyledUlInputList>
          <StyledLiInputList>
            <RadioInput
              id="1"
              name="prepayment"
              checked={!isChecked}
              onChange={() => setIsChecked((prev) => !prev)}
              label="100% за выход сотрудника"
            />
          </StyledLiInputList>
          <StyledLiInputList>
            <RadioInput
              id="2"
              name="partial"
              checked={isChecked}
              onChange={() => setIsChecked((prev) => !prev)}
              label="50% за выход 50% по окончании испытательного срока"
            />
          </StyledLiInputList>
          <StyledLiInputList>
            <RadioInput
              id="3"
              name="post-payment"
              checked={!isChecked}
              onChange={() => setIsChecked((prev) => !prev)}
              label="100% по окончании испытательного срока (1 месяц)"
            />
          </StyledLiInputList>
        </StyledUlInputList>
      </StyledDivTwoChildren>

      <StyledDivTwoChildren>
        <TitleComponent includeAsterisk>Вознаграждение за сотрудника</TitleComponent>
        <FeeSection
          model={'model 1'}
          maxSalaryValue='700000'
          minSalaryValue='30000'
        />
      </StyledDivTwoChildren>

      <FinalCalculations
        finalAmount={0}
        awardPerEmployee={0}
        serviceFee={0}
      />
    </StyledSection>
  );
};
export default HrFormStepThree;
