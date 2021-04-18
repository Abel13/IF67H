import React from 'react';
import { View } from 'react-native';

import { Title } from './styles';

const PageTitle: React.FC = ({children, ...rest}) => {
  return (
    <Title {...rest}>
      {children}
    </Title>
  );
}

export default PageTitle;