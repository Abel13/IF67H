import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Text, View } from 'react-native';
import { Button, Label, PageTitle } from '../../atoms';
import {LongText} from '../../molecules'
import { BookCardProps } from './interfaces';
import { translate } from '../../../localization';
import Icon from 'react-native-vector-icons/Feather';
import Colors from '../../../styles/colors.json';

import { Container, ActionsContainer, Content, Image,BookDetails, Separator } from './styles';

const BookCard: React.FC<BookCardProps> = ({ editItem, deleteItem, summary, genre, title}) => {
  return (
    <Container>
      <Content>
        <BookDetails>
          <PageTitle>
            {title}
          </PageTitle>
          <View style={{ width: "100%", flexDirection: "row" }}>
            <View style={{marginTop: 20, alignItems: "center"}}>
              <Icon name="book" size={60} color={Colors.primary}/>
              <View style={{ flex:1}}>
                <Label>{genre}</Label>
              </View>
            </View>

            <LongText>
              {summary}
            </LongText>
          </View>

          
        </BookDetails>
        <ActionsContainer>
          <Button type={"danger"} onPress={deleteItem}>
            {translate("buttons.delete")}
          </Button>
          <Separator/>
          <Button onPress={editItem}>
            {translate("buttons.edit")}
          </Button>
        </ActionsContainer>
      </Content>
    </Container>
  )
}

export default BookCard;