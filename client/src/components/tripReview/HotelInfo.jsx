import React from 'react';
import styled from 'styled-components';

const HotelInfo = (props) => {

  return (
    <HotelInfoContainer>
      <div> Hotel Details: </div>
      <HotelDetails>Hotel Info</HotelDetails>
    </HotelInfoContainer>
  )
}

export default HotelInfo;

const HotelInfoContainer = styled.div`
  width: 100%;
`;

const HotelDetails = styled.div`
  width: 95%;
  height: 100px;
  margin: 10px auto;
  background: white;
  border-radius: 3px;
`;