import styled from "styled-components";
import HrRequestFormWithStepper from "../components/hrRequestFormWithStepper/HrRequestFormWithStepper";
import Main from "../components/main/Main";

const StyledSection = styled.section`
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0;
`;
const Builder = () => (
  <StyledSection>
    <Main>
      <HrRequestFormWithStepper />
    </Main>
  </StyledSection>
);

export default Builder;
