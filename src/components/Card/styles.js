import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  background-color: #3b4651;
  position: relative;
  margin-bottom: 24px;
`

export const ImageBackground = styled.img`
  width: 100%;
  height: 180px;
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 12px;
`

export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 12px;

  div {
    margin-left: 12px;
  }

  h4 {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #FFFFFF;
    margin: 0;
  }

  p {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400px;
    font-size: 12px;
    line-height: 16px;
    color: #FFFFFF;
    margin: 0;
  }
`

export const UserPicture = styled.img`
  height: 32px;
  width: 32px;
  border-radius: 22px;
  border: 3px solid #FFFFFF;
`

export const PostInfo = styled.div`
  margin-bottom: 12px;

  h4 {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    margin: 0;
    color: #FFFFFF;
  }

  p {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    margin: 0;
    color: #FFFFFF;
  }
`

export const HasInfo = styled.div`
  margin-top: 12px;

  h4 {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    color: #FFFFFF;
    margin: 0;
  }

  p {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    color: #FFFFFF;
  }
`