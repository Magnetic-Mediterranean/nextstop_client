import React, { useState } from 'react';
import styled from 'styled-components';
import FlightDeals from './FlightData';
import Flight from './Flight';


const ReturnFlight = ({ incrementDisplayPage, decrementDisplayPage }) => {
  const [flightSelected, setfligthSelected] = useState();
  const handleOnClick = () => {
    incrementDisplayPage();
    localStorage.setItem('return', flightSelected);
  }
  return (
    <div>
    <HeaderContainer>
        <Button onClick={decrementDisplayPage}>Back</Button>
        <h3>Select a Returning Flight</h3>
        { flightSelected ? <Button onClick={handleOnClick}>Next</Button> : <ButtonPlacedHolder></ButtonPlacedHolder>}

    </HeaderContainer>
    <FlightContainer>
      {
        FlightDeals.map((flight) => <Flight FligthDetail={flight} setfligthSelected={setfligthSelected} flightSelected={flightSelected} />)
      }
    </FlightContainer>
    </div>
  )
}

export default ReturnFlight;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const FlightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  width: 78px;
  height: 35px;
  background: #C4C4C4;
  border-radius: 7px;
  border-color: transparent;
  &:hover {
    cursor: pointer;
  }
`;

const ButtonPlacedHolder = styled.div`
width: 78px;
height: 35px;
`;