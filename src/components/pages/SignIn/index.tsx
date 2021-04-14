import React from 'react';
import { Text } from 'react-native';
import { Button, Input } from '../../atoms';
import { translate } from '../../../localization';

import { Container, Content, Title, FieldMarginVertical, MarginVerticalAroundFields } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <Title>{translate('titles.login')}</Title>
      <MarginVerticalAroundFields/>
      <Input name="email" icon="mail" placeholder={translate("placeholders.email")}/>
      <FieldMarginVertical/>
      <Input name="password"  icon="lock" placeholder={translate("placeholders.password")}/>
      <MarginVerticalAroundFields/>
      <Button onPress={() => { }}>{translate('buttons.login')}</Button>
      <Button type="text" onPress={() => { }}>{ translate('buttons.register')}</Button>
    </Content>
  </Container>
);

export default SignIn;