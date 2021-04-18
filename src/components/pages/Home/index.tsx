import React from 'react';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { ReducerProps } from '../../../store/modules/interfaces';
import {BookCard} from '../../organisms';

import { Container } from './styles';

const Home: React.FC = () => {
  const { books } = useSelector<ReducerProps>(state => state.home);
  return (
    <Container>
        <FlatList
          data={books}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => 
            <BookCard
              abstract={item.abstract}
              genre={item.genre.name}
              imageUrl={item.image}
              title={item.title}
              key={item.id}
            />
          }
        />
    </Container>
  )
}

export default Home;