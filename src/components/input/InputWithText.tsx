import { type FC, type ChangeEvent } from 'react';
import styled from 'styled-components';

// NOTE: Определяем пропсы, которые будут переданы в StyledInput
interface InputProps {
  label: string;
  value: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  // eslint-disable-next-line react/require-default-props
  error?: boolean;
}

// NOTE: Создаем стилизованный input
const StyledInput = styled.input<InputProps>`
  width: 100%;
  padding: 10px 16px 10px 16px;
  margin: 5px;
  border: 1px solid ${(props) => (props.error ? 'red' : 'rgba(186, 189, 191, 1)')};
  border-radius: 8px;
  font-size: 14px;
  font-weight: 400; 
  line-height: 1.4; 
  word-wrap: break-word;
`;

// NOTE: Создаем компонент Input, который принимает пропсы и передает их в StyledInput

const InputWithText: FC<InputProps> = ({
  onChange, label, value, placeholder, error = false,
}) => (
  <StyledInput
    type="text"
    label={label}
    value={value}
    placeholder={placeholder}
    pattern="[A-Za-zА-Яа-яЁё0-9-]*"
    title="Только буквы русского и латинского алфавита, а так же цифры и тире"
    onChange={onChange}
    error={error}
  />
);

export default InputWithText;
