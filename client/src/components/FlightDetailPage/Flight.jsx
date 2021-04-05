import React from 'react';
import styled from 'styled-components';

const Flight = ({FligthDetail}) => {
  const airlineIcon = {
    "United Airline" : "icons/UnitedAirline.png",
    "Delta" : "icons/delta.png",
    "Southwest" : "icons/southwest.png",
    "American Airline" : "icons/AA.png",
  }
  return (
    <div>
      <h3>{FligthDetail.airline}</h3>
      {
        <Icon src={airlineIcon[FligthDetail.airline]} />
      }
    </div>
  )
}

export default Flight;

const Icon = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 5px;
  object-fit: cover;
`;