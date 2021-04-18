import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {BookCard} from '../../organisms';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <SafeAreaView>
        <BookCard>

        </BookCard>
      </SafeAreaView>
    </Container>
  )
}

export default Home;