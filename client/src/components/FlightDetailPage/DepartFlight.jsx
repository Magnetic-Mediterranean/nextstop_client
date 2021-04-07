import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import FlightDeals from './FlightData';
import Flight from './Flight';
import PageTitle from '../sharedStyles/pageTitle';
import CheckoutButton from '../sharedStyles/checkoutButton';

const DepartFlight = ({ incrementDisplayPage, decrementDisplayPage }) => {
  const [flightSelected, setfligthSelected] = useState();
  const [displayFlight, setDisplayFlight] = useState(FlightDeals.slice(0, 10));
  const Index = useRef(10);

  const handleOnClick = () => {
    incrementDisplayPage();
    console.log(flightSelected);
    localStorage.setItem('depart', JSON.stringify(flightSelected));
  }

  const display10 = (index) => {
    let lastFlightInSet = ( index + 10 ) <= FlightDeals.length - 1 ? index + 10 : FlightDeals.length;
    setDisplayFlight(FlightDeals.slice(0, lastFlightInSet));
    Index.current += 10;
  }

  return (
    <Body>
    <HeaderContainer>
        <Button onClick={decrementDisplayPage}>Back</Button>
        <PageTitle>Select a Departing Flight</PageTitle>
        { flightSelected ? <Button onClick={handleOnClick}>Next</Button> : <ButtonPlacedHolder></ButtonPlacedHolder>}
    </HeaderContainer>
    <FlightContainer>
      {
        displayFlight.map((flight) => <Flight FligthDetail={flight} setfligthSelected={setfligthSelected} flightSelected={flightSelected} />)
      }
      {
        FlightDeals.length > 10 && (
          <CheckoutButton
           hidden = { Index.current >= FlightDeals.length ? true : false}
           onClick={() => {display10(Index.current)}} >SHOW MORE</CheckoutButton>
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
  background: #E4E5E0;
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
  display: ${props => props.hidden ? "none" : "block"};
  width: 78px;
  height: 35px;
  background: #C4C4C4;
  border-radius: 7px;
  margin: 30px;
  border-color: transparent;
  &:hover {
    cursor: pointer;
  }
`;

const ButtonPlacedHolder = styled.div`
  width: 78px;
  height: 35px;
  margin: 30px;
`;
