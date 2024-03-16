import { type FC } from 'react';
import styled from 'styled-components';

interface CounterProps {
  value: number;
  onChange: (newValue: number) => void;
  min: number;
  max: number;
}

const CounterContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-grow: 1;
  align-items: center;
  border: 1px solid rgba(186, 189, 191, 1);
  border-radius: 8px;
`;

const Button = styled.button`
  background-color: rgba(255,255,255, 1);
  color: rgba(97, 174, 242, 1);
  border: none;
  cursor: pointer;
  padding: 10px;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: rgba(217, 224, 240, 0.2);
  }
  &:disabled {
    cursor: not-allowed;
    color: rgba(212, 215, 217, 1);
  }
`;

const Value = styled.div`
  color: rgba(34, 34, 34, 1);
  padding: 10px;
`;

const Counter: FC<CounterProps> = ({
  value, onChange, min, max,
}) => {
  const increment = () => {
    if (value > max) {
      return;
    }
    onChange(value + 1);
  };

  const decrement = () => {
    if (value === min) {
      return;
    }
    onChange(value - 1);
  };

  return (
    <CounterContainer>
      <Button onClick={decrement} disabled={value <= min}>-</Button>
      <Value>{value}</Value>
      <Button onClick={increment} disabled={value >= max}>+</Button>
    </CounterContainer>
  );
};

export default Counter;
