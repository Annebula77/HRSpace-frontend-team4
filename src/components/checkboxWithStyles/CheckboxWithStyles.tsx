import { type FC, type ChangeEvent } from 'react';
import CheckIcon from '../icons/CheckIcon';
import { CheckboxContainer, CheckboxLabel, HiddenCheckbox, StyledCheckbox } from './checkboxStyles';


interface CheckboxProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  id: string;
  name: string;
  checked: boolean;
}


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
