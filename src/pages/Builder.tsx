import Main from "../components/main/Main";
import HrRequestForm from "../components/hrRequestForm/HrRequestForm";
import styled from "styled-components";

const StyledSection = styled.section`
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`;
const Builder = () => {

  return (
    <StyledSection>
      <Main>
        <HrRequestForm />
      </Main>
    </StyledSection>
  );
}

export default Builder;