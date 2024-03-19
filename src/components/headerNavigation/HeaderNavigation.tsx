import { type FC } from 'react';
import styled from 'styled-components';

interface ButtonProps {
  $primary?: boolean;
}

const StyledList = styled.ul`
  margin: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  background-color: #000000;
`;

const StyledListElement = styled.li`
  padding: 0;
  margin: 0 24px 0 0;
  list-style: none;

  &:last-child {
    margin: 0;
  }
`;

const StyledNavButton = styled.button<ButtonProps>`
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  color: ${({ $primary }) => ($primary ? 'rgba(255, 255, 255, 1)' : 'rgba(149, 151, 153, 1)')};
`;

const HeaderNavigation: FC<ButtonProps> = () => (
  <nav>
    <StyledList>
      <StyledListElement>
        <StyledNavButton type="button" $primary={true}>
          Создать заявку
        </StyledNavButton>
      </StyledListElement>
      <StyledListElement>
        <StyledNavButton type="button">
          Мои заявки
        </StyledNavButton>
      </StyledListElement>
      <StyledListElement>
        <StyledNavButton type="button">
          Поиск по рынку
        </StyledNavButton>
      </StyledListElement>
      <StyledListElement>
        <StyledNavButton type="button">
          Счёт
        </StyledNavButton>
      </StyledListElement>
      <StyledListElement>
        <StyledNavButton type="button">
          Помощь
        </StyledNavButton>
      </StyledListElement>
    </StyledList>
  </nav >
);

export default HeaderNavigation;
