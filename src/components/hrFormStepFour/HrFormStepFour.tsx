import { type FC } from "react";
import { TextField } from "@mui/material";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import TitleComponent from "../titleComponent/TitleComponent";
import CheckboxWithStyles from "../checkboxWithStyles/CheckboxWithStyles";
import ErrorMessage from "../errorText/errorText";
import RadioInput from "../radioChip/RadioInput";
import { type HrFormStepsProps } from "../../types/types";
import {
  updateExperience,
  updateResponsibilities,
  updateResumeType,
  updateAdditionalRequirements,
  toggleLICheck,
  updateStopCompany,
  updateStopEmployee,
  updateFileUrl,
} from "../../store/slices/forthPageSlice";
import {
  StyledDivTwoChildren,
  StyledLiCheckboxList,
  StyledLiInputList,
  StyledSection,
  StyledUlInputList,
} from "../../styles/formStepsStyles";
import FinalCalculations from "../finalCalculations/FinalCalculations";
import FileUploader from "../fileUploader/FileUploader";

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

const HrFormStepFour: FC<HrFormStepsProps> = ({ errors }) => {
  const dispatch = useAppDispatch();
  const forthPageState = useAppSelector((state) => state.forthPage);
  const thirdPageState = useAppSelector((state) => state.thirdPage);
  return (
    <StyledSection>
      <StyledDivTwoChildren>
        <TitleComponent>Опыт работы рекрутёра</TitleComponent>
        <StyledUlInputList>
          <StyledLiInputList>
            <RadioInput
              id="beginner"
              name="beginner"
              checked={forthPageState.recruiter_experience === "1-3 лет"}
              onChange={() => dispatch(updateExperience("1-3 лет"))}
              label="1-3 лет"
            />
          </StyledLiInputList>
          <StyledLiInputList>
            <RadioInput
              id="middle"
              name="middle"
              checked={forthPageState.recruiter_experience === "3-6 лет"}
              onChange={() => dispatch(updateExperience("3-6 лет"))}
              label="3-6 лет"
            />
          </StyledLiInputList>
          <StyledLiInputList>
            <RadioInput
              id="senior"
              name="senior"
              checked={forthPageState.recruiter_experience === "от 6 лет"}
              onChange={() => dispatch(updateExperience("от 6 лет"))}
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
              id="resumeSearch"
              name="resumeSearch"
              checked={!!forthPageState.recruiter_job?.includes("Поиск и предоставление релевантного резюме")}
              onChange={() => dispatch(updateResponsibilities("Поиск и предоставление релевантного резюме"))}
              label="Поиск и предоставление релевантного резюме"
            />
          </StyledLiCheckboxList>
          <StyledLiCheckboxList>
            <CheckboxWithStyles
              id="interview"
              name="interview"
              checked={!!forthPageState.recruiter_job?.includes("Организация собеседований с заказчиком, синхронизация по времени соискателя и заказчика")}
              onChange={() => dispatch(updateResponsibilities("Организация собеседований с заказчиком, синхронизация по времени соискателя и заказчика"))}
              label="Организация собеседований с заказчиком, синхронизация по времени соискателя и заказчика"
            />
          </StyledLiCheckboxList>
          <StyledLiCheckboxList>
            <CheckboxWithStyles
              id="recommendations"
              name="recommendations"
              checked={!!forthPageState.recruiter_job?.includes("Запрос рекомендаций с предыдущих мест работы")}
              onChange={() => dispatch(updateResponsibilities("Запрос рекомендаций с предыдущих мест работы"))}
              label="Запрос рекомендаций с предыдущих мест работы"
            />
          </StyledLiCheckboxList>
          <StyledLiCheckboxList>
            <CheckboxWithStyles
              id="testing"
              name="testing"
              checked={!!forthPageState.recruiter_job?.includes("Отправка кандидату тестового задания")}
              onChange={() => dispatch(updateResponsibilities("Отправка кандидату тестового заданияе"))}
              label="Отправка кандидату тестового задания"
            />
          </StyledLiCheckboxList>
          <StyledLiCheckboxList>
            <CheckboxWithStyles
              id="security"
              name="security"
              checked={!!forthPageState.recruiter_job?.includes("Отправка кандидату анкеты службы безопасности вашей компании")}
              onChange={() => dispatch(updateResponsibilities("Отправка кандидату анкеты службы безопасности вашей компании"))}
              label="Отправка кандидату анкеты службы безопасности вашей компании"
            />
          </StyledLiCheckboxList>
          <StyledLiCheckboxList>
            <CheckboxWithStyles
              id="invitation"
              name="invitation"
              checked={!!forthPageState.recruiter_job?.includes("Отправка финалисту приглашения на работу")}
              onChange={() => dispatch(updateResponsibilities("Отправка финалисту приглашения на работу"))}
              label="Отправка финалисту приглашения на работу"
            />
          </StyledLiCheckboxList>
        </CheckInputsInColumn>
      </StyledDivTwoChildren>

      <StyledDivTwoChildren>
        <TitleComponent>В каком виде необходимо предоставить резюме кандидатов?</TitleComponent>
        <CheckInputsInColumn>
          <RadioInput
            id="10"
            name="notInterviewed"
            checked={forthPageState.type_resume === "Резюме без предварительного собеседования"}
            onChange={() => dispatch(updateResumeType("Резюме без предварительного собеседования"))}
            label="Резюме без предварительного собеседования"
          />
          <RadioInput
            id="12"
            name="interviewed"
            checked={forthPageState.type_resume === "Резюме кандидатов, с которыми проведено интервью, с комментариями по кандидату"}
            onChange={() => dispatch(updateResumeType("Резюме кандидатов, с которыми проведено интервью, с комментариями по кандидату"))}
            label="Резюме кандидатов, с которыми проведено интервью, с комментариями по кандидату"
          />
        </CheckInputsInColumn>
      </StyledDivTwoChildren>

      <StyledDivTwoChildren>
        <TitleComponent>Дополнительные требования к рекрутёру</TitleComponent>
        <TextField
          onChange={(evt) => dispatch(updateAdditionalRequirements(evt.target.value))}
          value={forthPageState.additional_requirements || ""}
          multiline
          maxRows={500}
          variant="outlined"
          placeholder="Дополнительная информация для рекрутёра: пожелания, основные принципы и ценности компании, рассказы о большом дружном коллективе :)"
          sx={{
            width: "100%",
            marginBottom: "12px",
            "& .MuiFormLabel-root": { color: "rgba(186, 189, 191, 1)" },
            "& .MuiOutlinedInput-root": {
              minHeight: "128px",
              alignItems: "flex-start",
              borderRadius: "8px",
              "& fieldset": {
                borderColor: "rgba(186, 189, 191, 1)",
              },
              "&:hover fieldset": {
                border: "1px solid rgba(23, 133, 229, 1)",
              },
              "&.Mui-focused fieldset": {
                border: "2px solid rgba(23, 133, 229, 1)",
              },
            },
          }}
        />
        <ErrorMessage errorText={errors.additional_requirements} />
        <CheckboxWithStyles
          id="13"
          name="legalEntities"
          checked={forthPageState.isLegalEntity}
          onChange={() => dispatch(toggleLICheck(!forthPageState.isLegalEntity))}
          label="Только для юридических лиц, ИП и самозанятых"
        />
      </StyledDivTwoChildren>

      <StyledDivTwoChildren>
        <TitleComponent>Стоп-лист компаний</TitleComponent>
        <TextField
          onChange={(evt) => dispatch(updateStopCompany(evt.target.value))}
          value={forthPageState.stoplist_companies || ""}
          multiline
          maxRows={500}
          variant="outlined"
          placeholder="Список компаний, с которыми вы не хотите сотрудничать"
          sx={{
            width: "100%",
            "& .MuiFormLabel-root": { color: "rgba(186, 189, 191, 1)" },
            "& .MuiOutlinedInput-root": {
              minHeight: "128px",
              alignItems: "flex-start",
              borderRadius: "8px",
              "& fieldset": {
                borderColor: "rgba(186, 189, 191, 1)",
              },
              "&:hover fieldset": {
                border: "1px solid rgba(23, 133, 229, 1)",
              },
              "&.Mui-focused fieldset": {
                border: "2px solid rgba(23, 133, 229, 1)",
              },
            },
          }}
        />
      </StyledDivTwoChildren>
      <ErrorMessage errorText={errors.stoplist_companies} />

      <StyledDivTwoChildren>
        <TitleComponent>Стоп-лист сотрудников</TitleComponent>
        <TextField
          onChange={(evt) => dispatch(updateStopEmployee(evt.target.value))}
          value={forthPageState.stoplist_employee || ""}
          multiline
          maxRows={500}
          variant="outlined"
          placeholder="Имена и фамилии соискателей, которых вы не готовы рассматривать"
          sx={{
            width: "100%",
            "& .MuiFormLabel-root": { color: "rgba(186, 189, 191, 1)" },
            "& .MuiOutlinedInput-root": {
              minHeight: "128px",
              alignItems: "flex-start",
              borderRadius: "8px",
              "& fieldset": {
                borderColor: "rgba(186, 189, 191, 1)",
              },
              "&:hover fieldset": {
                border: "1px solid rgba(23, 133, 229, 1)",
              },
              "&.Mui-focused fieldset": {
                border: "2px solid rgba(23, 133, 229, 1)",
              },
            },
          }}
        />
      </StyledDivTwoChildren>
      <ErrorMessage errorText={errors.stoplist_employee} />
      <StyledDivTwoChildren>
        <TitleComponent>Дополнительные файлы для рекрутёра</TitleComponent>
        <FileUploader
          onFileUploaded={(url) => {
            dispatch(updateFileUrl(url));
          }}
        />
      </StyledDivTwoChildren>
      <FinalCalculations
        finalAmount={thirdPageState.reward ? thirdPageState.reward : thirdPageState.recommendedReward}
      />

    </StyledSection>
  );
};
export default HrFormStepFour;
