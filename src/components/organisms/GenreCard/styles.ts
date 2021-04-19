
import styled from 'styled-components/native';
import Colors from '../../../styles/colors.json';

export const Container = styled.View`  
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${Colors.dark};
  border-radius: 2px;
  box-shadow: 0px 0px 5px ${Colors.blackTransparent};
  margin: 5px;
  padding: 10px;
`;

export const ActionButtons = styled.View`  
  flex-direction: row;
`;

export const ButtonSeparator = styled.View`
  width: 15px;
`;