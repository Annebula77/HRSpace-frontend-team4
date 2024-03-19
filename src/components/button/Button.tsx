import styled from 'styled-components';

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  label: string;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
}

const getFontSize = (size: ButtonProps['size']) => {
  switch (size) {
    case 'small':
      return '12px';
    case 'large':
      return '16px';
    default:
      return '14px';
  }
};


const getPadding = (size: ButtonProps['size']) => {
  switch (size) {
    case 'small':
      return '10px 16px';
    case 'large':
      return '12px 24px';
    default:
      return '11px 20px';
  }
};

const StyledButton = styled.button<ButtonProps>` 
  width: 100%;
  font-weight: ${({ primary }) => (primary ? '700' : '400')};
  border: 0;
  border-radius: 8px;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  color: ${({ primary }) => (primary ? 'rgba(255, 255, 255, 1)' : 'rgba(73, 75, 77, 1)')};
  background-color: ${({ primary, backgroundColor }) => (primary ? (backgroundColor || 'rgba(23, 133, 229, 1)') : (backgroundColor || 'rgba(232, 244, 255, 1)'))};
  box-shadow: ${({ primary }) => (primary ? 'none' : 'rgba(232, 244, 255, 1) 0px 0px 0px 1px inset')};
  font-size: ${({ size }) => getFontSize(size)};
  padding: ${({ size }) => getPadding(size)};
`;

export const Button: React.FC<ButtonProps & { children: React.ReactNode }> = ({
  children,
  primary = false,
  backgroundColor,
  size = 'medium',
  ...props
}) => {
  return (
    <StyledButton
      primary={primary}
      backgroundColor={backgroundColor}
      size={size}
      {...props}
    >
      {children}
    </StyledButton>
  );
};
