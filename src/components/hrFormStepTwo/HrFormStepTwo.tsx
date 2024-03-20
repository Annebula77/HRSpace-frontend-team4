import { useState } from 'react';
import { TextField } from '@mui/material';
import InputWithText from '../inputWithText/InputWithText';
import SelectWithAutoComplete, { type OptionType } from '../selectWithAutocomplete/SelectWithAutoComplete';
import TitleComponent from '../titleComponent/TitleComponent';
import CheckboxWithStyles from '../checkboxWithStyles/CheckboxWithStyles';
import RadioInput from '../radioChip/RadioInput';
import {
  StyledDivTwoChildren,
  StyledLiCheckboxList,
  StyledLiInputList,
  StyledSection,
  StyledULCheckboxList,
  StyledUlInputList,
  StyledDivThreeChildren,
} from '../../styles/formStepsStyles';

const HrFormStepTwo = () => {
  const [inputValue, setInputValue] = useState('');

  const [isChecked, setIsChecked] = useState<boolean>(false);

  const mockOptions = [
    { id: '1', name: 'Option 1' },
    { id: '2', name: 'Option 2' },
    { id: '3', name: 'Option 3' },
  ];

  // Заглушка для функции getOptionLabel, которая просто возвращает имя опции
  const mockGetOptionLabel = (option: OptionType) => option.name;

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value); // Обновляем значение инпута
  };
  const mockOnChange = (value: OptionType | null) => console.log('Selected:', value);

  return (
    <StyledSection>
      <StyledDivTwoChildren>
        <TitleComponent includeAsterisk>Место работы</TitleComponent>
        <SelectWithAutoComplete
          value={null}
          options={mockOptions}
          getOptionLabel={mockGetOptionLabel}
          onChange={mockOnChange}
          placeholder="Введите город"
        />
      </StyledDivTwoChildren>

      <StyledDivTwoChildren>
        <TitleComponent includeAsterisk>Формат работы</TitleComponent>
        <StyledUlInputList>
          <StyledLiInputList>
            <RadioInput
              id="1"
              name="office"
              checked={!isChecked}
              onChange={() => setIsChecked((prev) => !prev)}
              label="В офисе"
            />
          </StyledLiInputList>
          <StyledLiInputList>
            <RadioInput
              id="2"
              name="hybrid"
              checked={isChecked}
              onChange={() => setIsChecked((prev) => !prev)}
              label="Гибрид"
            />
          </StyledLiInputList>
          <StyledLiInputList>
            <RadioInput
              id="3"
              name="remote"
              checked={!isChecked}
              onChange={() => setIsChecked((prev) => !prev)}
              label="Удаленка"
            />
          </StyledLiInputList>
        </StyledUlInputList>
      </StyledDivTwoChildren>

      <StyledDivTwoChildren>
        <TitleComponent includeAsterisk>Тип занятости</TitleComponent>
        <StyledUlInputList>
          <StyledLiInputList>
            <RadioInput
              id="4"
              name="fulltime"
              checked={!isChecked}
              onChange={() => setIsChecked((prev) => !prev)}
              label="Полная"
            />
          </StyledLiInputList>
          <StyledLiInputList>
            <RadioInput
              id="5"
              name="partial"
              checked={isChecked}
              onChange={() => setIsChecked((prev) => !prev)}
              label="Частичная"
            />
          </StyledLiInputList>
          <StyledLiInputList>
            <RadioInput
              id="5"
              name="shift"
              checked={!isChecked}
              onChange={() => setIsChecked((prev) => !prev)}
              label="По сменам"
            />
          </StyledLiInputList>
          <StyledLiInputList>
            <RadioInput
              id="7"
              name="fifo"
              checked={!isChecked}
              onChange={() => setIsChecked((prev) => !prev)}
              label="Вахта"
            />
          </StyledLiInputList>
        </StyledUlInputList>
      </StyledDivTwoChildren>

      <StyledDivTwoChildren>
        <TitleComponent>Оформление сотрудника</TitleComponent>
        <StyledUlInputList>
          <StyledLiInputList>
            <RadioInput
              id="8"
              name="ll"
              checked={!isChecked}
              onChange={() => setIsChecked((prev) => !prev)}
              label="По ТК"
            />
          </StyledLiInputList>
          <StyledLiInputList>
            <RadioInput
              id="9"
              name="agreement"
              checked={isChecked}
              onChange={() => setIsChecked((prev) => !prev)}
              label="По ГПХ"
            />
          </StyledLiInputList>
          <StyledLiInputList>
            <RadioInput
              id="10"
              name="self"
              checked={!isChecked}
              onChange={() => setIsChecked((prev) => !prev)}
              label="Самозанятость"
            />
          </StyledLiInputList>
          <StyledLiInputList>
            <RadioInput
              id="11"
              name="individual"
              checked={!isChecked}
              onChange={() => setIsChecked((prev) => !prev)}
              label="ИП"
            />
          </StyledLiInputList>
        </StyledUlInputList>
      </StyledDivTwoChildren>

      <StyledDivTwoChildren>
        <TitleComponent>Наличие ДМС</TitleComponent>
        <RadioInput
          id="12"
          name="MedInsurance"
          checked={!isChecked}
          onChange={() => setIsChecked((prev) => !prev)}
          label="Да"
        />
      </StyledDivTwoChildren>

      <StyledDivThreeChildren>
        <TitleComponent includeAsterisk>Компенсация затрат</TitleComponent>
        <StyledULCheckboxList>
          <StyledLiCheckboxList>
            <CheckboxWithStyles
              id="13"
              name="meal"
              checked={isChecked}
              onChange={() => setIsChecked((prev) => !prev)}
              label="На питание"
            />
          </StyledLiCheckboxList>
          <StyledLiCheckboxList>
            <CheckboxWithStyles
              id="14"
              name="road"
              checked={isChecked}
              onChange={() => setIsChecked((prev) => !prev)}
              label="На транспорт"
            />
          </StyledLiCheckboxList>
          <StyledLiCheckboxList>
            <CheckboxWithStyles
              id="15"
              name="study"
              checked={isChecked}
              onChange={() => setIsChecked((prev) => !prev)}
              label="На обучение"
            />
          </StyledLiCheckboxList>
          <StyledLiCheckboxList>
            <CheckboxWithStyles
              id="16"
              name="living"
              checked={isChecked}
              onChange={() => setIsChecked((prev) => !prev)}
              label="На жилье"
            />
          </StyledLiCheckboxList>
        </StyledULCheckboxList>
        <InputWithText
          onChange={onInputChange}
          name="redeem"
          value={inputValue}
          placeholder="Или введите свое...."
        />
      </StyledDivThreeChildren>

      <StyledDivTwoChildren>
        <TitleComponent>Наличие водительских прав</TitleComponent>
        <RadioInput
          id="17"
          name="dl"
          checked={!isChecked}
          onChange={() => setIsChecked((prev) => !prev)}
          label="Да"
        />
      </StyledDivTwoChildren>

      <StyledDivTwoChildren>
        <TitleComponent>Наличие автомобиля</TitleComponent>
        <RadioInput
          id="18"
          name="dl"
          checked={!isChecked}
          onChange={() => setIsChecked((prev) => !prev)}
          label="Да"
        />
      </StyledDivTwoChildren>

      <StyledDivTwoChildren>
        <TitleComponent>Описание компании</TitleComponent>
        <TextField
          onChange={onInputChange}
          value={inputValue}
          multiline
          maxRows={500}
          variant="outlined"
          placeholder="Опишите вашу компанию: её краткая история, основные принципы и ценности или просто о своём дружном коллективе :)"
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

    </StyledSection>
  );
};
export default HrFormStepTwo;
