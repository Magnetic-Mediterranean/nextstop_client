import React, { useState } from 'react';
import styled from 'styled-components';
import FlightDeals from './FlightData';
import Flight from './Flight';


const DepartFlight = ({ incrementDisplayPage, decrementDisplayPage }) => {
  const [flightSelected, setfligthSelected] = useState();
  const handleOnClick = () => {
    incrementDisplayPage();
    console.log("depart", flightSelected);
    localStorage.setItem('depart', flightSelected);
  }

  return (
    <div>
      <h3>Select a Departing Flight</h3>
      <button onClick={decrementDisplayPage}>Back</button>
      {
        flightSelected && (
          <button onClick={handleOnClick}>Next</button>
          )
      }
      {
        FlightDeals.map((flight) => <Flight FligthDetail={flight} setfligthSelected={setfligthSelected} flightSelected={flightSelected}/>)
      }
    </div>
  )
}

export default DepartFlight;

const DealContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;