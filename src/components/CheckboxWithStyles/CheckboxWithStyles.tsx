import { type FC, type ChangeEvent } from 'react';
import styled from 'styled-components';
import CheckIcon from '../icons/CheckIcon';
import { media } from '../../styles/breakpoints';

interface CheckboxProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  id: string;
  name: string;
  checked: boolean;
}

const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  opacity: 0;
  position: absolute;
  z-index: -1;
`;

const StyledCheckbox = styled.span<{ checked: boolean }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border: 2px solid ${({ checked }) => (checked ? 'rgba(23, 133, 229, 1)' : 'rgba(217, 224, 240, 1)')};
  border-radius: 6px;
  background-color: ${({ checked }) => (checked ? 'rgba(23, 133, 229, 1)' : 'transparent')};
  transition: all 0.3s;

  
  .check-icon {
    visibility: ${({ checked }) => (checked ? 'visible' : 'hidden')};
    width: 12px;
    height: 12px;
  }

  ${CheckboxContainer}:hover & {
    border-color: rgba(23, 133, 229, 0.8);
  }
`;

const CheckboxLabel = styled.span`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.4;
  color: rgba(48, 50, 51, 1);
  margin-left: 8px;
  white-space: pre-wrap;

  ${media.md`
  white-space: nowrap;
    `}
`;

const CheckboxWithStyles: FC<CheckboxProps> = ({
  id, name, checked, onChange, label,
}) => (
  <CheckboxContainer htmlFor={id}>
    <HiddenCheckbox id={id} name={name} checked={checked} onChange={onChange} />
    <StyledCheckbox checked={checked}>
      {checked && <CheckIcon className="check-icon" />}
    </StyledCheckbox>
    <CheckboxLabel>{label}</CheckboxLabel>
  </CheckboxContainer>
);

export default CheckboxWithStyles;
