import styled from 'styled-components/native';
import Colors from '../../../styles/colors.json';

export const LongTextContainer = styled.View`
  flex: 1;  
  padding: 10px;
  overflow: scroll;
  max-height: 250px;
`;

export const Text = styled.Text`
  color: ${Colors.light}
`;