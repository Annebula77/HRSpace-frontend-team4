import { type FC } from 'react';
import styled from 'styled-components';

const ErrorText = styled.div`
  color: rgba(217, 33, 33, 1);
  padding: 0;
  margin: 12px 0 0;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.4; 
`;

interface ErrorMessageProps {
  errorText?: string;
}

const ErrorMessage: FC<ErrorMessageProps> = ({ errorText }) => {
  if (!errorText) return null;

  return (
    <ErrorText>{errorText}</ErrorText>
  );
};

export default ErrorMessage;
