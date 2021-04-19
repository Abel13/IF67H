import styled, { css } from "styled-components/native";
import Icon from 'react-native-vector-icons/Feather'

import Colors from "../../../styles/colors.json";
import { InputProps } from "./interfaces";

export const TextContainer = styled.View<InputProps>`
  width: 100%;
  min-height: 60px;
  max-height: 100px;
  padding: 0 16px;
  flex-direction: row;
  background: ${Colors.inputs};
  border-radius: 2px;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  width: 100%;
  color: ${Colors.white};
  font-size: 16px;
`;

export const IconContainer = styled(Icon)`
  margin-right: 16px; 
`;
