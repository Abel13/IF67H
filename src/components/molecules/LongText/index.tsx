import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Button } from '../../atoms';
import { LabelProps } from './interfaces';
import { LongTextContainer, Text } from './styles';

const LongText: React.FC<LabelProps> = ({ children }) => {
  const [expanded, setExpanded] = useState(false);

  const expand = () => {
    setExpanded(!expanded);
  }


  return (
    <LongTextContainer transition="height" style={{height: expanded?350:150}}>
      <ScrollView scrollEnabled={expanded}>
        <Text>
          {children}
        </Text>
      </ScrollView>
      <Button type="icon" icon={expanded ? "chevron-up" : "chevron-down"} onPress={ expand }/>
    </LongTextContainer>
  )
}

export default LongText;