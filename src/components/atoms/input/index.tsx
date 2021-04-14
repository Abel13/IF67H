import React from 'react';
import { InputProps } from './interfaces';
import Colors from "../../../styles/colors.json";

import { TextContainer, TextInput, IconContainer } from './styles';

const Input: React.FC<InputProps> = ({name, icon, ...rest}) => (
  <TextContainer>
    <IconContainer name={icon} size={20} color={Colors.grayHard} />
    
    <TextInput keyboardAppearance="dark" placeholderTextColor={Colors.grayHard} {...rest}/>
  </TextContainer>
)

export default Input;