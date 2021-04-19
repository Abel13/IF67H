import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Input, PageTitle, Select } from '../../atoms';
import { translate } from '../../../localization';

import { Container, FieldMarginVertical, FormContainer, MarginVerticalAroundFields, ListContainer } from './styles';
import { useNavigation } from '@react-navigation/core';
import { GenreFormValues } from './interfaces';
import {Item} from 'react-native-picker-select';
import { ScrollView, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { GenreCard } from '../../organisms';

const Genre: React.FC = () => {
  const formRef = useRef<FormHandles>(null);


  const dispatch = useDispatch();

  const handleSubmit = useCallback((data: GenreFormValues) => {
    // dispatch(SignInActions.signInRequest(data));
  }, []); 

  return (
    <Container>
      <FormContainer>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
            name="name"
            icon="tag"
            autoCorrect={false}
            placeholder={translate("placeholders.genre")}
          />
          <MarginVerticalAroundFields/>
          <Button onPress={() => { formRef.current?.submitForm() }}>
            {translate('buttons.save')}
          </Button>
        </Form>
      </FormContainer>
      <MarginVerticalAroundFields/>
      <ListContainer>
        <MarginVerticalAroundFields/>
        <PageTitle>{translate("titles.genres")}</PageTitle>
        <MarginVerticalAroundFields/>
        <FlatList
          data={[
            {id: 0, name: "Ação"},
            {id: 1, name: "Fantasia"},
            {id: 2, name: "Fantasia"},
            {id: 3, name: "Fantasia"},
            {id: 4, name: "Fantasia"},
            {id: 5, name: "Fantasia"},
            {id: 6, name: "Fantasia"},
            {id: 7, name: "Fantasia"},
            {id: 8, name: "Fantasia"},
            {id: 9, name: "Abel"},
          ]}
          renderItem={({item}) => 
            <GenreCard/>
          }
        />
      </ListContainer>
    </Container>
  );
}

export default Genre;