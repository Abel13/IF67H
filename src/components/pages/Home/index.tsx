import React, { useEffect } from 'react';
import { Alert, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { Book } from '../../../models/book';
import { ReducerProps } from '../../../store/modules/interfaces';
import {BookCard} from '../../organisms';

import * as BookActions from '../../../store/modules/book/actions'

import { Container } from './styles';
import { useNavigation } from '@react-navigation/core';
import { translate } from '../../../localization';
import { Genre } from '../../../models/genre';

const Home: React.FC = () => {
  const { books } = useSelector<ReducerProps>(state => state.book);
  const { genres } = useSelector<ReducerProps>(state => state.genre);

  const dispatch = useDispatch();
  const navigation = useNavigation();


  const deleteBook=(book: Book)=>{
    dispatch(BookActions.deleteBookRequest(book))
  }

  const editBook=(book: Book)=>{
    navigation.navigate(translate("navigation.book"), book);
  }

  return (
    <Container>
        <FlatList
          data={books}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => {
            const genre = genres.find((i:Genre)=>i.id==item.genreId);
            return (<BookCard
              abstract={item.abstract}
              genre={genre.name}
              title={item.title}
              key={item.id}
              editItem={()=>editBook(item)}
              deleteItem={()=>
                Alert.alert('ATENÇÃO', "Deseja realmente excluir este item?", [
                  {
                    text:"Não"
                  },
                  {
                    text:"Sim",
                    onPress: ()=>deleteBook(item),
                  }
                ])
              }
            />)}
          }
        />
    </Container>
  )
}

export default Home;