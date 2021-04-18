import React from 'react';
import { ScrollView, View } from 'react-native';

import { LongTextContainer, Text } from './styles';

const LongText: React.FC = ({children}) => {
  return (
    <LongTextContainer>
      <ScrollView>
        <Text>
          {children}
        </Text>
        
      </ScrollView>
    </LongTextContainer>
  )
}

export default LongText;