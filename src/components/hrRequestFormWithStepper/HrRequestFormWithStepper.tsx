import { useEffect, useState } from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  StepConnector,
  stepConnectorClasses,
  type StepIconProps,
  type Orientation,
} from '@mui/material';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchCategories } from '../../store/slices/categoriesSlice';
import { fetchCities } from '../../store/slices/citiesSlice';
import { FormErrors, setErrors } from '../../store/slices/firstPageSlice';
import { media } from '../../styles/breakpoints';
import CustomButton from '../button/CustomButton';
import HrFormStepOne from '../hrFormStepOne/HrFormStepOne';
import HrFormStepTwo from '../hrFormStepTwo/HrFormStepTwo';
import HrFormStepThree from '../hrFormStepThree/HrFormStepThree';
import HrFormStepFour from '../hrFormStepFour/HrFormStepFour';
import hrFormStepOneValidation from '../hrFormStepOne/hrFormStepOneValidation';
import { firstPageSchema } from '../../models/firstPageSchema';
import { POST_VACANCY } from '../../utils/variables';
import FormSkeleton from '../formSkeleton/FormSkeleton';

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
  background-color: 'transparent';
  padding: '24px 0';
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
  gap: 25px; 
`;

const getStepContent = (step: number, errors: FormErrors): JSX.Element | string => {
  switch (step) {
    case 0:
      return <HrFormStepOne errors={errors} />;
    case 1:
      return <HrFormStepTwo />;
    case 2:
      return <HrFormStepThree />;
    case 3:
      return <HrFormStepFour />;
    default:
      return <p>4</p>;
  }
};

const HrRequestFormWithStepper = () => {
  const dispatch = useAppDispatch();
  const firstPageState = useAppSelector((state) => state.firstPage);

  const categoriesIsLoading = useAppSelector((state) => state.categories.isLoading);
  const categoriesIsError = useAppSelector((state) => state.categories.isError);
  const categoriesErrorMessage = useAppSelector((state) => state.categories.errorMessage);

  const citiesIsLoading = useAppSelector((state) => state.cities.isLoading);
  const citiesIsError = useAppSelector((state) => state.cities.isError);
  const citiesErrorMessage = useAppSelector((state) => state.cities.errorMessage);

  const [activeStep, setActiveStep] = useState(0);
  const [orientation, setOrientation] = useState<Orientation>('horizontal');
  const [hasErrors, setHasErrors] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const steps = ['О вакансии', 'Условия работы', 'Об оплате', 'Дополнительно'];

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchCities());
  }, []);

  const isInitLoading = categoriesIsLoading || citiesIsLoading;
  const isInitError = categoriesIsError || citiesIsError;

  const handleSubmitAndPostData = async () => {
    let isValid = false;
    let newErrors = {};
    let schema;
    let currentFormData;
    let safeData;
    let url = '';

    switch (activeStep) {
      case 0:
        const validationResultsStep1 = hrFormStepOneValidation(firstPageState);
        isValid = validationResultsStep1.isValid;
        newErrors = validationResultsStep1.newErrors;
        schema = firstPageSchema;
        currentFormData = firstPageState;
        url = POST_VACANCY;
        break;
      default:
        console.error('Unknown step');
        return;
    }

    dispatch(setErrors(newErrors));
    setHasErrors(!isValid);

    if (!isValid) {
      console.log('Form has errors');
      return;
    }

    const result = schema.safeParse(currentFormData);
    if (!result.success) {
      console.error('Parsing errors', result.error);
      return;
    }
    safeData = result.data;
    setIsLoading(true);
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(safeData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Network response was not ok: ${errorText}`);
      }

      const responseData = await response.json();
      console.log('Data posted successfully', responseData);
      setActiveStep((prev) => prev + 1);
    } catch (error) {
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
        {getStepContent(activeStep, firstPageState.errors)}
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
        <CustomButton
          label={isLoading ? 'Загрузка...' : (activeStep === steps.length - 1 ? 'Закончить' : 'Далее')}
          primary={!hasErrors}
          size="large"
          onClick={handleSubmitAndPostData}
          style={{ flex: activeStep > 0 ? '1' : 'auto' }}
        >
          {activeStep === steps.length - 1 ? 'Закончить' : 'Далее'}
        </CustomButton>
      </ButtonBox>
    </StepsWrapper>
  );
};
export default HrRequestFormWithStepper;
