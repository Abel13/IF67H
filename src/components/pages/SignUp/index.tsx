import React, { useCallback, useEffect, useRef } from 'react';
import { Text } from 'react-native';
import { Button, Input } from '../../atoms';
import { translate } from '../../../localization';

import { useNavigation } from '@react-navigation/native';


import { Container, Content, Title, FieldMarginVertical, MarginVerticalAroundFields } from './styles';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { useDispatch, useSelector } from 'react-redux';

import * as UserActions from '../../../store/modules/user/actions';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleSubmit = useCallback((data: SignUpFormValues) => {
    console.log("SUBMIT", data);
    dispatch(UserActions.signUpRequest(data));
  }, []);


  useEffect(() => {
    console.log(user);
  }, [user])

  return (
  <Container>
    <Content>
      <Title>{translate('titles.sign')}</Title>
        <MarginVerticalAroundFields />
        <Form ref={formRef} onSubmit={handleSubmit}>
        <Input
            name="name"
            icon="user"
            autoCorrect={false}
            autoCapitalize="words"
            placeholder={translate("placeholders.name")}
          />
          <FieldMarginVertical/>
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
            {translate('buttons.save')}
          </Button>
        </Form>
        <Button type="text" onPress={() => navigation.navigate("SignIn")}>
          {translate('buttons.backToLogin')}
        </Button>
    </Content>
  </Container>
)};

export default SignUp;