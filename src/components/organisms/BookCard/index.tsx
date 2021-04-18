import React from 'react';
import { Text, View } from 'react-native';
import { Button, Label, PageTitle } from '../../atoms';
import {LongText} from '../../molecules'
import { BookCardProps } from './interfaces';

import { Container, ActionsContainer, Content, Image,BookDetails, Separator } from './styles';

const BookCard: React.FC<BookCardProps> = ({abstract, genre, imageUrl, title}) => {
  return (
    <Container>
      <Content>
        <BookDetails>
          <PageTitle>
            {title}
          </PageTitle>
          <View style={{ width: "100%", flexDirection: "row" }}>
            <View>
              <Image source={{
                uri: imageUrl,
              }} />
              <View style={{ width: 100, flex:1}}>
                <Label>{genre}</Label>
              </View>
            </View>

            <LongText>
              {abstract}
            </LongText>
          </View>

          
        </BookDetails>
        <ActionsContainer>
          <Button type={"danger"}>
            Excluir
          </Button>
          <Separator/>
          <Button>
            Editar
          </Button>
        </ActionsContainer>
      </Content>
    </Container>
  )
}

export default BookCard;