import styled from 'styled-components/native';
import Colors from '../../../styles/colors.json';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

export const Content = styled.View`
  flex-direction: column;
  align-items: center;
  background-color: ${Colors.secondary};
  border-radius: 2px;
  box-shadow: 0px 0px 5px ${Colors.blackTransparent};

  width: 100%;

  padding: 30px 10px 30px 10px;
  max-width: 500px;
`;

export const Title = styled.Text`
  color: ${Colors.light};
  font-size: 22px;
`;

export const FieldMarginVertical = styled.View`
  height: 8px;
`;

export const MarginVerticalAroundFields = styled.View`
  height: 22px;
`;