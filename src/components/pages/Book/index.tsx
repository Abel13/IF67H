import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Input, Select } from '../../atoms';
import { translate } from '../../../localization';

import { useNavigation } from '@react-navigation/core';
import { BookFormValues } from './interfaces';
import { Genre } from '../../../models/genre';
import {Item} from 'react-native-picker-select';
import { Alert, ScrollView } from 'react-native';
import { Book } from '../../../models/book';
import * as Yup from 'yup';
import * as BookActions from '../../../store/modules/book/actions';

import { Container, FieldMarginVertical, MarginVerticalAroundFields } from './styles';

const BookPage: React.FC = ({route}) => {
  const formRef = useRef<FormHandles>(null);
  const book: Book = route.params;
  const [initialData, setInitialData] = useState({} as Book);
  const {genres} = useSelector(state=>state.genre);
  const [genreList, setGenreList] = useState<Item[]>([] as Item[]);
  const [genre, setGenre] = useState<Genre>({} as Genre);
  const navigation = useNavigation();

  const dispatch = useDispatch();

  useEffect(()=>{
    if(book){
      setGenre(genres.find((e: Genre)=>e.id==book.genreId))
      setInitialData(book);
    }
  },[book])

  const handleSubmit = useCallback(async (data: BookFormValues) => {
    data = {...data, genre}
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        title: Yup.string().required(translate("error.titleRequired")),
        summary: Yup.string().required(translate("error.abstractRequired")),
        genre: Yup.object().required(translate("error.genreRequired"))
      });
  
      await schema.validate(data, { abortEarly: false });
      
      const {title, summary, genre} = data;
      const {id: genreId} = genre;

      if(book)
        dispatch(BookActions.editBookRequest({id: book.id, title, summary, genreId} as Book))
      else
        dispatch(BookActions.saveBookRequest({title, summary, genreId} as Book))

    } catch (error) {
      Alert.alert(translate("error.invalid"), translate("error.invalidMessage"))
    }
  }, [genre]); 

  useEffect(()=>{
    setGenreList([]);
  }, [])

  useEffect(()=>{
  }, [genre])

  useEffect(()=>{
    if(genres) {
      const genreSelect = genres.map<Item>((element: Genre)=>{
        return {
          label: element.name,
          value: element,
          key: element.id,
          inputLabel: element.name
        }
      })

      setGenreList(genreSelect);
    }
  },[genres])

  return (
    <Container>
      <ScrollView>
        <Form ref={formRef} onSubmit={handleSubmit} initialData={initialData}>
          <Input
            name="title"
            icon="type"
            autoCorrect={false}
            placeholder={translate("placeholders.title")}
          />
          <FieldMarginVertical/>
          <Input
            name="summary"
            icon="align-left"
            placeholder={translate("placeholders.summary")}
            multiline
          />
          <FieldMarginVertical/>
          <Select
            name="genre"
            placeholder={translate("placeholders.summary")}
            items={genreList}
            onValueChange={value => {
              setGenre(value)
            }}
            value={genre}
          />
          <MarginVerticalAroundFields/>
          <Button onPress={() => { formRef.current?.submitForm() }}>
            {translate('buttons.save')}
          </Button>
        </Form>
      </ScrollView>
    </Container>
  );
}

export default BookPage;