import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";


import Colors from "../../../styles/colors.json";

export const ButtonContainer = styled(RectButton)`
  width: 100%;
  height: 60px;
  background: ${Colors.primary};
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