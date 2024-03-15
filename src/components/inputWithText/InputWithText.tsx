import { type FC, type ChangeEvent } from 'react';
import styled from 'styled-components';

// NOTE: Определяем пропсы, которые будут переданы в StyledInput
interface InputProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  value: string;
  placeholder: string;
  // eslint-disable-next-line react/require-default-props
  error?: boolean;
}

// NOTE: Создаем стилизованный input
const StyledInput = styled.input<InputProps>`
  width: 100%;
  padding: 10px 16px 10px 16px;
  margin: 5px;
  border: 1px solid ${(props) => (props.error ? 'rgba(255, 46, 46, 1)' : 'rgba(186, 189, 191, 1)')};
  border-radius: 8px;
  font-size: 14px;
  font-weight: 400;
  color: rgba(48, 50, 51, 1);
  line-height: 1.4;
  word-wrap: break-word;

  &:focus {
  border: 1px solid rgba(23, 133, 229, 1);
  }
 `;

// NOTE: Создаем компонент Input, который принимает пропсы и передает их в StyledInput

const InputWithText: FC<InputProps> = ({
  onChange, name, value, placeholder, error = false,
}) => (
  <StyledInput
    onChange={onChange}
    type="text"
    name={name}
    value={value}
    placeholder={placeholder}
    pattern="[A-Za-zА-Яа-яЁё0-9-]*"
    title="Только буквы русского и латинского алфавита, а так же цифры и тире"
    error={error}
  />
);

export default InputWithText;
