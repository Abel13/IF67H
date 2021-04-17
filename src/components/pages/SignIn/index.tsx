import React, { useCallback, useRef } from 'react';
import { Text } from 'react-native';
import { Button, Input } from '../../atoms';
import { translate } from '../../../localization';

import { useNavigation } from '@react-navigation/native';


import { Container, Content, Title, FieldMarginVertical, MarginVerticalAroundFields } from './styles';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

const SignIn: React.FC = () => {
  const inputElementRef = useRef(null);

  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  const handleSubmit = useCallback((data: SignInFormValues) => {
    console.log("SUBMIT", data);
  }, []);


  return (
  <Container>
    <Content>
      <Title>{translate('titles.login')}</Title>
        <MarginVerticalAroundFields />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
            name="email"
            icon="mail"
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
            placeholder={translate("placeholders.email")}
          />
          <FieldMarginVertical/>
          <Input
            name="password"
            type="password"
            keyboardType="visible-password"
            icon="lock"
            placeholder={translate("placeholders.password")}
            secureTextEntry={true}
            returnKeyType="send"
            onSubmitEditing={() => { formRef.current?.submitForm() }}
          />
          <MarginVerticalAroundFields/>
          <Button onPress={() => { formRef.current?.submitForm() }}>
            {translate('buttons.login')}
          </Button>
        </Form>
        <Button type="text" onPress={() => navigation.navigate("SignUp")}>
          {translate('buttons.register')}
        </Button>
    </Content>
  </Container>
)};

export default SignIn;