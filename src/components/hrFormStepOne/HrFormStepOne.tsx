import { type FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import InputWithText from '../inputWithText/InputWithText';
import SelectWithAutoComplete from '../selectWithAutocomplete/SelectWithAutoComplete';
import TitleComponent from '../titleComponent/TitleComponent';
import SelectWithChips from '../selectWithChips/SelectWithChips';
import { SkillsListboxComponent, ResponsibilityListboxComponent } from '../../utils/MUICustomsForSelects';
import { fetchCategory } from '../../store/slices/singleCategorySlice';
import ErrorMessage from '../errorText/errorText';
import {
  updateJobTitle,
  updateSpecialization,
  updateSkills,
  updateResponsibilities,
  updateMinSalary,
  updateMaxSalary,
  toggleHideSalary,
  updateExperience,
  updateEducation,
  toggleBusinessTrips,
} from '../../store/slices/firstPageSlice';
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
  ErrorContainer,
} from '../../styles/formStepsStyles';
import { type HrFormStepsProps } from '../../types/types';

const HrFormStepOne: FC<HrFormStepsProps> = ({ errors }) => {
  const dispatch = useAppDispatch();
  const firstPageState = useAppSelector((state) => state.firstPage);
  const categories = useAppSelector((state) => state.categories.categories);
  const skills = useAppSelector((state) => state.category.skills);
  const responsibilities = useAppSelector((state) => state.category.responsibilities);

  return (
    <StyledSection>
      <StyledUlInputList>
        <StyledLiInputList>
          <TitleComponent includeAsterisk>Название должности</TitleComponent>
          <InputWithText
            onChange={(evt) => dispatch(updateJobTitle(evt.target.value))}
            name="occupation"
            value={firstPageState.job_title || ''}
            placeholder="Менеджер по продажам"
          />
          <ErrorMessage errorText={errors.job_title} />
        </StyledLiInputList>

        <StyledLiInputList>
          <TitleComponent includeAsterisk>Специализация</TitleComponent>
          <SelectWithAutoComplete
            value={categories.find((spec) => spec.name === firstPageState.specialization) || null}
            options={categories}
            getOptionLabel={(option) => option.name}
            onChange={(selectedOption) => {
              if (!selectedOption) {
                dispatch(updateSpecialization(null));
              } else {
                dispatch(updateSpecialization(selectedOption.name));
                dispatch(fetchCategory(selectedOption.id));
              }
            }}
            placeholder="Выберите специалиацию"
          />
          <ErrorMessage errorText={errors.specialization} />
        </StyledLiInputList>
      </StyledUlInputList>
      <StyledDivTwoChildren>
        <TitleComponent includeAsterisk>Навыки</TitleComponent>
        <SelectWithChips
          options={skills}
          selectedValues={firstPageState.skills}
          onChange={(newSkills: string[]) => {
            dispatch(updateSkills(newSkills));
          }}
          ListboxComponent={SkillsListboxComponent}
          placeholder="Введите навыки или выберите из предложенных"
        />
        <ErrorMessage errorText={errors.skills} />
      </StyledDivTwoChildren>
      <StyledDivTwoChildren>
        <TitleComponent includeAsterisk>Обязанности</TitleComponent>
        <SelectWithChips
          options={responsibilities}
          selectedValues={firstPageState.responsibilities}
          onChange={(newResponsibilities: string[]) => {
            dispatch(updateResponsibilities(newResponsibilities));
          }}
          placeholder="Введите обязанности или выберите из предложенных"
          ListboxComponent={ResponsibilityListboxComponent}
        />
        <ErrorMessage errorText={errors.responsibilities} />
      </StyledDivTwoChildren>
      <StyledArticle>
        <TitleComponent includeAsterisk>Зарплата кандидата (до вычета НДФЛ)</TitleComponent>
        <ForkInputStyles>
          <ErrorContainer>
            <InputWithText
              onChange={((evt) => dispatch(updateMinSalary(+evt.target.value)))}
              name="min-salary"
              value={firstPageState.min_salary || ''}
              placeholder="от"
            />
            <ErrorMessage errorText={errors.min_salary} />
          </ErrorContainer>
          <ErrorContainer>
            <InputWithText
              onChange={((evt) => dispatch(updateMaxSalary(+evt.target.value)))}
              name="max-salary"
              value={firstPageState.max_salary || ''}
              placeholder="до"
            />
            <ErrorMessage errorText={errors.max_salary} />
          </ErrorContainer>
          <StyledParagraph>рублей</StyledParagraph>
        </ForkInputStyles>
        <CheckboxWithStyles
          id="hide-salary"
          name="salary"
          checked={firstPageState.hide_salary}
          onChange={() => dispatch(toggleHideSalary(!firstPageState.hide_salary))}
          label="Скрыть зарплату для будущих кандидатов"
        />
      </StyledArticle>
      <StyledDivTwoChildren>
        <TitleComponent includeAsterisk>Опыт работы кандидата</TitleComponent>
        <StyledUlInputList>
          <StyledLiInputList>
            <RadioInput
              id="experience-none"
              name="experience"
              checked={firstPageState.experience === 'без опыта'}
              onChange={() => dispatch(updateExperience('без опыта'))}
              label="без опыта"
            />
          </StyledLiInputList>
          <StyledLiInputList>
            <RadioInput
              id="experience-junior"
              name="experience"
              checked={firstPageState.experience === '1-3 лет'}
              onChange={() => dispatch(updateExperience('1-3 лет'))}
              label="1-3 лет"
            />
          </StyledLiInputList>
          <StyledLiInputList>
            <RadioInput
              id="experience-mid"
              name="experience"
              checked={firstPageState.experience === '3-6 лет'}
              onChange={() => dispatch(updateExperience('3-6 лет'))}
              label="3-6 лет"
            />
          </StyledLiInputList>
          <StyledLiInputList>
            <RadioInput
              id="experience-senior"
              name="experience"
              checked={firstPageState.experience === 'от 6 лет'}
              onChange={() => dispatch(updateExperience('от 6 лет'))}
              label="от 6 лет"
            />
          </StyledLiInputList>
        </StyledUlInputList>
        <ErrorMessage errorText={errors.experience} />
      </StyledDivTwoChildren>
      <StyledDivTwoChildren>
        <TitleComponent includeAsterisk>Образование кандидата</TitleComponent>
        <StyledULCheckboxList>
          <StyledLiCheckboxList>
            <CheckboxWithStyles
              id="edu-secondary"
              name="secondary"
              checked={firstPageState.education.includes('Среднее')}
              onChange={() => dispatch(updateEducation('Среднее'))}
              label="Среднее"
            />
          </StyledLiCheckboxList>
          <StyledLiCheckboxList>
            <CheckboxWithStyles
              id="edu-prof"
              name="secondary prof"
              checked={firstPageState.education.includes('Среднее профессиональное')}
              onChange={() => dispatch(updateEducation('Среднее профессиональное'))}
              label="Среднее профессиональное"
            />
          </StyledLiCheckboxList>
          <StyledLiCheckboxList>
            <CheckboxWithStyles
              id="edu-almostH"
              name="almost higher"
              checked={firstPageState.education.includes('Неполное высшее')}
              onChange={() => dispatch(updateEducation('Неполное высшее'))}
              label="Неполное высшее"
            />
          </StyledLiCheckboxList>
          <StyledLiCheckboxList>
            <CheckboxWithStyles
              id="edu-higher"
              name="higher"
              checked={firstPageState.education.includes('Высшее')}
              onChange={() => dispatch(updateEducation('Высшее'))}
              label="Высшее"
            />
          </StyledLiCheckboxList>
        </StyledULCheckboxList>
        <ErrorMessage errorText={errors.education} />
      </StyledDivTwoChildren>
      <StyledDivTwoChildren>
        <TitleComponent>Возможность командировок</TitleComponent>
        <RadioInput
          id="7"
          name="trips"
          checked={firstPageState.business_trips}
          onChange={() => dispatch(toggleBusinessTrips(!firstPageState.business_trips))}
          label="Да"
        />
      </StyledDivTwoChildren>
    </StyledSection>
  );
};
export default HrFormStepOne;
