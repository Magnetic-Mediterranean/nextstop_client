import React from 'react';
import styled from 'styled-components';

const HotelDetails = ({ hotel }) => {
  return (
    <DetailsContainer>
      <p>{hotel.type}</p>
      <p>{hotel.name}</p>
      <p>{`$${hotel.original_price} / night`}</p>
    </DetailsContainer>
  )
}

export default HotelDetails;

const DetailsContainer = styled.div`
 display: flex;
 width: auto;
 width: 520px;
 height: 300px;
 background: white;
 border-radius: 8px;
 flex-direction: column;
 padding-left: 15px;
 box-shadow: 0 10px 10px -5px #cccc;
`;