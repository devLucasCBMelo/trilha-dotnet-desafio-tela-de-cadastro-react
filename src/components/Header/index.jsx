import React from "react";

import {
  BuscarInputContainer,
  //Column,
  Row,
  Input,
  Menu,
  MenuRight,
  //UserPicture,
  Wrapper,
  Container,
  LogoDio,
  UserPicture,
} from './styles';

import Button from "../Button";
import logo from "../../assets/logo_dio.png"
import { useNavigate } from "react-router-dom";

const Header = ({autenticado}) => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/register');
  }

  const handleLogin = () => {
    navigate('/login');
  }

  return (
    <Wrapper>
      <Container>
        <Row>
          <LogoDio src={logo} alt="logo da dio"/>
          {autenticado ? (
          <>
            <BuscarInputContainer>
              <Input placeholder="Buscar..."/>
            </BuscarInputContainer>
            <Menu>Live Code</Menu>
            <Menu>Global</Menu>
          </>  
          ) : null }
        </Row>
        <Row>
          {autenticado ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/137126173?v=4"/>
          ) : (
            <>
              <MenuRight href="$">Home</MenuRight>
              <Button title="Entrar" onClick={handleLogin}/>
              <Button title="Cadastrar" onClick={handleRegister}/>
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  )
}

export default Header;