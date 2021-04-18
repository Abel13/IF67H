import { RectButtonProperties } from "react-native-gesture-handler";

export interface ButtonProps extends RectButtonProperties {
  children: string;
  type?: string;
}

export interface ButtonStyleProps {
  type?: 'success' | 'warning' | 'danger' | 'default';
}