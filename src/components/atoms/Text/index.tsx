import React from 'react';

import { Text } from './styles';

const Label: React.FC = ({children}) => {
  return (
    <Text>
      {children}
    </Text>
  );
}

export default Label;