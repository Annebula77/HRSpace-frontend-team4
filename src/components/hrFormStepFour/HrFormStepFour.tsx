import { useState } from 'react';
import { TextField } from '@mui/material';
import TitleComponent from '../titleComponent/TitleComponent';
import CheckboxWithStyles from '../checkboxWithStyles/CheckboxWithStyles';
import RadioInput from '../radioChip/RadioInput';
import {
  StyledDivTwoChildren,
  StyledLiCheckboxList,
  StyledLiInputList,
  StyledSection,
  StyledUlInputList,
} from '../../styles/formStepsStyles';
import styled from 'styled-components';
import FinalCalculations from '../finalCalculations/FinalCalculations';
import FileUploader from '../fileUploader/FileUploader';


const CheckInputsInColumn = styled.ul`
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  gap: 12px;
`;

const HrFormStepFour = () => {
  const [inputValue, setInputValue] = useState('');

  const [isChecked, setIsChecked] = useState<boolean>(false);



  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value); // Обновляем значение инпута
  };


  return (
    <StyledSection>

      <StyledDivTwoChildren>
        <TitleComponent>Опыт работы рекрутёра</TitleComponent>
        <StyledUlInputList>
          <StyledLiInputList>
            <RadioInput
              id="1"
              name="beginner"
              checked={isChecked}
              onChange={() => setIsChecked((prev) => !prev)}
              label="1-3 лет"
            />
          </StyledLiInputList>
          <StyledLiInputList>
            <RadioInput
              id="2"
              name="middle"
              checked={!isChecked}
              onChange={() => setIsChecked((prev) => !prev)}
              label="3-6 лет"
            />
          </StyledLiInputList>
          <StyledLiInputList>
            <RadioInput
              id="3"
              name="senior"
              checked={!isChecked}
              onChange={() => setIsChecked((prev) => !prev)}
              label="от 6 лет"
            />
          </StyledLiInputList>
        </StyledUlInputList>
      </StyledDivTwoChildren>
      <StyledDivTwoChildren>
        <TitleComponent>Что входит в работу рекрутера?</TitleComponent>
        <CheckInputsInColumn>
          <StyledLiCheckboxList>
            <CheckboxWithStyles
              id="4"
              name="resumesearch"
              checked={isChecked}
              onChange={() => setIsChecked((prev) => !prev)}
              label="Поиск и предоставление релевантного резюме"
            />
          </StyledLiCheckboxList>
          <StyledLiCheckboxList>
            <CheckboxWithStyles
              id="5"
              name="interview"
              checked={isChecked}
              onChange={() => setIsChecked((prev) => !prev)}
              label="Организация собеседований с заказчиком, синхронизация по времени соискателя и заказчика"
            />
          </StyledLiCheckboxList>
          <StyledLiCheckboxList>
            <CheckboxWithStyles
              id="6"
              name="recommendations"
              checked={isChecked}
              onChange={() => setIsChecked((prev) => !prev)}
              label="Запрос рекомендаций с предыдущих мест работы"
            />
          </StyledLiCheckboxList>
          <StyledLiCheckboxList>
            <CheckboxWithStyles
              id="7"
              name="testing"
              checked={isChecked}
              onChange={() => setIsChecked((prev) => !prev)}
              label="Отправка кандидату тестового задания"
            />
          </StyledLiCheckboxList>
          <StyledLiCheckboxList>
            <CheckboxWithStyles
              id="8"
              name="security"
              checked={isChecked}
              onChange={() => setIsChecked((prev) => !prev)}
              label="Отправка кандидату анкеты службы безопасности вашей компании"
            />
          </StyledLiCheckboxList>
          <StyledLiCheckboxList>
            <CheckboxWithStyles
              id="9"
              name="invitation"
              checked={isChecked}
              onChange={() => setIsChecked((prev) => !prev)}
              label="Отправка финалисту приглашения на работу"
            />
          </StyledLiCheckboxList>
        </CheckInputsInColumn>
      </StyledDivTwoChildren >

      <StyledDivTwoChildren>
        <TitleComponent>В каком виде необходимо предоставить резюме кандидатов?</TitleComponent>
        <CheckInputsInColumn>
          <RadioInput
            id="10"
            name="notInterviewed"
            checked={!isChecked}
            onChange={() => setIsChecked((prev) => !prev)}
            label="Резюме без предварительного собеседовани"
          />
          <RadioInput
            id="12"
            name="interviewed"
            checked={!isChecked}
            onChange={() => setIsChecked((prev) => !prev)}
            label="Резюме кандидатов, с которыми проведено интервью, с комментариями по кандидат"
          />
        </CheckInputsInColumn>
      </StyledDivTwoChildren>

      <StyledDivTwoChildren>
        <TitleComponent>Дополнительные требования к рекрутёру</TitleComponent>
        <TextField
          onChange={onInputChange}
          value={inputValue}
          multiline
          maxRows={500}
          variant="outlined"
          placeholder="Дополнительная информация для рекрутёра: пожелания, основные принципы и ценности компании, рассказы о большом дружном коллективе :)"
          sx={{
            width: '100%',
            marginBottom: '12px',
            '& .MuiFormLabel-root': { color: 'rgba(186, 189, 191, 1)' },
            '& .MuiOutlinedInput-root': {
              minHeight: '128px',
              alignItems: 'flex-start',
              borderRadius: '8px',
              '& fieldset': {
                borderColor: 'rgba(186, 189, 191, 1)',
              },
              '&:hover fieldset': {
                border: '1px solid rgba(23, 133, 229, 1)',
              },
              '&.Mui-focused fieldset': {
                border: '2px solid rgba(23, 133, 229, 1)',
              },
            },
          }}
        />
        <CheckboxWithStyles
          id="13"
          name="legalEntities"
          checked={isChecked}
          onChange={() => setIsChecked((prev) => !prev)}
          label="Только для юридических лиц, ИП и самозанятых"
        />
      </StyledDivTwoChildren>

      <StyledDivTwoChildren>
        <TitleComponent>Стоп-лист компаний</TitleComponent>
        <TextField
          onChange={onInputChange}
          value={inputValue}
          multiline
          maxRows={500}
          variant="outlined"
          placeholder="Список компаний, с которыми вы не хотите сотрудничать"
          sx={{
            width: '100%',
            '& .MuiFormLabel-root': { color: 'rgba(186, 189, 191, 1)' },
            '& .MuiOutlinedInput-root': {
              minHeight: '128px',
              alignItems: 'flex-start',
              borderRadius: '8px',
              '& fieldset': {
                borderColor: 'rgba(186, 189, 191, 1)',
              },
              '&:hover fieldset': {
                border: '1px solid rgba(23, 133, 229, 1)',
              },
              '&.Mui-focused fieldset': {
                border: '2px solid rgba(23, 133, 229, 1)',
              },
            },
          }}
        />
      </StyledDivTwoChildren>

      <StyledDivTwoChildren>
        <TitleComponent>Стоп-лист сотрудников</TitleComponent>
        <TextField
          onChange={onInputChange}
          value={inputValue}
          multiline
          maxRows={500}
          variant="outlined"
          placeholder="Имена и фамилии соискателей, которых вы не готовы рассматривать"
          sx={{
            width: '100%',
            '& .MuiFormLabel-root': { color: 'rgba(186, 189, 191, 1)' },
            '& .MuiOutlinedInput-root': {
              minHeight: '128px',
              alignItems: 'flex-start',
              borderRadius: '8px',
              '& fieldset': {
                borderColor: 'rgba(186, 189, 191, 1)',
              },
              '&:hover fieldset': {
                border: '1px solid rgba(23, 133, 229, 1)',
              },
              '&.Mui-focused fieldset': {
                border: '2px solid rgba(23, 133, 229, 1)',
              },
            },
          }}
        />
      </StyledDivTwoChildren>
      <StyledDivTwoChildren>
        <TitleComponent>Дополнительные файлы для рекрутёра</TitleComponent>
        <FileUploader />
      </StyledDivTwoChildren>
      <FinalCalculations
        finalAmount={0}
        awardPerEmployee={0}
        serviceFee={0}
      />

    </StyledSection >
  );
};
export default HrFormStepFour;
