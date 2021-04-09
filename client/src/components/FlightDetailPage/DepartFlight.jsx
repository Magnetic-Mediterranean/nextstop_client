import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import FlightDeals from './FlightData';
import Flight from './Flight';
// import CheckoutButton from '../sharedStyles/checkoutButton';
import BackButton from '../sharedStyles/backButton';

const DepartFlight = ({ flightData, incrementDisplayPage, decrementDisplayPage }) => {
  const [flightSelected, setfligthSelected] = useState();
  const [displayFlight, setDisplayFlight] = useState(flightData.slice(0, 10));
  const Index = useRef(10);

  const handleOnClick = () => {
    incrementDisplayPage();
    localStorage.setItem('depart', JSON.stringify(flightSelected));
  }

  const display10 = (index) => {
    let flightLength = flightData.length - 1;
    let lastFlightInSet = ( index + 10 ) <= flightLength ? index + 10 : flightData.length;
    setDisplayFlight(flightData.slice(0, lastFlightInSet));
    Index.current = lastFlightInSet;
  }

  return (
    <Body>
    <HeaderContainer>
        <BackButton onClick={decrementDisplayPage}>Back</BackButton>
        <PageTitle>Departing Flight</PageTitle>
        { flightSelected ? <BackButton onClick={handleOnClick}>Next</BackButton> : <ButtonPlacedHolder></ButtonPlacedHolder>}
    </HeaderContainer>
    <FlightContainer>
      {
        displayFlight.map((flight) => <Flight FligthDetail={flight} setfligthSelected={setfligthSelected} flightSelected={flightSelected} />)
      }
      {
        flightData.length > 10 && (
          <Button
           hidden = { Index.current >= flightData.length ? true : false}
           onClick={() => {display10(Index.current)}} >MORE</Button>
        )
      }
    </FlightContainer>
    </Body>
  )
}

export default DepartFlight;

const Body = styled.div`
  width: 90%;
  height: 100%;
`;

const PageTitle = styled.span`
 font-size: 40px;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 10vh;
`;

const FlightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  display: ${props => props.hidden ? "none" : "flex"};
  padding: 20px;
  background-color: #4ECDC4;
  border-radius: 8px;
  font-size: 15px;
  border: solid #cccc;
  width: 100px;
  height: 30px;
  text-align: center;
  justify-content: center;
  align-items: center;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: #FFE66D;
  }
  transition: 0.2s  ease-in;
`;

const ButtonPlacedHolder = styled.div`
  border: solid white;
  padding: 0;
  width: 94px;
  height: 44px;
`;
