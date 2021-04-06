import React from 'react';
import styled from 'styled-components';

const FlightInfo = (props) => {

  return (
    <FlightInfoContainer>
      <div> Flight Details: </div>
      <IndividualFlights>Flight to Destination</IndividualFlights>
      <IndividualFlights>Flight back Home</IndividualFlights>
    </FlightInfoContainer>
  )
}

export default FlightInfo;

const FlightInfoContainer = styled.div`
  width: 100%;
`;

const IndividualFlights = styled.div`
  width: 95%;
  height: 100px;
  margin: 10px auto;
  background: white;
  border-radius: 8px;
`;