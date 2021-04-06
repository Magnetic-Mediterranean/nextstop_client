import React, { useState } from 'react';
import styled from 'styled-components';
import FlightDeals from './FlightData';
import Flight from './Flight';


const ReturnFlight = ({ incrementDisplayPage, decrementDisplayPage }) => {
  const [flightSelected, setfligthSelected] = useState();
  const handleOnClick = () => {
    incrementDisplayPage();
    console.log("return", flightSelected);
    localStorage.setItem('return', flightSelected);
  }
  return (
    <div>
      <h3>Select a Returning Flight</h3>
      <button onClick={decrementDisplayPage}>Back</button>
      {
        flightSelected && (
          <button onClick={handleOnClick}>Next</button>
        )
      }
      {
        FlightDeals.map((flight) => <Flight
          FligthDetail={flight}
          setfligthSelected={setfligthSelected}
          flightSelected={flightSelected}
        />)
      }
    </div>
  )
}

export default ReturnFlight;

const DealContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;