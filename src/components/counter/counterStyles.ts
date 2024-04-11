import styled from 'styled-components';

export const CounterContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-grow: 1;
  align-items: center;
  border-radius: 8px;
  outline: 0.5px solid rgba(186, 189, 191, 1);  
`;

export const Button = styled.button`
  background-color: rgba(255,255,255, 1);
  color: rgba(97, 174, 242, 1);
  font-size: 20px;
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

export const Value = styled.div`
  color: rgba(34, 34, 34, 1);
  padding: 10px;
`;