import { TextInputProps } from 'react-native'

export interface InputValueReference {
  value: string;
  
}

export interface InputProps extends TextInputProps {
  name: string;
  icon: string;
  type?: "password" | "text" | "currency"
}