import React, { useEffect, useRef } from 'react';
import { InputProps, InputValueReference } from './interfaces';
import Colors from "../../../styles/colors.json";

import { TextContainer, TextInput, IconContainer } from './styles';
import { useField } from '@unform/core';

const Input: React.FC<InputProps> = ({ name, icon, ...rest }) => {
  const inputElementRef = useRef<any>(null);

  const { registerField, defaultValue = '', fieldName, error } = useField(name);
  const inputValueRef = useRef<InputValueReference>({value: defaultValue});

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(ref: any, value: string) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({text: value});
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      }
    })
  }, [fieldName, registerField])

  return (
  <TextContainer>
    <IconContainer name={icon} size={20} color={Colors.grayHard} />
    
      <TextInput
        ref={inputValueRef}
        keyboardAppearance="dark"
        placeholderTextColor={Colors.grayHard} {...rest}
        defaultValue={defaultValue}
        onChangeText={(value) => {
          inputValueRef.current.value = value;
        }}
      />
  </TextContainer>
)}

export default Input;