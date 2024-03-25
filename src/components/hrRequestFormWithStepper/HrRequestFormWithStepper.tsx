import { useEffect, useState } from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  StepConnector,
  stepConnectorClasses,
  type StepIconProps,
  type Orientation,
  Tooltip,
  Fade,
  Button,
} from '@mui/material';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchCategories } from '../../store/slices/categoriesSlice';
import { fetchCities } from '../../store/slices/citiesSlice';
import { type FormErrors } from '../../types/types';
import { media } from '../../styles/breakpoints';
import CustomButton from '../CustomButton/CustomButton';
import HrFormStepOne from '../hrFormStepOne/HrFormStepOne';
import HrFormStepTwo from '../hrFormStepTwo/HrFormStepTwo';
import HrFormStepThree from '../hrFormStepThree/HrFormStepThree';
import HrFormStepFour from '../hrFormStepFour/HrFormStepFour';
import hrFormStepOneValidation from '../hrFormStepOne/hrFormStepOneValidation';
import hrFormStepTwoValidation from '../hrFormStepTwo/hrFormStepTwoValidation';
import hrFormStepThreeValidation from '../hrFormStepThree/hrFormStepThreeValidation';
import hrFormStepFourValidation from '../hrFormStepFour/hrFormStepFourValidation';
import { firstPageSchema } from '../../models/firstPageSchema';
import { secondPageSchema } from '../../models/secondPageSchema';
import { thirdPageSchema } from '../../models/thirdPageSchema';
import { forthPageSchema } from '../../models/forthPageSchema';
import { type FirstPageFormData } from '../../store/slices/firstPageSlice';
import { type SecondPageFormData } from '../../store/slices/secondPageSlice';
import { type ThirdPageFormData } from '../../store/slices/thirdPageSlice';
import { ForthPageFormData, setErrorsFour } from '../../store/slices/forthPageSlice';
import { setErrors } from '../../store/slices/firstPageSlice';
import { setErrorsTwo } from '../../store/slices/secondPageSlice';
import { setErrorsThree } from '../../store/slices/thirdPageSlice';
import {
  POST_VACANCY, POST_CONDITIONS, POST_PAYMENT, POST_ADDITION,
} from '../../utils/variables';

import FormSkeleton from '../formSkeleton/FormSkeleton';
import HrRequestPreview from '../hrRequestPreview/HrRequestPreview';

const Line = styled.div<{ $completed: boolean }>`
  width: 300px;
  height: 3px;
  margin-top: 20px;
  background-color: ${({ $completed }) => ($completed ? 'rgba(23, 133, 229, 1)' : 'rgba(186, 189, 191, 1)')};


  ${media.sm`
      width: 100px;
      margin-top: 0;
    `}

    ${media.lg`
      width: 170px;
      margin-top: 0;
    `}
`;

const CustomStepIcon = ({ completed }: StepIconProps) => (
  <Line $completed={!!completed} />
);

const StyledStepper = styled(Stepper)`
  background-color: "transparent";
  padding: "24px 0";
 `;

const StyledStepConnector = styled(StepConnector)`
&.${stepConnectorClasses.alternativeLabel} {
  top: 10px;
  left: calc(-50% + 16px);
  right: calc(50% + 16px);
}
& .${stepConnectorClasses.line} {
  border-color: rgba(234, 234, 240, 1);
  border-top-width: 3px;
  border-radius: 1px;
  width: 0px;
}
`;

const StyledStep = styled(Step) <{ orientation: Orientation }>`
  & .MuiStepLabel-root {
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.4;
  color: rgba(186, 189, 191, 1);
    }

  & .MuiStepLabel-label {
    ${({ orientation }) => (orientation === 'vertical' ? 'margin-top: -20px !important;' : 'margin-top: -40px !important;')}
    color: rgba(186, 189, 191, 1);

    &.Mui-completed {
      color: rgba(48, 50, 51, 1);
    }
  }

`;

const StepsWrapper = styled.section`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 86px auto 0;
  padding: 0;
`;

const ButtonBox = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin: 0 0 86px;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 25px;

  
  ${media.sm`
    flex-direction: row;
    `}

`;

const getStepContent = (
  step: number,
  errors: FormErrors,
  firstPageState: FirstPageFormData,
  secondPageState: SecondPageFormData,
  thirdPageState: ThirdPageFormData,
  forthPageState: ForthPageFormData,
): JSX.Element | string => {
  switch (step) {
    case 0:
      return <HrFormStepOne errors={errors} />;
    case 1:
      return <HrFormStepTwo errors={errors} />;
    case 2:
      return <HrFormStepThree errors={errors} />;
    case 3:
      return <HrFormStepFour errors={errors} />;
    default:
      return (
        <HrRequestPreview
          occupation={firstPageState.job_title || ''}
          skills={firstPageState.skills}
          duties={firstPageState.responsibilities}
          minSalaryValue={firstPageState.min_salary || 0}
          maxSalaryValue={firstPageState.max_salary || 0}
          experience={firstPageState.experience || ''}
          education={firstPageState.education || ''}
          workPlace={secondPageState.work_place || ''}
          workFormat={secondPageState.work_format || ''}
          employmentType={secondPageState.employment_type || ''}
          registrationEmployee={secondPageState.employee_registration || ''}
          medInsurance={secondPageState.availability_DMS}
          compensations={secondPageState.compensation}
          description={secondPageState.company_descriptions || ''}
          searchPeriodBegin={thirdPageState.start_search || ''}
          searchPeriodEnd={thirdPageState.end_search || ''}
          feeModel={thirdPageState.payment_model || ''}
          fee={thirdPageState.reward || 0}
          employeeNumber={thirdPageState.number_employees || 0}
          hrExperience={forthPageState.recruiter_experience || ''}
          hrRequirements={forthPageState.recruiter_job || []}
          resumeFormat={forthPageState.type_resume || ''}
          hrExtraRequirements={forthPageState.additional_requirements || ''}
          companiesStopList={forthPageState.stoplist_companies || ''}
          employeesStopList={forthPageState.stoplist_employee || ''}
          attachedFile={forthPageState.file_url || ''}
        />
      );
  }
};

const HrRequestFormWithStepper = () => {
  const dispatch = useAppDispatch();
  const firstPageState = useAppSelector((state) => state.firstPage);
  const secondPageState = useAppSelector((state) => state.secondPage);
  const thirdPageState = useAppSelector((state) => state.thirdPage);
  const forthPageState = useAppSelector((state) => state.forthPage);

  const categoriesIsLoading = useAppSelector((state) => state.categories.isLoading);
  const categoriesIsError = useAppSelector((state) => state.categories.isError);
  const categoriesErrorMessage = useAppSelector((state) => state.categories.errorMessage);

  const citiesIsLoading = useAppSelector((state) => state.cities.isLoading);
  const citiesIsError = useAppSelector((state) => state.cities.isError);
  const citiesErrorMessage = useAppSelector((state) => state.cities.errorMessage);

  const errorsFirstPage = useAppSelector((state) => state.firstPage.errors);
  const errorsSecondPage = useAppSelector((state) => state.secondPage.errors);
  const errorsThirdPage = useAppSelector((state) => state.thirdPage.errors);

  const isInitLoading = categoriesIsLoading || citiesIsLoading;
  const isInitError = categoriesIsError || citiesIsError;

  const [activeStep, setActiveStep] = useState(0);
  const [orientation, setOrientation] = useState<Orientation>('horizontal');
  const [hasErrors, setHasErrors] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const steps = ['О вакансии', 'Условия работы', 'Об оплате', 'Дополнительно'];

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchCities());
    // eslint-disable react-hooks/exhaustive-deps
  }, []);

  // NOTE: временное решение
  const validateCurrentStep = () => {
    let isValid = true;
    let validationResults;

    switch (activeStep) {
      case 0:
        validationResults = hrFormStepOneValidation(firstPageState);
        break;
      case 1:
        validationResults = hrFormStepTwoValidation(secondPageState);
        break;
      case 2:
        validationResults = hrFormStepThreeValidation(thirdPageState);
        break;
      case 3:
        validationResults = hrFormStepFourValidation(forthPageState);
        break;
      default:
        break;
    }

    if (validationResults && !validationResults.isValid) {
      isValid = false;
    }

    setHasErrors(!isValid);
  };

  useEffect(() => {
    validateCurrentStep();
  }, [firstPageState, secondPageState, thirdPageState, forthPageState]);

  const handleSubmitAndPostData = async () => {
    let isValid = true;
    let newErrors = {};
    let schema;
    let currentFormData;
    let url = '';

    switch (activeStep) {
      case 0: {
        const validationResultsStep1 = hrFormStepOneValidation(firstPageState);
        isValid = validationResultsStep1.isValid;
        newErrors = validationResultsStep1.newErrors;
        dispatch(setErrors(newErrors));
        schema = firstPageSchema;
        currentFormData = firstPageState;
        url = POST_VACANCY;
        break;
      }

      case 1:
      {
        const validationResultsStep2 = hrFormStepTwoValidation(secondPageState);
        isValid = validationResultsStep2.isValid;
        newErrors = validationResultsStep2.newErrors;
        dispatch(setErrorsTwo(newErrors));
        schema = secondPageSchema;
        currentFormData = secondPageState;
        url = POST_CONDITIONS;
        break;
      }

      case 2:
      {
        const validationResultsStep3 = hrFormStepThreeValidation(thirdPageState);
        isValid = validationResultsStep3.isValid;
        newErrors = validationResultsStep3.newErrors;
        dispatch(setErrorsThree(newErrors));
        schema = thirdPageSchema;
        currentFormData = thirdPageState;
        url = POST_PAYMENT;
        break;
      }

      case 3: {
        const validationResultsStep4 = hrFormStepFourValidation(forthPageState);
        isValid = validationResultsStep4.isValid;
        newErrors = validationResultsStep4.newErrors;
        dispatch(setErrorsFour(newErrors));
        schema = forthPageSchema;
        currentFormData = forthPageState;
        url = POST_ADDITION;
        break;
      }

      default:
        console.error('Unknown step');
        return;
    }

    if (!isValid) {
      console.log('Form has errors');
      setHasErrors(true);
      return;
    }
    setHasErrors(false);

    const result = schema.safeParse(currentFormData);
    if (!result.success) {
      console.error('Parsing errors', result.error);
      return;
    }
    setIsLoading(true);
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(result),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Network response was not ok: ${errorText}`);
      }

      const responseData = await response.json();

      // NOTE: схема может не соответствовать контракту (не было точных схем),
      //  при работе с моками точно отключить
      const safeResponse = schema.safeParse(responseData);
      if (!safeResponse.success) {
        // eslint-disable-next-line no-console
        console.error('Parsing errors', safeResponse.error);
        return;
      }
      setActiveStep((prev) => prev + 1);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error posting data', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    function updateOrientation() {
      setOrientation(window.innerWidth < 576 ? 'vertical' : 'horizontal');
    }

    window.addEventListener('resize', updateOrientation);
    updateOrientation();

    return () => window.removeEventListener('resize', updateOrientation);
    // eslint-disable react-hooks/exhaustive-deps
  }, []);

  return (
    <StepsWrapper>
      {isInitLoading && <FormSkeleton />}
      {isInitError && (
        <div>
          Произошла ошибка при загрузке данных:
          {citiesErrorMessage || categoriesErrorMessage}
        </div>
      )}
      <StyledStepper
        activeStep={activeStep}
        orientation={orientation}
        alternativeLabel
        connector={<StyledStepConnector />}
      >
        {steps.map((label, index) => (
          <StyledStep key={label} orientation={orientation}>
            <StepLabel
              StepIconComponent={CustomStepIcon}
              StepIconProps={{ completed: activeStep === index }}
            >
              {label}
            </StepLabel>
          </StyledStep>
        ))}
      </StyledStepper>
      <div>
        {/* eslint-disable no-nested-ternary  */}
        {
          getStepContent(
            activeStep,
            activeStep === 0 ? errorsFirstPage
              : activeStep === 1 ? errorsSecondPage
                : activeStep === 2 ? errorsThirdPage : {},
            firstPageState,
            secondPageState,
            thirdPageState,
            forthPageState,
          )
        }
      </div>
      <ButtonBox>
        {activeStep > 0 && (
          <CustomButton
            label="Назад"
            primary
            size="large"
            onClick={() => {
              setActiveStep((prev) => prev - 1);
            }}
            disabled={activeStep === 0}
            style={{ flex: '1' }}
          >
            Назад
          </CustomButton>
        )}
        {activeStep === steps.length ? (
          <>
            <Button
              variant="outlined"
              size="large"
              onClick={() => { }}
              sx={{
                flex: 1,
                borderRadius: '8px',
              }}
            >
              Сохранить черновик
            </Button>
            <CustomButton
              label="Перейти к оплате"
              primary
              size="large"
              onClick={() => { /* Логика перехода к оплате */ }}
              style={{ flex: '1' }}
            >
              Перейти к оплате
            </CustomButton>
          </>
        ) : (
          <Tooltip
            title={hasErrors ? 'Для перехода нужно заполнить все обязательные поля' : ''}
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 300 }}
            arrow
            placement="top"
            disableHoverListener={!hasErrors}
          >
            <span style={{ flex: activeStep > 0 ? '1' : 'auto' }}>
              <CustomButton
                label={isLoading ? 'Загрузка...' : (activeStep === steps.length - 1 ? 'Закончить' : 'Далее')}
                primary={!hasErrors}
                size="large"
                onClick={handleSubmitAndPostData}
              >
                {activeStep === steps.length - 1 ? 'Закончить' : 'Далее'}
              </CustomButton>
            </span>
          </Tooltip>
        )}
      </ButtonBox>
    </StepsWrapper>
  );
};
export default HrRequestFormWithStepper;
