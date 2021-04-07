import React from 'react';
import styled from 'styled-components';
import HotelAssets from './HotelAssets.jsx'
import HotelDetails from './HotelDetails.jsx'

const Hotel = ({ hotel , selected, handleSelectedHotel}) => {
  console.log('selected', selected)
  return (
    <HotelContainer>
      {selected ? <CheckedCircle onClick={() => handleSelectedHotel(hotel.id)}></CheckedCircle> : <Circle onClick={() => handleSelectedHotel(hotel.id)}></Circle>}
      <HotelAssets image={hotel.image} name={hotel.name} />
      <HotelDetails hotel={hotel} />
    </HotelContainer>
  )
}

export default Hotel;

const HotelContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 15px;
  margin: 15px;
`;

const Circle = styled.span`
height: 25px;
width: 25px;
background-color: #CDCDCD;
border-radius: 50%;
`;

const CheckedCircle = styled.span`
height: 25px;
width: 25px;
background-color: #4ECDC4;
border-radius: 50%;
`;