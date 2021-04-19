import React, { useEffect, useRef } from 'react';
import { InputProps, InputValueReference } from './interfaces';
import Colors from "../../../styles/colors.json";

import { TextContainer, TextInput, IconContainer } from './styles';
import { useField } from '@unform/core';

const Input: React.FC<InputProps> = ({ multiline, name, icon, ...rest }) => {
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
  <TextContainer style={{
      alignItems: multiline ? "flex-start" : "center", 
      paddingTop: multiline? 10 : 0
    }}>
    <IconContainer name={icon} size={20} color={Colors.grayHard} />
    
      <TextInput
        {...rest}
        ref={inputValueRef}
        keyboardAppearance="dark"
        textAlignVertical={multiline ? "top" : "center"}
        placeholderTextColor={Colors.grayHard} 
        defaultValue={defaultValue}
        onChangeText={(value) => {
          inputValueRef.current.value = value;
        }}
      />
  </TextContainer>
)}

export default Input;
