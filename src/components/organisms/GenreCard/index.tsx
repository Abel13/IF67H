import React from 'react';
import { Alert } from 'react-native';
import { Label, Button } from '../../atoms';
import { GenreCardProps } from './interfaces';
import { translate } from '../../../localization';

import { Container, ActionButtons, ButtonSeparator } from './styles';

const GenreCard: React.FC<GenreCardProps> = ({editItem, deleteItem, name}) => {
  return (
    <Container>
      <Label>{name}</Label>
      <ActionButtons>
        <Button type="icon" icon={"edit"} onPress={editItem}/>
        <ButtonSeparator/>
        <Button type="icon" icon={"trash"}
              onPress={()=>
                Alert.alert(translate("error.attention"), translate("error.delete"), [
                  {
                    text:translate("buttons.no")
                  },
                  {
                    text:translate("buttons.yes"),
                    onPress:deleteItem,
                  }
                ])
              }/>
      </ActionButtons>
    </Container>
  )
}

export default GenreCard;