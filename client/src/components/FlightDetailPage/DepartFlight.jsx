import React from 'react';
import styled from 'styled-components';

const DepartFlight = ({incrementDisplayPage, decrementDisplayPage}) => {
  return (
    <div>
      <h3>Select a Departing Flight</h3>
      <button onClick={decrementDisplayPage}>Back</button>
      <button onClick={incrementDisplayPage}>Next</button>
    </div>
  )
}

export default DepartFlight;

const DealContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;