import React from 'react';
import styled from 'styled-components';
import FlightDeals from './FlightData';
import Flight from './Flight';


const DepartFlight = ({incrementDisplayPage, decrementDisplayPage}) => {
  return (
    <div>
      <h3>Select a Departing Flight</h3>
      <button onClick={decrementDisplayPage}>Back</button>
      <button onClick={incrementDisplayPage}>Next</button>
      {
        FlightDeals.map((flight) => <Flight FligthDetail={flight} />)
      }
    </div>
  )
}

export default DepartFlight;

const DealContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;