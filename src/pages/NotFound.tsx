import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { media } from '../styles/breakpoints';
import Main from '../components/main/Main';
import { StyledSection } from '../styles/formStepsStyles';
import notFoundImg from '../assets/images/404_image.png';
import CustomButton from '../components/button/CustomButton';

const StyledNotFoundContent = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 610px;
  display: grid;
  grid-template-columns: minmax(300px, 610px);
  align-items: center;
  gap: 32px;
`;

const StyledNotFoundImg = styled.img`
  display: block;
  width: 100%;
  margin: 0;
  padding: 0;
  background-size: cover;
  box-sizing: border-box;
`;

const StyledText = styled.div`
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  & h2 {
    margin: 0;
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    text-align: center;
    color: rgba(73, 75, 77, 1);

    ${media.sm`
      font-size: 24px;
      line-height: 27.84px;
    `}
  }

  & p {
    margin: 0;
    font-family: Arial;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    text-align: center;
    color: rgba(73, 75, 77, 1);

    ${media.sm`
      font-size: 16px;
      line-height: 24px;
    `}
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-family: Arial;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  text-align: center;
  color:rgba(255, 255, 255, 1);
;

`;

const NotFound = () => (
  <StyledSection>
    <Main>
      <StyledNotFoundContent>
        <StyledNotFoundImg src={notFoundImg} alt="Страница не найдена" />
        <StyledText>
          <h2>Страница не найдена(</h2>
          <p>
            Мы очень сожалеем о неудобствах.
            Похоже, вы пытаетесь получить доступ к странице, которая была
            удалена или даже никогда не существовала.
          </p>
        </StyledText>
        <CustomButton
          label="Вернуться на главную"
          primary
          size="large"
          style={{ flex: '1' }}
        >
          <StyledLink to="/">Вернуться на главную</StyledLink>
        </CustomButton>
      </StyledNotFoundContent>
    </Main>
  </StyledSection>
);

export default NotFound;
