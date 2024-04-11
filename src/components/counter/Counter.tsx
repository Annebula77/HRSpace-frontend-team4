import { type FC } from 'react';
import { Button, CounterContainer, Value } from './counterStyles';


interface CounterProps {
  value: number;
  onChange: (newValue: number) => void;
  min: number;
  max: number;
}



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
