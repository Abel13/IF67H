
import {PickerSelectProps} from 'react-native-picker-select';

export interface ItemProps {
  id: number
  label: string
  value: object
}

export interface SelectProps extends PickerSelectProps {
  name: string;
}