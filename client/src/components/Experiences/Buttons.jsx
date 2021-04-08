import React from 'react';
import styled from 'styled-components';

var Buttons = (props) => {
  return(
    <Title>
      <BackButton onClick={props.back}>Back</BackButton>
      <Logo> Select One Or More Experiences </Logo>
      <CheckoutButton onClick={props.next}>Book</CheckoutButton>
    </Title>
  )
}

export default Buttons;

const TravelContainer = styled.div `
  display: flex;
  flex-direction: column;
  height: 55%;
  min-height: 55%;
  border-bottom: 1px solid black;
  width: 90%;
  position: relative;
  left: 5%;
  overflow-x: hidden;
  overflow-y: scroll;
  padding-bottom: 50px;
`

const Logo = styled.div `
  width: 100%;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 40px;
`

const CheckoutButton = styled.button `
  padding: 20px;
  background-color: #4ECDC4;
  border-radius: 8px;
  border: solid #cccc;
  width: 100px;
  height: 30px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: #FFE66D;
  }
  transition: 0.2s  ease-in;
  position:relative;
  right: 10%;

`

const BackButton = styled.button `
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  border: solid #cccc;
  width: 100px;
  height: 30px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: #FFE66D;
  }
  transition: 0.2s  ease-in;
  position:relative;
  left: 10%;
`

const Title = styled.div `
  display: flex;
  flex-direction: row;
  margin-top: 40px;
`