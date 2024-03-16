import { type FC } from 'react';
import styled from 'styled-components';

interface ButtonProps {
  isActive: boolean;
}

const Styledlist = styled.ul`
  margin: 0;
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
  color: ${
  (props) => (props.isActive
    ? 'rgba(255, 255, 255, 1)'
    : 'rgba(149, 151, 153, 1)'
  )
};
`;

const HeaderNavigation: FC<ButtonProps> = () => (
  <nav>
    <Styledlist>
      <StyledListElement>
        <StyledNavButton type="button" isActive>
          Создать заявку
        </StyledNavButton>
      </StyledListElement>
      <StyledListElement>
        <StyledNavButton type="button" isActive={false}>
          Мои заявки
        </StyledNavButton>
      </StyledListElement>
      <StyledListElement>
        <StyledNavButton type="button" isActive={false}>
          Поиск по рынку
        </StyledNavButton>
      </StyledListElement>
      <StyledListElement>
        <StyledNavButton type="button" isActive={false}>
          Счёт
        </StyledNavButton>
      </StyledListElement>
      <StyledListElement>
        <StyledNavButton type="button" isActive={false}>
          Помощь
        </StyledNavButton>
      </StyledListElement>
    </Styledlist>
  </nav>
);

export default HeaderNavigation;
