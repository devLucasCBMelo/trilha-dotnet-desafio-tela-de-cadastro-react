//import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import { Background, Column, Container, Title, TitleHightLight } from './styles';

import Card from '../../components/Card';
import UserInfo from '../../components/UserInfo';

const Feed = () => {
  return (
    <Background>
      <Header autenticado={true}/>
      <Container>
        <Column flex={3} >
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />

        </Column>
        <Column flex={1}>
          <TitleHightLight>RANKING 5 TOP DA SEMANA</TitleHightLight>
          <UserInfo percentual={35} nome="Lucas Costa" image="https://avatars.githubusercontent.com/u/137126173?v=4"/>
          <UserInfo percentual={40} nome="Lucas Costa" image="https://avatars.githubusercontent.com/u/137126173?v=4"/>
          <UserInfo percentual={90} nome="Lucas Costa" image="https://avatars.githubusercontent.com/u/137126173?v=4"/>
          <UserInfo percentual={20} nome="Lucas Costa" image="https://avatars.githubusercontent.com/u/137126173?v=4"/>
          <UserInfo percentual={72} nome="Lucas Costa" image="https://avatars.githubusercontent.com/u/137126173?v=4"/>
        </Column>
      </Container>
    </Background>
  )
}

export default Feed;