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

import * as GenreActions from '../../../store/modules/genre/actions';
import { Genre } from '../../../models/genre';
import { ReducerProps } from '../../../store/modules/interfaces';

const GenrePage: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const {genres} = useSelector<ReducerProps>(state=>state.genre);

  const dispatch = useDispatch();

  const handleSubmit = useCallback((data: GenreFormValues) => {
    dispatch(GenreActions.saveGenreRequest({name: data.name} as Genre));
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
          data={genres}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => 
            <GenreCard name={item.name}/>
          }
        />
      </ListContainer>
    </Container>
  );
}

export default GenrePage;