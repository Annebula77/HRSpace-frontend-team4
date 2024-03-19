import { ListSubheader } from '@mui/material';
import { type HTMLAttributes, forwardRef } from 'react';
import styled from 'styled-components';

const StyledList = styled.ul`
  margin: 0;
  padding: 12px 0 0 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const StyledListSubheader = styled(ListSubheader)`
  && {  
    margin: 0;
    padding: 20px 0 0 20px;
    color: rgba(48, 50, 51, 1);
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 1.4;
  }
`;

export const SkillsListboxComponent = forwardRef<HTMLUListElement, HTMLAttributes<HTMLElement>>(
  ({ children, ...rest }, ref) => (
    <>
      <StyledListSubheader>Рекомендуемые навыки</StyledListSubheader>
      <StyledList ref={ref} {...rest}>
        {children}
      </StyledList>
    </>
  ),
);

SkillsListboxComponent.displayName = 'SkillsListboxComponent';

export const ResponsibilityListboxComponent = forwardRef<
HTMLUListElement, HTMLAttributes<HTMLElement>>(
  ({ children, ...rest }, ref) => (
    <>
      <StyledListSubheader>Основные обязанности</StyledListSubheader>
      <StyledList ref={ref} {...rest}>
        {children}
      </StyledList>
    </>
  ),
);

ResponsibilityListboxComponent.displayName = 'ResponsibilityListboxComponent';
