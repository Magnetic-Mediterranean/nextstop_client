import React from 'react';
import styled from 'styled-components';

class LeftBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return(
      <React.Fragment>
        <Title>
          <BackButton>Back</BackButton>
          <Logo> Booked Trip </Logo>
        </Title>
        <Container>
          <TripCheckout>
            <FN>Congratulations! Your package to {this.props.destination} is complete</FN>
          </TripCheckout>
          <TripCheckout>
            <FN style={{fontSize: '60px'}}>Price Package Details</FN>
            <FN style={{fontSize: '30px'}}>Destination: {this.props.destination}</FN>
            <FN style={{fontSize: '30px'}}>Type: {this.props.type}</FN>
            <FN style={{fontSize: '30px'}}>Price: ${this.props.price}</FN>
            <FN style={{fontSize: '30px'}}>Type: {this.props.type}</FN>
            <FN style={{fontSize: '30px', borderBottom: '1px solid black', paddingBottom:'30px'}}>Price: ${this.props.price}</FN>
            <FN style={{fontSize: '40px', marginTop: '20px'}}>Total: ${this.props.total}</FN>
          </TripCheckout>
        </Container>

      </React.Fragment>
    )
  }
}
export default LeftBox;
const TripCheckout = styled.div `
  display: flex;
  flex-direction: column;
  height: 70%;
  width: 50%;
  overflow-behavior: smooth;
  border: 1px solid black;
  background-color: #cccc;
  margin-left: 20px;
  margin-top: 20px;
  border-radius: 8px;
  text-align: center;
  justify-content: center;
  overflow: scroll;
`;

const FN = styled.div `
  font-size: 80px;
  left: 10%;
  position: relative;
  width: 80%;
`
const Logo = styled.div `
  width: 50%;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 40px;
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
  margin-top: 25px;
`
const Title = styled.div `
  display: flex;
  flex-direction: row;
  height: 10%;
  align-content:center;
  justify-content: center;
  width: 95%;
`
const Container = styled.div `
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
`