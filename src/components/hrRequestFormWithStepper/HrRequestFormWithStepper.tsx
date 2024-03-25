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
} from '@mui/material';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchCategories } from '../../store/slices/categoriesSlice';
import { fetchCities } from '../../store/slices/citiesSlice';
import { setErrors } from '../../store/slices/firstPageSlice';
import { type FormErrors } from '../../types/types';
import { media } from '../../styles/breakpoints';
import CustomButton from '../button/CustomButton';
import HrFormStepOne from '../hrFormStepOne/HrFormStepOne';
import HrFormStepTwo from '../hrFormStepTwo/HrFormStepTwo';
import HrFormStepThree from '../hrFormStepThree/HrFormStepThree';
import HrFormStepFour from '../hrFormStepFour/HrFormStepFour';
import hrFormStepOneValidation from '../hrFormStepOne/hrFormStepOneValidation';
import hrFormStepThreeValidation from '../hrFormStepThree/hrFormStepThreeValidation';
import { firstPageSchema } from '../../models/firstPageSchema';
import { thirdPageSchema } from '../../models/thirdPageSchema';
import { POST_PAYMENT, POST_VACANCY, POST_CONDITIONS } from '../../utils/variables';
import hrFormStepTwoValidation from '../hrFormStepTwo/hrFormStepTwoValidation';
// import { firstPageSchema } from '../../models/firstPageSchema';
import { secondPageSchema } from '../../models/secondPageSchema';
// import { POST_VACANCY, POST_CONDITIONS } from '../../utils/variables';
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
      return <HrFormStepTwo errors={errors} />;
    case 2:
      return <HrFormStepThree errors={errors} />;
    case 3:
      return <HrFormStepFour />;
    default:
      return (
        <p>
          <HrRequestPreview
            occupation="Менеджер по продажам (Маркетинг, реклама, PR)"
            skills={
              ['Skill 1', 'Skill 2', 'Skill 3', 'Skill 4']
            }
            duties={
              [
                'Duty 1', 'Duty 2', 'Duty 3', 'Duty 4', 'Duty 5', 'Duty 6',
                'Duty 7', 'Duty 8', 'Duty 9', 'Duty 10', 'Duty 11', 'Duty 12',
                'Duty 13', 'Duty 14',
              ]
            }
            minSalaryValue="100000"
            maxSalaryValue="200000"
            experience="1-3 года"
            education="Высшее"
            workPlace="Москва"
            workFormat="В офисе"
            employmentType="Полная"
            registrationEmployee="по ТК"
            medInsurance="Да"
            compensations="На транспорт"
            description="Мы за всё хорошее и против всего плохого"
            searchPeriodBegin="13.03.2024"
            searchPeriodEnd="14.03.2024"
            feeModel="100% за выход сотрудника"
            fee="140 000"
            employeeNumber="1"
            hrExperience="3-6 лет"
            hrRequirements={
              [
                'Поиск и предоставление релевантного резюме',
                'Запрос рекомендаций с предыдущих мест работы',
              ]
            }
            resumeFormat={`Резюме кандидатов, с которыми проведено интервью,
              с комментариями по кандидату`}
            hrExtraRequirements="Живи по совести, не зная горести"
            companiesStopList={['ООО «Рога и копыта»', 'ООО «Копыта и Рога»']}
            employeesStopList={['Василий Пупкин', 'Дмитрий Нагиев']}
            attachedFile="filename.pdf"
          />
        </p>
      );
  }
};

const HrRequestFormWithStepper = () => {
  const dispatch = useAppDispatch();
  const firstPageState = useAppSelector((state) => state.firstPage);
  const thirdPageState = useAppSelector((state) => state.thirdPage);
  const secondPageState = useAppSelector((state) => state.secondPage);

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
      {
        const validationResultsStep1 = hrFormStepOneValidation(firstPageState);
        isValid = validationResultsStep1.isValid;
        newErrors = validationResultsStep1.newErrors;
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
        schema = thirdPageSchema;
        currentFormData = thirdPageState;
        url = POST_PAYMENT;
        break;
      }
      default:
        // eslint-disable-next-line no-console
        console.error('Unknown step');
        return;
    }

    dispatch(setErrors(newErrors));
    setHasErrors(!isValid);

    if (!isValid) {
      // eslint-disable-next-line no-console
      console.log('Form has errors');
      return;
    }

    const result = schema.safeParse(currentFormData);
    if (!result.success) {
      // eslint-disable-next-line no-console
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
      // eslint-disable-next-line no-console
      console.log('Data posted successfully', responseData);
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
        <Tooltip
          title={hasErrors ? 'Для перехода нужно заполнить все обязательные поля' : ''}
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 300 }}
          arrow
          placement="top"
          disableHoverListener={!hasErrors} // Отключаем Tooltip, если нет ошибок
        >
          <span style={{ flex: activeStep > 0 ? '1' : 'auto' }}> {/* Оборачиваем кнопку в span, так как Tooltip требует, чтобы его дочерний элемент мог принимать ref */}
            <CustomButton
              label={isLoading ? 'Загрузка...' : (activeStep === steps.length - 1 ? 'Закончить' : 'Далее')}
              primary={!hasErrors}
              size="large"
              onClick={handleSubmitAndPostData}
              // onClick={() => {
              //   setActiveStep((prev) => prev + 1);
              // }}
            >
              {activeStep === steps.length - 1 ? 'Закончить' : 'Далее'}
            </CustomButton>
          </span>
        </Tooltip>
      </ButtonBox>
    </StepsWrapper>
  );
};
export default HrRequestFormWithStepper;
