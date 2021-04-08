import React from 'react';
import styled from 'styled-components';
import SubContainer from '../sharedStyles/subContainer'

const Experience = (props) => {

  return (
    <SubContainer
      className="card"
      style={{
        height: "300px"
      }}>
        <TripCheckout>
          <BoxRow>
            <Smallbox src={this.state.arr[0]}></Smallbox>
          </BoxRow>
          <LargeBox>
            <Text>Experience Info</Text>
            <Text style={{position: 'relative', left: '15%'}}>Price</Text>
          </LargeBox>
        </TripCheckout>
        <TripCheckout>
          <BoxRow>
            <Smallbox src={this.state.arr[1]}></Smallbox>
          </BoxRow>
          <LargeBox>
            <Text>Experience Info</Text>
            <Text style={{position: 'relative', left: '15%'}}>Price</Text>
          </LargeBox>
        </TripCheckout>
        <TripCheckout>
          <BoxRow>
            <Smallbox src={this.state.arr[2]}></Smallbox>
          </BoxRow>
          <LargeBox>
            <Text>Experience Info</Text>
            <Text style={{position: 'relative', left: '15%'}}>Price</Text>
          </LargeBox>
        </TripCheckout>
        <TripCheckout>
          <BoxRow>
            <Smallbox src={this.state.arr[3]}></Smallbox>
          </BoxRow>
          <LargeBox>
            <Text>Experience Info</Text>
            <Text style={{position: 'relative', left: '15%'}}>Price</Text>
          </LargeBox>
        </TripCheckout>
        <TripCheckout>
          <BoxRow>
            <Smallbox src={this.state.arr[4]}></Smallbox>
          </BoxRow>
          <LargeBox>
            <Text>Experience Info</Text>
            <Text style={{position: 'relative', left: '15%'}}>Price</Text>
          </LargeBox>
        </TripCheckout>
        <TripCheckout>
          <BoxRow>
            <Smallbox src={this.state.arr[5]}></Smallbox>
          </BoxRow>
          <LargeBox>
            <Text>Experience Info</Text>
            <Text style={{position: 'relative', left: '15%'}}>Price</Text>
          </LargeBox>
        </TripCheckout>

    </SubContainer>
  )
}

export default Experience;


const ImageContainer = styled.div`
  .default-image{
    align-items: center;
    object-fit: cover;
    border-radius: 8px;
    // border: 2px solid black;
    width: 360px;
    height: 300px;
    box-shadow: 0 10px 10px -5px #cccc;
  }
`;

const DetailsContainer = styled.div`
 display: flex;
 width: auto;
 width: 574px;
 height: 300px;
 background: white;
 border-radius: 8px;
 flex-direction: column;
 padding-left: 15px;
 box-shadow: 0 10px 10px -5px #cccc;
`;

const TripCheckout = styled.div `
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  overflow-behavior: smooth;
`
const Smallbox = styled.img `
  width: 100%;
  height: 300px;
  border-radius: 8px;
  box-shadow: 0 10px 10px -5px #cccc;
  position: relative;
  object-fit: cover;
`

const BoxRow = styled.div `
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 20%;
  margin-top: 30px;
  position: relative;
  left: 10%;
  overflow-behavior: smooth;
`

const LargeBox = styled.div `
  display: flex;
  height: 260px;
  width: 50%;
  position: relative;
  margin-top: 30px;
  border-radius: 8px;
  left: 15%;
  background-color: #cccc;
  box-shadow: 0 10px 10px -5px #cccc;
  padding: 20px;
  overflow: scroll;
`
const Text = styled.div `
  width: 100%;
`