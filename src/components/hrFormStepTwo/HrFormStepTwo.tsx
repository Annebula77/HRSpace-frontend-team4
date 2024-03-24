import { type FC } from 'react';
import { TextField } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import InputWithText from '../inputWithText/InputWithText';
import SelectWithAutoComplete from '../selectWithAutocomplete/SelectWithAutoComplete';
import TitleComponent from '../titleComponent/TitleComponent';
import CheckboxWithStyles from '../checkboxWithStyles/CheckboxWithStyles';
import RadioInput from '../radioChip/RadioInput';
import { fetchCities } from '../../store/slices/citiesSlice';
import ErrorMessage from '../errorText/errorText';
import {
  updateWorkPlace,
  updateWorkFormat,
  updateEmploymentType,
  updateEmploymentRegistration,
  toggleAvailabilityDMS,
  updateCompensation,
  toggleDriverLicense,
  toggleHavingCar,
  updateCompanyDescriptions,
  FormErrors,
  COMPENSATION_OPTIONS,
} from '../../store/slices/secondPageSlice';

import {
  StyledDivTwoChildren,
  StyledLiCheckboxList,
  StyledLiInputList,
  StyledSection,
  StyledULCheckboxList,
  StyledUlInputList,
  StyledDivThreeChildren,
} from '../../styles/formStepsStyles';

interface HrFormStepOneProps {
  errors: FormErrors;
}

const HrFormStepTwo: FC<HrFormStepOneProps> = ({ errors }) => {
  const dispatch = useAppDispatch();
  const secondPageState = useAppSelector((state) => state.secondPage);
  const cities = useAppSelector((state) => state.cities.cities);

  return (
    <StyledSection>
      <StyledDivTwoChildren>
        <TitleComponent includeAsterisk>Место работы</TitleComponent>
        <SelectWithAutoComplete
          value={cities.find((spec) => spec.name === secondPageState.work_place) || null}
          options={cities}
          getOptionLabel={(option) => option.name}
          onChange={(selectedOption) => {
            if (!selectedOption) {
              dispatch(updateWorkPlace(null));
            } else {
              dispatch(updateWorkPlace(selectedOption.name));
              dispatch(fetchCities());
            }
          }}
          placeholder="Введите город"
        />
        <ErrorMessage errorText={errors?.cities} />
      </StyledDivTwoChildren>

      <StyledDivTwoChildren>
        <TitleComponent includeAsterisk>Формат работы</TitleComponent>
        <StyledUlInputList>
          <StyledLiInputList>
            <RadioInput
              id="1"
              name="office"
              checked={secondPageState.work_format === 'В офисе'}
              onChange={() => dispatch(updateWorkFormat('В офисе'))}
              label="В офисе"
            />
          </StyledLiInputList>
          <StyledLiInputList>
            <RadioInput
              id="2"
              name="hybrid"
              checked={secondPageState.work_format === 'Гибрид'}
              onChange={() => dispatch(updateWorkFormat('Гибрид'))}
              label="Гибрид"
            />
          </StyledLiInputList>
          <StyledLiInputList>
            <RadioInput
              id="3"
              name="remote"
              checked={secondPageState.work_format === 'Удаленка'}
              onChange={() => dispatch(updateWorkFormat('Удаленка'))}
              label="Удаленка"
            />
          </StyledLiInputList>
        </StyledUlInputList>
        <ErrorMessage errorText={errors?.work_format} />
      </StyledDivTwoChildren>

      <StyledDivTwoChildren>
        <TitleComponent includeAsterisk>Тип занятости</TitleComponent>
        <StyledUlInputList>
          <StyledLiInputList>
            <RadioInput
              id="4"
              name="fulltime"
              checked={secondPageState.employment_type === 'Полная'}
              onChange={() => dispatch(updateEmploymentType('Полная'))}
              label="Полная"
            />
          </StyledLiInputList>
          <StyledLiInputList>
            <RadioInput
              id="5"
              name="partial"
              checked={secondPageState.employment_type === 'Частичная'}
              onChange={() => dispatch(updateEmploymentType('Частичная'))}
              label="Частичная"
            />
          </StyledLiInputList>
          <StyledLiInputList>
            <RadioInput
              id="5"
              name="shift"
              checked={secondPageState.employment_type === 'По сменам'}
              onChange={() => dispatch(updateEmploymentType('По сменам'))}
              label="По сменам"
            />
          </StyledLiInputList>
          <StyledLiInputList>
            <RadioInput
              id="7"
              name="fifo"
              checked={secondPageState.employment_type === 'Вахта'}
              onChange={() => dispatch(updateEmploymentType('Вахта'))}
              label="Вахта"
            />
          </StyledLiInputList>
        </StyledUlInputList>
        <ErrorMessage errorText={errors?.employment_type} />
      </StyledDivTwoChildren>

      <StyledDivTwoChildren>
        <TitleComponent>Оформление сотрудника</TitleComponent>
        <StyledUlInputList>
          <StyledLiInputList>
            <RadioInput
              id="8"
              name="ll"
              checked={secondPageState.employee_registration === 'По ТК'}
              onChange={() => dispatch(updateEmploymentRegistration('По ТК'))}
              label="По ТК"
            />
          </StyledLiInputList>
          <StyledLiInputList>
            <RadioInput
              id="9"
              name="agreement"
              checked={secondPageState.employee_registration === 'По ГПХ'}
              onChange={() => dispatch(updateEmploymentRegistration('По ГПХ'))}
              label="По ГПХ"
            />
          </StyledLiInputList>
          <StyledLiInputList>
            <RadioInput
              id="10"
              name="self"
              checked={secondPageState.employee_registration === 'Самозанятость'}
              onChange={() => dispatch(updateEmploymentRegistration('Самозанятость'))}
              label="Самозанятость"
            />
          </StyledLiInputList>
          <StyledLiInputList>
            <RadioInput
              id="11"
              name="individual"
              checked={secondPageState.employee_registration === 'ИП'}
              onChange={() => dispatch(updateEmploymentRegistration('ИП'))}
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
          checked={secondPageState.availability_DMS}
          onChange={() => dispatch(toggleAvailabilityDMS(!secondPageState.availability_DMS))}
          label="Да"
        />
      </StyledDivTwoChildren>

      <StyledDivThreeChildren>
        <TitleComponent>Компенсация затрат</TitleComponent>
        <StyledULCheckboxList>
          <StyledLiCheckboxList>
            <CheckboxWithStyles
              id="13"
              name="meal"
              checked={secondPageState.compensation.includes(COMPENSATION_OPTIONS.meal)}
              onChange={() => dispatch(updateCompensation(COMPENSATION_OPTIONS.meal))}
              label="На питание"
            />
          </StyledLiCheckboxList>
          <StyledLiCheckboxList>
            <CheckboxWithStyles
              id="14"
              name="road"
              checked={secondPageState.compensation.includes(COMPENSATION_OPTIONS.road)}
              onChange={() => dispatch(updateCompensation(COMPENSATION_OPTIONS.road))}
              label="На транспорт"
            />
          </StyledLiCheckboxList>
          <StyledLiCheckboxList>
            <CheckboxWithStyles
              id="15"
              name="study"
              checked={secondPageState.compensation.includes(COMPENSATION_OPTIONS.study)}
              onChange={() => dispatch(updateCompensation(COMPENSATION_OPTIONS.study))}
              label="На обучение"
            />
          </StyledLiCheckboxList>
          <StyledLiCheckboxList>
            <CheckboxWithStyles
              id="16"
              name="living"
              checked={secondPageState.compensation.includes('На жилье')}
              onChange={() => dispatch(updateCompensation('На жилье'))}
              label="На жилье"
            />
          </StyledLiCheckboxList>
        </StyledULCheckboxList>
        <InputWithText
          onChange={(evt) => dispatch(updateCompensation(evt.target.value))}
          name="redeem"
          value={secondPageState.compensation.find(
            (value) => !Object.values(COMPENSATION_OPTIONS).includes(value),
          ) || ''}
          placeholder="Или введите свое...."
        />
      </StyledDivThreeChildren>

      <StyledDivTwoChildren>
        <TitleComponent>Наличие водительских прав</TitleComponent>
        <RadioInput
          id="17"
          name="dl"
          checked={secondPageState.driver_license}
          onChange={() => dispatch(toggleDriverLicense(!secondPageState.driver_license))}
          label="Да"
        />
      </StyledDivTwoChildren>

      <StyledDivTwoChildren>
        <TitleComponent>Наличие автомобиля</TitleComponent>
        <RadioInput
          id="18"
          name="dl"
          checked={secondPageState.having_car}
          onChange={() => dispatch(toggleHavingCar(!secondPageState.having_car))}
          label="Да"
        />
      </StyledDivTwoChildren>

      <StyledDivTwoChildren>
        <TitleComponent>Описание компании</TitleComponent>
        <TextField
          onChange={(evt) => dispatch(updateCompanyDescriptions(evt.target.value))}
          value={secondPageState.company_descriptions || ''}
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
