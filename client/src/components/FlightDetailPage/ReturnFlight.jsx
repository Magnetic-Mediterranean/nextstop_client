import React, { useState } from 'react';
import styled from 'styled-components';
import FlightDeals from './FlightData';
import Flight from './Flight';
import PageTitle from '../sharedStyles/pageTitle';


const ReturnFlight = ({ incrementDisplayPage, decrementDisplayPage }) => {
  const [flightSelected, setfligthSelected] = useState();
  const handleOnClick = () => {
    incrementDisplayPage();
    localStorage.setItem('return', flightSelected);
  }
  return (
    <Body>
      <HeaderContainer>
        <Button onClick={decrementDisplayPage}>Back</Button>
        <PageTitle>Select a Returning Flight</PageTitle>
        {flightSelected ? <Button onClick={handleOnClick}>Next</Button> : <ButtonPlacedHolder></ButtonPlacedHolder>}

      </HeaderContainer>
      <FlightContainer>
        {
          FlightDeals.map((flight) => <Flight FligthDetail={flight} setfligthSelected={setfligthSelected} flightSelected={flightSelected} />)
        }
      </FlightContainer>
    </Body>
  )
}

export default ReturnFlight;

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