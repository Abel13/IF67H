import React from 'react';
import { Label, Button } from '../../atoms';
import { GenreCardProps } from './interfaces';

import { Container, ActionButtons, ButtonSeparator } from './styles';

const GenreCard: React.FC<GenreCardProps> = ({name}) => {
  return (
    <Container>
      <Label>{name}</Label>
      <ActionButtons>
        <Button type="icon" icon={"edit"} />
        <ButtonSeparator/>
        <Button type="icon" icon={"trash"} />
      </ActionButtons>
    </Container>
  )
}

export default GenreCard;