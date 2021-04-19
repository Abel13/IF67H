import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Colors from '../../../styles/colors.json';
import { Label, Button } from '../../atoms';

import { Container, ActionButtons, ButtonSeparator } from './styles';

const GenreCard: React.FC = () => {
  return (
    <Container>
      <Label>Teste</Label>
      <ActionButtons>
        <Button type="icon" icon={"edit"} />
        <ButtonSeparator/>
        <Button type="icon" icon={"trash"} />
      </ActionButtons>
    </Container>
  )
}

export default GenreCard;