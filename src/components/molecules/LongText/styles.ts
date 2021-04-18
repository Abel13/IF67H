import styled from 'styled-components/native';
import Colors from '../../../styles/colors.json';
import * as Animatable from 'react-native-animatable';

export const LongTextContainer = styled(Animatable.View)`
  flex: 1;  
  padding: 10px;
  overflow: scroll;
`;

export const Text = styled.Text`
  color: ${Colors.light}
`;
