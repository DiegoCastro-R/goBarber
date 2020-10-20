import React, { useRef } from 'react';
import { Image, KeyboardAvoidingView, Platform,View,ScrollView,TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'
import {useNavigation} from '@react-navigation/native';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';
import Input from '../../components/Input';
import Button from '../../components/Button';

import logoIgm from '../../assets/logo.png';

import { Container, Title,BacktoSignInButtonText,BacktoSignInButton } from './styles';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();
  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);

  return(
    <>
    <KeyboardAvoidingView
    style={{flex:1}} behavior={Platform.OS === 'ios' ? 'padding' : undefined} enabled>
      <ScrollView contentContainerStyle={{flex:1}} keyboardShouldPersistTaps="handled">
  <Container >

    <Image source={logoIgm}/>
    <View>
    <Title>Crie sua Conta</Title>
    </View>

    <Form ref={formRef} onSubmit={(data) =>{console.log(data)}}>
    <Input
    autoCapitalize="words"
    name="name"
    icon="user"
    placeholder="Nome"
    returnKeyType="next"
    onSubmitEditing={() => {
      emailInputRef.current?.focus();
    }}></Input>
    <Input
    ref={emailInputRef}
    keyboardType="email-address"
    autoCorrect={false}
    autoCapitalize="none"
    name="email"
    icon="mail"
    placeholder="E-mail"
    returnKeyType="next"
    onSubmitEditing={() => {
      passwordInputRef.current?.focus();
    }}></Input>
    <Input
    ref={passwordInputRef}
    secureTextEntry
    textContentType="newPassword"
    name="password"
    icon="lock"
    placeholder="Senha"
    returnKeyType="send"
    onSubmitEditing={() => {formRef.current?.submitForm()}}></Input>


    </Form>
    <Button onPress={() =>formRef.current?.submitForm()}>Entrar</Button>
  </Container>
  </ScrollView>
  </KeyboardAvoidingView>
  <BacktoSignInButton onPress={() =>{navigation.goBack()}}>
    <Icon name="arrow-left" size={20} color="#fff" ></Icon>
<BacktoSignInButtonText>Voltar para Logon</BacktoSignInButtonText>
</BacktoSignInButton>

  </>
  )};

export default SignUp;
