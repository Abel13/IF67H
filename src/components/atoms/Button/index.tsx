import React from 'react';

import {ButtonProps} from './interfaces'

import { ButtonContainer, ButtonTextContainer, ButtonText } from './styles';

const Button: React.FC<ButtonProps> = ({ children, type, ...rest }) => {

  const buttonText = () => {
    return (<ButtonText>{children}</ButtonText>);
  }

  const button = () => {
    switch (type) {
      case "text":
        return (
          <ButtonTextContainer {...rest}>
            {buttonText()}
          </ButtonTextContainer>
        )
      default:
        return (
          <ButtonContainer { ...rest } type={type}>
            {buttonText()}
          </ButtonContainer>
        )
    }
  }

  return button()
}

export default Button;
