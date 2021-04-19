import React from 'react';
import Icon from 'react-native-vector-icons/Feather'
import { translate } from '../../../localization';
import RNPickerSelect from 'react-native-picker-select';
import Colors from "../../../styles/colors.json";
import {ItemProps, SelectProps} from './interfaces';

const Select: React.FC<SelectProps> = ({items, ...rest}) => {
  return <RNPickerSelect {...rest}
    useNativeAndroidPickerStyle={false}
    doneText={translate("buttons.select")}
    items={items}
    Icon={() => {
      return <Icon name="chevron-down" size={24} color={Colors.grayHard} />;
    }}
    style={{
      inputIOSContainer: {
        height: 60,
        justifyContent: "center",
        backgroundColor: Colors.inputs,
        padding: 15,
        borderRadius: 2
      },
      inputAndroidContainer: {
        height: 60,
        justifyContent: "center",
        backgroundColor: Colors.inputs,
        padding: 15,
        borderRadius: 2
      },
      iconContainer: {
        marginRight: 15
      },
      placeholder: {
        color: Colors.grayHard,
        fontSize: 16
      },
      inputAndroid: {
        color: Colors.white,
        fontSize: 16
      },
      inputIOS:{
        color: Colors.white,
        fontSize: 16
      },
      done: {
        color: Colors.primary
      }
    }}
    placeholder={{
      label: translate("placeholders.selectOne"),
      value:null, 
      color: Colors.primary, 
      inputLabel: translate("placeholders.select"), 
    }}
  />;
}

export default Select;