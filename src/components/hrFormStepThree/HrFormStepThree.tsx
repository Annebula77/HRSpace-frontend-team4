import { useMemo, type FC, useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import TitleComponent from "../titleComponent/TitleComponent";
import RadioInput from "../radioChip/RadioInput";
import ErrorMessage from "../errorText/errorText";
import { type HrFormStepsProps } from "../../types/types";

import {
  StyledArticle,
  StyledDivTwoChildren,
  StyledLiInputList,
  StyledParagraph,
  StyledSection,
  StyledUlInputList,
} from "../../styles/formStepsStyles";
import {
  updateEmployeeNumber,
  updateStartSearch,
  updateEndSearch,
  updateRecruiterNumber,
  updatePaymentModel,
  updateReward,
  updateMinReward,
  updateMaxReward,
  updateRecommendedReward,
} from "../../store/slices/thirdPageSlice";
import Counter from "../counter/Counter";
import CalendarInput from "../calendarInput/CalendarInput";
import FeeSection from "../feeSection/FeeSection";
import FinalCalculations from "../finalCalculations/FinalCalculations";
import { media } from "../../styles/breakpoints";
import calculateSliderValues from "../../utils/calculateSliderValues";

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
  const firstPageState = useAppSelector((state) => state.firstPage);

  const { minSliderValue, maxSliderValue, recommendedValue } = useMemo(() => calculateSliderValues(
    firstPageState.min_salary ?? 0,
    firstPageState.max_salary ?? 0,
    thirdPageState.start_search,
    thirdPageState.end_search,
    thirdPageState.payment_model ?? "",
  ), [firstPageState.min_salary,
  firstPageState.max_salary,
  thirdPageState.start_search,
  thirdPageState.end_search,
  thirdPageState.payment_model]);

  useEffect(() => {
    dispatch(updateMinReward(minSliderValue));
    dispatch(updateMaxReward(maxSliderValue));
    dispatch(updateRecommendedReward(recommendedValue));
    // eslint-disable react-hooks/exhaustive-deps
  }, [minSliderValue, maxSliderValue, recommendedValue]);

  return (
    <StyledSection>
      <StyledDivTwoChildren>
        <TitleComponent>Количество сотрудников</TitleComponent>
        <Counter
          value={thirdPageState.number_employees || 1}
          min={1}
          max={5}
          onChange={(newValue) => dispatch(updateEmployeeNumber(newValue))}
        />
      </StyledDivTwoChildren>

      <StyledArticle>
        <TitleComponent includeAsterisk>Желаемый период поиска сотрудника</TitleComponent>
        <CalendarWrapper>
          <StyledParagraph>c</StyledParagraph>
          <div>
            <CalendarInput
              value={thirdPageState.start_search ? dayjs(new Date(thirdPageState.start_search)) : null}
              onChange={(newDate: Dayjs | null) => {
                if (newDate) {
                  dispatch(updateStartSearch(newDate.format("YYYY-MM-DD")));
                } else {
                  dispatch(updateStartSearch(null));
                }
              }}
              error={Boolean(errors.start_search)}
            />
            <ErrorMessage errorText={errors.start_search} />
          </div>
          <StyledParagraph>по</StyledParagraph>
          <div>
            <CalendarInput
              value={thirdPageState.end_search ? dayjs(new Date(thirdPageState.end_search)) : null}
              onChange={(newDate: Dayjs | null) => {
                if (newDate) {
                  dispatch(updateEndSearch(newDate.format("YYYY-MM-DD")));
                } else {
                  dispatch(updateEndSearch(null));
                }
              }}
              error={Boolean(errors.end_search)}
            />
            <ErrorMessage errorText={errors.end_search} />
          </div>
        </CalendarWrapper>
      </StyledArticle>
      <StyledDivTwoChildren>
        <TitleComponent>Количество рекрутеров</TitleComponent>
        <Counter
          value={thirdPageState.number_recruits || 1}
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
        <ErrorMessage errorText={errors.payment_model} />
      </StyledDivTwoChildren>
      <StyledDivTwoChildren>
        <TitleComponent includeAsterisk>Вознаграждение за сотрудника</TitleComponent>
        <FeeSection
          sliderValue={recommendedValue}
          onChange={(newValue: number) => {
            dispatch(updateReward(newValue));
          }}
          minValue={minSliderValue}
          maxValue={maxSliderValue}
          recommendedValue={recommendedValue}
          isError={Boolean(errors.recommendedReward)}
          errorMessage={errors.recommendedReward}
        />
      </StyledDivTwoChildren>

      <FinalCalculations
        finalAmount={thirdPageState.reward ? thirdPageState.reward : thirdPageState.recommendedReward}
      />
    </StyledSection>
  );
};
export default HrFormStepThree;
