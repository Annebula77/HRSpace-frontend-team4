import { type FC } from 'react';
import styled from 'styled-components';
import { Chip, Stack } from '@mui/material';
import {
  StyledSection,
  StyledDivTwoChildren,
} from '../../styles/formStepsStyles';

import { media } from '../../styles/breakpoints';

import FinalCalculations from '../finalCalculations/FinalCalculations';
import FloatingButton from '../floatingButton/FloatingButton';

interface PreviewProps {
  occupation: string;
  skills: string[],
  duties: string[],
  minSalaryValue: string,
  maxSalaryValue: string,
  experience: string,
  education: string,
  workPlace: string,
  workFormat: string,
  employmentType: string
  registrationEmployee: string
  medInsurance: string
  compensations: string
  description: string
  searchPeriodBegin: string
  searchPeriodEnd: string
  feeModel: string
  fee: string
  employeeNumber: string
  hrExperience: string
  hrRequirements: string[],
  resumeFormat: string,
  hrExtraRequirements: string,
  companiesStopList: string[],
  employeesStopList: string[],
  attachedFile: string,
}

const StyledSubSection = styled.div`
  width: 100%;
  margin: 8px 0 0;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(237, 239, 240, 1);

  ${media.md`
    margin: 10px 0 0;
    padding-bottom: 10px;
  `}

  ${media.lg`
    margin: 12px 0 0;
    padding-bottom: 12px;
  `}

  & h3 {
    margin: 0 0 18px;
    font-family: Arial;
    font-size: 14px;
    font-weight: 700;
    line-height: 16.8px;
    text-align: left;
    color: rgba(73, 75, 77, 1);

    ${media.md`
    margin: 0 0 20px;
    font-size: 16px;
    line-height: 17.8px;
  `}

    ${media.lg`
      margin: 0 0 32px;
      font-size: 18px;
      line-height: 19.8px;
    `}
  }
`;

const StyledSubSectionTitle = styled.h2`
  margin: 0 0 30px;
  font-family: Arial;
  font-size: 20px;
  font-weight: 700;
  line-height: 22px;
  text-align: left;
  color: rgba(73, 75, 77, 1);

  ${media.md`
    margin: 0 0 40px;
    font-size: 22px;
    line-height: 24px;
  `}

  ${media.lg`
    margin: 0 0 40px;
    font-size: 24px;
    line-height: 27.84px;
  `}
`;

const StyledElementTitle = styled.h4`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.4;
  color: rgba(48, 50, 51, 1);

  ${media.md`
    font-size: 14px;
  `}
`;

const StyledChip = styled(Chip)`
  && {
    height: 24px;
    border-radius: 8px;
    border-color: rgba(217, 224, 240, 1);
    background-color: rgba(237, 239, 240, 1);
    color: rgba(48, 50, 51, 1);
  }
`;

const StyledStack = styled(Stack)`
  && {
    width: 100%;
    margin: 12px auto 32px;
  }
`;

const StyledDivTwoChildrenRow = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin: 0 0 24px;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;

  ${media.sm`
    margin: 0 0 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  `}

  ${media.lg`
    margin: 0 0 32px;
  `}

  & div {
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    font-family: Arial;
    font-size: 13px;
    font-weight: 400;
    line-height: 19.6px;
    text-align: left;
    color: rgba(73, 75, 77, 1);

    ${media.md`
    font-size: 14px;
    `}
  };

  & span {
    color: rgba(149, 151, 153, 1);
  }

  & ul {
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
  }

  & li {
    padding: 0;
    margin: 0 0 6px;
    list-style: none;
    font-size: 13px;
    font-weight: 400;
    line-height: 19.6px;
    text-align: left;
    color: rgba(73, 75, 77, 1);

    ${media.md`
      font-size: 14px;
      margin: 0 0 12px;
    `}
  }

  & li:last-child {
    margin: 0;
  }
`;

const HrRequestPreview: FC<PreviewProps> = ({
  occupation,
  skills,
  duties,
  minSalaryValue,
  maxSalaryValue,
  experience,
  education,
  workPlace,
  workFormat,
  employmentType,
  registrationEmployee,
  medInsurance,
  compensations,
  description,
  searchPeriodBegin,
  searchPeriodEnd,
  feeModel,
  fee,
  employeeNumber,
  hrExperience,
  hrRequirements,
  resumeFormat,
  hrExtraRequirements,
  companiesStopList,
  employeesStopList,
  attachedFile,
}) => (
  <>
    <StyledSection>
      <StyledSubSection>
        <StyledSubSectionTitle>О вакансии</StyledSubSectionTitle>
        <div>
          <h3>{occupation}</h3>
          <StyledDivTwoChildren>
            <StyledElementTitle>Навыки</StyledElementTitle>
            <StyledStack direction="row" spacing={1} useFlexGap flexWrap="wrap">
              {skills.map((option) => (
                <StyledChip
                  key={option}
                  label={option}
                />
              ))}
            </StyledStack>
          </StyledDivTwoChildren>
          <StyledDivTwoChildren>
            <StyledElementTitle>Обязанности</StyledElementTitle>
            <StyledStack direction="row" spacing={1} useFlexGap flexWrap="wrap">
              {duties.map((option) => (
                <StyledChip
                  key={option}
                  label={option}
                />
              ))}
            </StyledStack>
          </StyledDivTwoChildren>

          <StyledDivTwoChildrenRow>
            <StyledElementTitle>Зарплата кандидата (до вычета НДФЛ)</StyledElementTitle>
            <div>
              От&nbsp;
              {minSalaryValue}
              &nbsp;до&nbsp;
              {maxSalaryValue}
              &nbsp;рублей&nbsp;
              <span>(зарплата для будущих кандидатов скрыта)</span>
            </div>
          </StyledDivTwoChildrenRow>
          <StyledDivTwoChildrenRow>
            <StyledElementTitle>Опыт работы кандидата</StyledElementTitle>
            <div>{experience}</div>
          </StyledDivTwoChildrenRow>
          <StyledDivTwoChildrenRow>
            <StyledElementTitle>Образование кандидата</StyledElementTitle>
            <div>{education}</div>
          </StyledDivTwoChildrenRow>
        </div>
      </StyledSubSection>
      <StyledSubSection>
        <StyledSubSectionTitle>Условия работы</StyledSubSectionTitle>
        <StyledDivTwoChildrenRow>
          <StyledElementTitle>Место работы</StyledElementTitle>
          <div>{workPlace}</div>
        </StyledDivTwoChildrenRow>
        <StyledDivTwoChildrenRow>
          <StyledElementTitle>Формат работы</StyledElementTitle>
          <div>{workFormat}</div>
        </StyledDivTwoChildrenRow>
        <StyledDivTwoChildrenRow>
          <StyledElementTitle>Тип занятости</StyledElementTitle>
          <div>{employmentType}</div>
        </StyledDivTwoChildrenRow>
        <StyledDivTwoChildrenRow>
          <StyledElementTitle>Оформление сотрудника</StyledElementTitle>
          <div>{registrationEmployee}</div>
        </StyledDivTwoChildrenRow>
        <StyledDivTwoChildrenRow>
          <StyledElementTitle>Наличие ДМС</StyledElementTitle>
          <div>{medInsurance}</div>
        </StyledDivTwoChildrenRow>
        <StyledDivTwoChildrenRow>
          <StyledElementTitle>Компенсация затрат</StyledElementTitle>
          <div>{compensations}</div>
        </StyledDivTwoChildrenRow>
        <StyledDivTwoChildrenRow>
          <StyledElementTitle>Описание компании</StyledElementTitle>
          <div>{description}</div>
        </StyledDivTwoChildrenRow>
      </StyledSubSection>
      <StyledSubSection>
        <StyledSubSectionTitle>Об оплате</StyledSubSectionTitle>
        <StyledDivTwoChildrenRow>
          <StyledElementTitle>Желаемый период поиска сотрудника</StyledElementTitle>
          <div>
            {searchPeriodBegin}
            &nbsp;&ndash;&nbsp;
            {searchPeriodEnd}
          </div>
        </StyledDivTwoChildrenRow>
        <StyledDivTwoChildrenRow>
          <StyledElementTitle>Модель оплаты</StyledElementTitle>
          <div>{feeModel}</div>
        </StyledDivTwoChildrenRow>
        <StyledDivTwoChildrenRow>
          <StyledElementTitle>Вознаграждение за одного сотрудника</StyledElementTitle>
          <div>{fee}</div>
        </StyledDivTwoChildrenRow>
        <StyledDivTwoChildrenRow>
          <StyledElementTitle>Количество сотрудников</StyledElementTitle>
          <div>{employeeNumber}</div>
        </StyledDivTwoChildrenRow>
      </StyledSubSection>
      <StyledSubSection>
        <StyledSubSectionTitle>Дополнительно</StyledSubSectionTitle>
        <StyledDivTwoChildrenRow>
          <StyledElementTitle>Опыт работы рекрутёра</StyledElementTitle>
          <div>{hrExperience}</div>
        </StyledDivTwoChildrenRow>
        <StyledDivTwoChildrenRow>
          <StyledElementTitle>Что входит в работу рекрутера?</StyledElementTitle>
          <ul>
            {hrRequirements.map((element, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={index}>{element}</li>
            ))}
          </ul>
        </StyledDivTwoChildrenRow>
        <StyledDivTwoChildrenRow>
          <StyledElementTitle>
            В каком виде необходимо предоставить резюме кандидатов?
          </StyledElementTitle>
          <div>{resumeFormat}</div>
        </StyledDivTwoChildrenRow>
        <StyledDivTwoChildrenRow>
          <StyledElementTitle>Дополнительные требования к рекрутёру</StyledElementTitle>
          <div>{hrExtraRequirements}</div>
        </StyledDivTwoChildrenRow>
        <StyledDivTwoChildrenRow>
          <StyledElementTitle>Стоп-лист компаний</StyledElementTitle>
          <ul>
            {companiesStopList.map((element, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={index}>{element}</li>
            ))}
          </ul>
        </StyledDivTwoChildrenRow>
        <StyledDivTwoChildrenRow>
          <StyledElementTitle>Стоп-лист сотрудников</StyledElementTitle>
          <ul>
            {employeesStopList.map((element, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={index}>{element}</li>
            ))}
          </ul>
        </StyledDivTwoChildrenRow>
        <StyledDivTwoChildrenRow>
          <StyledElementTitle>Приложение</StyledElementTitle>
          <div>{attachedFile}</div>
        </StyledDivTwoChildrenRow>
      </StyledSubSection>
      <FinalCalculations
        finalAmount={0}
        awardPerEmployee={0}
        serviceFee={0}
      />
    </StyledSection>
    <FloatingButton />
  </>
);

export default HrRequestPreview;
