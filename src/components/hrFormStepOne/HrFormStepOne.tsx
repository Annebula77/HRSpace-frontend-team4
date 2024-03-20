import { useEffect, useState } from 'react';
import InputWithText from '../inputWithText/InputWithText';
import SelectWithAutoComplete, { type OptionType } from '../selectWithAutocomplete/SelectWithAutoComplete';
import TitleComponent from '../titleComponent/TitleComponent';
import SelectWithChips from '../selectWithChips/SelectWithChips';
import { SkillsListboxComponent, ResponsibilityListboxComponent } from '../../utils/MUICustomsForSelects';
import CheckboxWithStyles from '../checkboxWithStyles/CheckboxWithStyles';
import RadioInput from '../radioChip/RadioInput';
import {
  ForkInputStyles,
  StyledArticle,
  StyledDivTwoChildren,
  StyledLiCheckboxList,
  StyledLiInputList,
  StyledParagraph,
  StyledSection,
  StyledULCheckboxList,
  StyledUlInputList,
} from '../../styles/formStepsStyles';

const HrFormStepOne = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  useEffect(() => {
  }, [selectedValues]);

  const mockOptions = [
    { id: '1', name: 'Option 1' },
    { id: '2', name: 'Option 2' },
    { id: '3', name: 'Option 3' },
  ];

  const mockOptions1 = [
    'Option 4',
    'Option 5',
    'Option 6',
  ];

  // Заглушка для функции getOptionLabel, которая просто возвращает имя опции
  const mockGetOptionLabel = (option: OptionType) => option.name;

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value); // Обновляем значение инпута
  };
  const mockOnChange = (value: OptionType | null) => console.log('Selected:', value);

  const handleChange = (newValues: string[]) => {
    setSelectedValues(newValues);
  };

  return (
    <StyledSection>
      <StyledUlInputList>
        <StyledLiInputList>
          <TitleComponent includeAsterisk>Название должности</TitleComponent>
          <InputWithText
            onChange={onInputChange}
            name="occupation"
            value={inputValue}
            placeholder="Менеджер по продажам"
          />
        </StyledLiInputList>
        <StyledLiInputList>
          <TitleComponent includeAsterisk>Специализация</TitleComponent>
          <SelectWithAutoComplete
            value={null}
            options={mockOptions}
            getOptionLabel={mockGetOptionLabel}
            onChange={mockOnChange}
            placeholder="Выберите специалиацию"
          />
        </StyledLiInputList>
      </StyledUlInputList>
      <StyledDivTwoChildren>
        <TitleComponent includeAsterisk>Навыки</TitleComponent>
        <SelectWithChips
          options={mockOptions1}
          selectedValues={selectedValues}
          placeholder="Введите навыки или выберите из предложенных"
          onChange={handleChange}
          ListboxComponent={SkillsListboxComponent}
        />
      </StyledDivTwoChildren>
      <StyledDivTwoChildren>
        <TitleComponent includeAsterisk>Обязанности</TitleComponent>
        <SelectWithChips
          options={mockOptions1}
          selectedValues={selectedValues}
          placeholder="Введите обязанности или выберите из предложенных"
          onChange={handleChange}
          ListboxComponent={ResponsibilityListboxComponent}
        />
      </StyledDivTwoChildren>
      <StyledArticle>
        <TitleComponent includeAsterisk>Зарплата кандидата (до вычета НДФЛ)</TitleComponent>
        <ForkInputStyles>
          <InputWithText
            onChange={onInputChange}
            name=""
            value={inputValue}
            placeholder="от"
          />
          <InputWithText
            onChange={onInputChange}
            name=""
            value={inputValue}
            placeholder="до"
          />
          <StyledParagraph>рублей</StyledParagraph>
        </ForkInputStyles>
        <CheckboxWithStyles
          id="2"
          name="salary"
          checked={isChecked}
          onChange={() => setIsChecked((prev) => !prev)}
          label="Скрыть зарплату для будущих кандидатов"
        />
      </StyledArticle>
      <StyledDivTwoChildren>
        <TitleComponent includeAsterisk>Опыт работы кандидата</TitleComponent>
        <StyledUlInputList>
          <StyledLiInputList>
            <RadioInput
              id="2"
              name="without experience"
              checked={!isChecked}
              onChange={() => setIsChecked((prev) => !prev)}
              label="без опыта"
            />
          </StyledLiInputList>
          <StyledLiInputList>
            <RadioInput
              id="3"
              name="beginner"
              checked={isChecked}
              onChange={() => setIsChecked((prev) => !prev)}
              label="1-3 лет"
            />
          </StyledLiInputList>
          <StyledLiInputList>
            <RadioInput
              id="4"
              name="middle"
              checked={!isChecked}
              onChange={() => setIsChecked((prev) => !prev)}
              label="3-6 лет"
            />
          </StyledLiInputList>
          <StyledLiInputList>
            <RadioInput
              id="5"
              name="senior"
              checked={!isChecked}
              onChange={() => setIsChecked((prev) => !prev)}
              label="от 6 лет"
            />
          </StyledLiInputList>
        </StyledUlInputList>
      </StyledDivTwoChildren>
      <StyledDivTwoChildren>
        <TitleComponent includeAsterisk>Образование кандидата</TitleComponent>
        <StyledULCheckboxList>
          <StyledLiCheckboxList>
            <CheckboxWithStyles
              id="10"
              name="secondary"
              checked={isChecked}
              onChange={() => setIsChecked((prev) => !prev)}
              label="Среднее"
            />
          </StyledLiCheckboxList>
          <StyledLiCheckboxList>
            <CheckboxWithStyles
              id="11"
              name="secondary prof"
              checked={isChecked}
              onChange={() => setIsChecked((prev) => !prev)}
              label="Среднее профессиональное"
            />
          </StyledLiCheckboxList>
          <StyledLiCheckboxList>
            <CheckboxWithStyles
              id="12"
              name="almost higher"
              checked={isChecked}
              onChange={() => setIsChecked((prev) => !prev)}
              label="Неполное высшее"
            />
          </StyledLiCheckboxList>
          <StyledLiCheckboxList>
            <CheckboxWithStyles
              id="13"
              name="higher"
              checked={isChecked}
              onChange={() => setIsChecked((prev) => !prev)}
              label="Высшее"
            />
          </StyledLiCheckboxList>
        </StyledULCheckboxList>
      </StyledDivTwoChildren>
      <StyledDivTwoChildren>
        <TitleComponent>Возможность командировок</TitleComponent>
        <RadioInput
          id="7"
          name="trips"
          checked={!isChecked}
          onChange={() => setIsChecked((prev) => !prev)}
          label="Да"
        />
      </StyledDivTwoChildren>
    </StyledSection>
  );
};
export default HrFormStepOne;
