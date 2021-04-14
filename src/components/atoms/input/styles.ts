import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/Feather'

import Colors from "../../../styles/colors.json";

export const TextContainer = styled.View`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  flex-direction: row;
  align-items: center;

  background: ${Colors.inputs};
  border-radius: 2px;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: ${Colors.white};
  font-size: 16px;
`;

export const IconContainer = styled(Icon)`
  margin-right: 16px; 
`;