//import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Header from '../../components/Header';
import { Background, Container, HomeImage, TextContent, Title, TitleHightLight } from './styles';

import imagem from "../../assets/programando.png";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();


  return (
    <Background>
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHightLight>
              Implemente
              <br />
            </TitleHightLight>
            o seu futuro global agora!
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadas do mundo e encare seu novo
            desafio profissional, evoluindo em comunidade com os melhores experts.
          </TextContent>
          <Button title="Começar agora" $variant='secondary' onClick={() => null }/>
        </div>
        <div>
          <HomeImage src={imagem} alt="Imagem principal"/>
        </div>
      </Container>
    </Background>
  )
}

export default Home;