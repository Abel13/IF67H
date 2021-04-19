import React, { useCallback, useEffect, useRef } from 'react';
import { Text } from 'react-native';
import { Button, PageTitle,Input } from '../../atoms';
import { translate } from '../../../localization';

import { useNavigation } from '@react-navigation/native';

import * as SignInActions from '../../../store/modules/auth/actions';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { useDispatch, useSelector } from 'react-redux';


import { Container, Content, FieldMarginVertical, MarginVerticalAroundFields } from './styles';

const SignIn: React.FC = () => {
  const { openSignUp } = useSelector(state => state.user);
  const inputElementRef = useRef(null);

  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const handleSubmit = useCallback((data: SignInFormValues) => {
    dispatch(SignInActions.signInRequest(data));
  }, []);  

  return (
  <Container>
    <Content>
      <PageTitle>{translate('titles.login')}</PageTitle>
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
        <Button type="text" onPress={()=>navigation.navigate("SignUp")}>
          {translate('buttons.register')}
        </Button>
    </Content>
  </Container>
)};

export default SignIn;