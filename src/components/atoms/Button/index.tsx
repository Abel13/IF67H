import React from 'react';

import Colors from "../../../styles/colors.json";

import {ButtonProps} from './interfaces'

import { ButtonContainer, ButtonTextContainer, ButtonText, IconContainer, IconButton } from './styles';

const Button: React.FC<ButtonProps> = ({ icon, children, type, ...rest }) => {

  const buttonText = () => {
    return (<ButtonText>{children}</ButtonText>);
  }

  const button = () => {
    switch (type) {
      case "icon":
        return (
          <IconButton {...rest}>
             <IconContainer name={icon} size={20} />
          </IconButton>
        )
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
