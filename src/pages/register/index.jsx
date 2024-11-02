import React from "react";
import { Background, Container, Column, Title, SubtitleLogin, SubSubTitleLogin } from "./styles";
import Header from "../../components/Header";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { MdEmail, MdLock, MdPerson } from 'react-icons/md'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  nomeCompleto: yup.string().required('Campo obrigatório'),
  email: yup.string().email('Email não é válido').required('Campo obrigatório'),
  password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo obrigatório'),
}).required();

const Register = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  const onSubmit = () => {

  }

  return (
    <Background>
      <Header />
      <Container>
      <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Title>
            Comece agora grátis
          </Title>
          <SubtitleLogin>
            Crie sua conta e make the change
          </SubtitleLogin>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input name="Nome completo" errorMessage={errors?.email?.message} control={control} placeholder="Nome Completo" leftIcon={ <MdPerson /> }/>
            <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="Email" leftIcon={ <MdEmail /> } />
            <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={ <MdLock /> } />
            <Button title="Criar minha conta" $variant='secondary' type="submit" />
          </form>
          <SubtitleLogin>
            Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
          </SubtitleLogin>
          <SubSubTitleLogin>
            Já tenho conta. <strong>Fazer login</strong>
          </SubSubTitleLogin>
        </Column>
      </Container>
    </Background>
  )
}

export default Register;