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

export const Column = styled.div`
  flex: 1;
`

export const Background = styled.div`
  background-color: #2D2D37;
  height: 1000px;
  margin: 0;
  padding: 0;
`