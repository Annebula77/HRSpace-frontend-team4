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
import { media } from '../../styles/breakpoints';
import CustomButton from '../button/CustomButton';
import HrFormStepOne from '../hrFormStepOne/HrFormStepOne';
import HrFormStepTwo from '../hrFormStepTwo/HrFormStepTwo';
import CalendarInput from '../сalendarInput/CalendarInput';

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

function getStepContent(step: number): JSX.Element | string {
  switch (step) {
    case 0:
      return <HrFormStepOne />;
    case 1:
      return <HrFormStepTwo />;
    case 2:
      return <CalendarInput value={null} onChange={() => { }} />;
    case 3:
      return <p>3</p>;
    default:
      return <p>4</p>;
  }
}

const HrRequestFormWithStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [orientation, setOrientation] = useState<Orientation>('horizontal');
  const steps = ['О вакансии', 'Условия работы', 'Об оплате', 'Дополнительно'];

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
        {getStepContent(activeStep)}
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
          label="Вперед"
          primary
          size="large"
          onClick={() => {
            setActiveStep((prev) => prev + 1);
          }}
          style={{ flex: activeStep > 0 ? '1' : 'auto' }}
        >
          {activeStep === steps.length - 1 ? 'Закончить' : 'Далее'}
        </CustomButton>
      </ButtonBox>
    </StepsWrapper>
  );
};
export default HrRequestFormWithStepper;
