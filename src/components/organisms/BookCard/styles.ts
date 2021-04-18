
import styled from 'styled-components/native';
import Colors from '../../../styles/colors.json';

export const Container = styled.View`  
`;

export const Content = styled.View`
  flex-direction: column;
  align-items: flex-start;
  background-color: ${Colors.dark};
  border-radius: 2px;
  box-shadow: 0px 0px 5px ${Colors.blackTransparent};
  margin: 15px;
`;

export const BookDetails = styled.View`
  padding: 10px;
`;

export const Image = styled.Image`
  width: 60px;
  height: 100px;
  margin: 10px 5px;
`;

export const ActionsContainer = styled.View`
  border-top-width: 0.5px;
  border-top-color: ${Colors.danger};
  width: 100%;
  padding: 10px;
  flex-direction: row;
  justify-content: space-around;
`;

export const Separator = styled.View`
  width: 10px;
`;