import React from "react";
import { CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture } from "./styles";
import { FiThumbsUp } from "react-icons/fi";

const Card = () => {
  return (
    <CardContainer>
      <ImageBackground />
      <Content>
        <UserInfo>
          <UserPicture src="https://avatars.githubusercontent.com/u/137126173?v=4"/>
          <div>
            <h4>Lucas Costa</h4>
            <p>Há 8 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de HTML e CSS</h4>
          <p>Projeto feito no curso de HTML e CSS no bootcamp DIO Global...<strong>Saiba Mais</strong></p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #JavaScript</h4>
          <p>
            <FiThumbsUp /> 10
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  )
}

export default Card;