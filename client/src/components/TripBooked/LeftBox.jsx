import React from 'react';
import styled from 'styled-components';

class LeftBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      departingFlight: '',
      returningFlight: '',
      hotel: '',
      infoLoaded: false,
      total: 4644.72,
    }
  }
  componentDidMount() {
    // get info from localstorage
    const departingFlight = JSON.parse(window.localStorage.getItem('depart'));
    const returningFlight = JSON.parse(window.localStorage.getItem('return'));
    const hotel = JSON.parse(window.localStorage.getItem('hotel'));

    const experiences = JSON.parse(window.localStorage.getItem('experiences'));
    console.log('this is experiences', experiences);
    const total = JSON.parse(window.localStorage.getItem('total'));
    this.setState({
      departingFlight: departingFlight,
      returningFlight: returningFlight,
      hotel: hotel,
      // experiences: experiences,
      infoLoaded:true,
    })
  }
  render() {
    return(
      <React.Fragment>
        <Title>
          <BackButton onClick={this.props.back}>Back</BackButton>
          <Logo> Booked Trip </Logo>
        </Title>
        <Container>
          <TripCheckout style={{position: 'relative', left: '7%'}}>
            <FN >Congrats! Your package to {this.props.destination} is complete</FN>
          </TripCheckout>
          <TripCheckout style={{position: 'relative', left: '10%'}}>
            <FN style={{fontSize: '60px'}}>Info</FN>
            <FN style={{fontSize: '35px'}}>Departing Flight</FN>
            <FN style={{fontSize: '25px'}}>{this.state.departingFlight.airline}</FN>
            <FN style={{fontSize: '20px'}}>{this.state.departingFlight.arrivalTime}</FN>
            <FN style={{fontSize: '20px'}}>{this.state.departingFlight.departureTime}</FN>
            <FN style={{fontSize: '20px'}}>{this.state.departingFlight.price}</FN>
            <FN style={{fontSize: '35px'}}>Returning Flight</FN>
            <FN style={{fontSize: '25px'}}>{this.state.returningFlight.airline}</FN>
            <FN style={{fontSize: '20px'}}>{this.state.returningFlight.arrivalTime}</FN>
            <FN style={{fontSize: '20px'}}>{this.state.returningFlight.departureTime}</FN>
            <FN style={{fontSize: '20px'}}>{this.state.returningFlight.price}</FN>
            <FN style={{fontSize: '35px'}}>Hotel</FN>
            <FN style={{fontSize: '20px'}}>{this.state.hotel.name}</FN>
            <FN style={{fontSize: '40px', marginTop: '20px'}}>Total: ${this.state.total}</FN>
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
  height: 90%;
  width: 40%;
  overflow-behavior: smooth;
  background-color: white;
  margin-left: 20px;
  margin-top: 20px;
  border-radius: 8px;
  text-align: center;
  justify-content: center;
  overflow: scroll;
  box-shadow: 0 10px 10px -5px #cccc;
  font-weight: bold;
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
  height: 800px;
  width: 100%;
`