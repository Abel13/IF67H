import styled, { css } from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";


import Colors from "../../../styles/colors.json";
import { ButtonStyleProps } from "./interfaces";

const buttonColor = {
  default: css`
    background: ${Colors.primary};
  `,
  success: css`
    background: ${Colors.success};
  `,
  warning: css`
    background: ${Colors.warning};
  `,
  danger: css`
    background: ${Colors.danger};
  `,
};

export const ButtonContainer = styled(RectButton)<ButtonStyleProps>`
  flex: 1;
  max-height: 60px;
  min-height: 60px;
  ${props => buttonColor[props.type || 'default']}
  border-radius: 2px;
  align-items: center;
  justify-content: center;
`;

export const ButtonTextContainer = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: ${Colors.white}
`;