import React from 'react';
import ButtonStyles from './Button.styles';

interface CardsProps {
  children?: any;
  ref?: any;
}

const Button = ({ children, ref }: CardsProps): JSX.Element => {
  return (
    <ButtonStyles className="Button" ref={ref}>
      {children}
    </ButtonStyles>
  );
};

export default Button;
