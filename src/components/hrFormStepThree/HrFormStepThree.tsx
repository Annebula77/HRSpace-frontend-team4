import { type FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import styled from 'styled-components';
import TitleComponent from '../titleComponent/TitleComponent';
import RadioInput from '../radioChip/RadioInput';
import ErrorMessage from '../errorText/errorText';
import { type HrFormStepsProps } from '../../types/types';

import {
  StyledArticle,
  StyledDivTwoChildren,
  StyledLiInputList,
  StyledParagraph,
  StyledSection,
  StyledUlInputList,
} from '../../styles/formStepsStyles';
import {
  updateEmployeeNumber,
  updateStartSearch,
  updateEndSearch,
  updateRecruiterNumber,
  updatePaymentModel,
  updateReward,
  setErrors
} from '../../store/slices/thirdPageSlice';
import { type FormErrors } from '../../types/types';
import Counter from '../counter/Counter';
import CalendarInput from '../calendarInput/CalendarInput';
import FeeSection from '../feeSection/FeeSection';
import FinalCalculations from '../finalCalculations/FinalCalculations';
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

const HrFormStepThree: FC<HrFormStepsProps> = ({ errors }) => {

  const dispatch = useAppDispatch();
  const thirdPageState = useAppSelector((state) => state.thirdPage);


  return (
    <StyledSection>
      <StyledDivTwoChildren>
        <TitleComponent>Количество сотрудников</TitleComponent>
        <Counter
          value={thirdPageState.number_employees || 0}
          min={1}
          max={5}
          onChange={(newValue) => dispatch(updateEmployeeNumber(newValue))}
        />
      </StyledDivTwoChildren>

      <StyledArticle>
        <TitleComponent includeAsterisk>Желаемый период поиска сотрудника</TitleComponent>
        <CalendarWrapper>
          <StyledParagraph>c</StyledParagraph>
          <CalendarInput
            value={thirdPageState.start_search ? new Date(thirdPageState.start_search) : null}
            onChange={(newDate) => dispatch(updateStartSearch(newDate))}
          />
          <StyledParagraph>по</StyledParagraph>
          <CalendarInput
            value={thirdPageState.end_search ? new Date(thirdPageState.end_search) : null}
            onChange={(newDate) => dispatch(updateEndSearch(newDate))}
          />
        </CalendarWrapper>
      </StyledArticle>

      <StyledDivTwoChildren>
        <TitleComponent>Количество рекрутеров</TitleComponent>
        <Counter
          value={thirdPageState.number_recruits || 0}
          min={1}
          max={5}
          onChange={(newValue) => dispatch(updateRecruiterNumber(newValue))}
        />
      </StyledDivTwoChildren>

      <StyledDivTwoChildren>
        <TitleComponent includeAsterisk>Выберите модель оплаты </TitleComponent>
        <StyledUlInputList>
          <StyledLiInputList>
            <RadioInput
              id="prepayment"
              name="payment"
              checked={thirdPageState.payment_model === "100% за выход сотрудника"}
              onChange={() => dispatch(updatePaymentModel("100% за выход сотрудника"))}
              label="100% за выход сотрудника"
            />
          </StyledLiInputList>
          <StyledLiInputList>
            <RadioInput
              id="partial"
              name="payment"
              checked={thirdPageState.payment_model === "50% за выход 50% по окончании испытательного срока"}
              onChange={() => dispatch(updatePaymentModel("50% за выход 50% по окончании испытательного срока"))}
              label="50% за выход 50% по окончании испытательного срока"
            />
          </StyledLiInputList>
          <StyledLiInputList>
            <RadioInput
              id="post-payment"
              name="payment"
              checked={thirdPageState.payment_model === "100% по окончании испытательного срока (1 месяц)"}
              onChange={() => dispatch(updatePaymentModel("100% по окончании испытательного срока (1 месяц)"))}
              label="100% по окончании испытательного срока (1 месяц)"
            />
          </StyledLiInputList>
        </StyledUlInputList>
      </StyledDivTwoChildren>

      <StyledDivTwoChildren>
        <TitleComponent includeAsterisk>Вознаграждение за сотрудника</TitleComponent>
        <FeeSection
          model={thirdPageState.payment_model || ''}
          maxSalaryValue="700000"
          minSalaryValue="30000"
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
