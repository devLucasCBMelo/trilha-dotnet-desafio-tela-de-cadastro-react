import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 120px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  button {
    width: 320px;
  }
`

export const Title = styled.h2`
  font-family: 'Open-Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  width: 320px;
  margin-bottom: 20px;
  line-height: 44px;

  color: #FFFFFF;
`

export const SubtitleLogin = styled.p`
  font-family: 'Open-Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  color: #FFFFFF;
  margin-top: 10px;
  margin-bottom: 15px;
  width: 320px;
`

export const SubBottonLogin = styled.p`
  font-family: 'Open-Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  color: #FFFFFF;
  margin-top: 25px;
  margin-bottom: 10px;
  width: 320px;
`

export const SubSubTitleLogin = styled.p`
font-size: 15px;
font-style: normal;
font-weight: bold;
margin-bottom: 35px;
margin-top: 15px;
color: #FFFFFF;


  strong {
    color: green;
  }

  strong:hover {
      cursor: pointer;
    }
`

export const Column = styled.div`
  flex: 1;
`

export const Background = styled.div`
  background-color: #2D2D37;
  height: 1000px;
  margin: 0;
  padding: 0;
`