
import {PickerSelectProps} from 'react-native-picker-select';

export interface ItemProps {
  id: string
  label: string
  value: object
}

export interface SelectProps extends PickerSelectProps {
  name: string;
}