import React, { useState } from 'react';
import styled from 'styled-components';
import FlightDeals from './FlightData';
import Flight from './Flight';


const ReturnFlight = ({ incrementDisplayPage, decrementDisplayPage }) => {
  const [flightSelected, setfligthSelected] = useState(false);

  return (
    <div>
      <h3>Select a Returning Flight</h3>
      <button onClick={decrementDisplayPage}>Back</button>
      {
        flightSelected && (
          <button onClick={incrementDisplayPage}>Next</button>
          )
      }
      {
        FlightDeals.map((flight) => <Flight key={flight.airline + flight.price} FligthDetail={flight} setfligthSelected={setfligthSelected} />)
      }
    </div>
  )
}

export default ReturnFlight;

const DealContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;