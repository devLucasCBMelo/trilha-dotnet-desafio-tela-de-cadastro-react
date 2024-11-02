import React from "react";
import { Background, Container, Column, Title } from "./styles";
import Header from "../../components/Header";

const Register = () => {
  return (
    <Background>
      <Header />
      <Container>
      <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
      </Container>
    </Background>
  )
}

export default Register;