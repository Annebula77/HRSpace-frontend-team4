import { FC, ChangeEvent } from 'react';
import styled from 'styled-components';

interface RadioInputProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  id: string;
  name: string;
  checked: boolean;
}

const RadioContainer = styled.label<{ checked: boolean }>`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  padding: 10px 16px 10px 10px;
  border-radius: 8px;
  border: 1px solid ${({ checked }) => (checked ? 'transparent' : 'rgba(186, 189, 191, 1)')};
  background-color: ${({ checked }) => (checked ? 'rgba(232, 244, 255, 1)' : 'transparent')};
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    border-color: rgba(23, 133, 229, 0.8);
  }
`;

const HiddenRadio = styled.input.attrs({ type: 'radio' })`
  opacity: 0;
  position: absolute;
  margin: -1px;
`;

const StyledRadio = styled.span<{ checked: boolean }>`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid ${({ checked }) => (checked ? 'rgba(23, 133, 229, 1)' : 'rgba(217, 224, 240, 1)')};
  border-radius: 50%;
  background-color: ${({ checked }) => (checked ? 'rgba(23, 133, 229, 1)' : 'transparent')};
  position: relative;
  margin-right: 10px;

  &::after {
    content: '';
    display: ${({ checked }) => (checked ? 'block' : 'none')};
    position: absolute;
    top: 50%;
    left: 50%;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: rgba(255,255,255, 1);
    transform: translate(-50%, -50%);
  }
`;

const RadioLabel = styled.span`
  color: rgba(73, 75, 77, 1);
  width: 80%;
  white-space: pre-wrap;
  padding-top: 2px;
`;

const RadioInput: FC<RadioInputProps> = ({
  id, name, checked, onChange, label,
}) => (
  <RadioContainer checked={checked}>
    <HiddenRadio id={id} name={name} checked={checked} onChange={onChange} />
    <StyledRadio checked={checked} />
    <RadioLabel>{label}</RadioLabel>
  </RadioContainer>
);

export default RadioInput;
