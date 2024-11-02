//import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Header from '../../components/Header';
import {
  Background,
  Container,
  SubtitleLogin,
  ForgottenPasswordText,
  TitleLogin,
  CreateText,
  Title,
  Row,
  Column,
  Wrapper
} from './styles';

import Input from '../../components/Input';

import { MdEmail, MdLock } from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { api } from '../../services/api'

const schema = yup.object({
  email: yup.string().email('Email não é válido').required('Campo obrigatório'),
  password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo obrigatório'),
}).required();

const Login = () => {
  const navigate = useNavigate();

  const { control, handleSubmit, formState: { errors, isValid } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  const onSubmit = async formData => {
    try {
      const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
      console.log('minha data: ', data)
      if (data.length === 1) {
        navigate('/feed');
      } else {
        alert('Email ou senha inválido')
      }
    } catch {
      alert('Houve um erro, tente novamente')
    }
  };


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
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubtitleLogin>Faça seu login e make the change</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="email" leftIcon={ <MdEmail /> } />
              <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={ <MdLock /> } />
              <Button title="Entrar" $variant='secondary' type="submit" />
            </form>
            <Row>
              <ForgottenPasswordText>Esqueci minha senha</ForgottenPasswordText>
              <CreateText>Criar conta</CreateText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </Background>
  )
}

export default Login;