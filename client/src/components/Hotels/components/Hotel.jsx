import React from 'react';
import styled from 'styled-components';
import HotelAssets from './HotelAssets.jsx'
import HotelDetails from './HotelDetails.jsx'
// import SubContainer from '../../sharedStyles/subContainer.js'

const Hotel = ({ hotel , selected, handleSelectedHotel}) => {
  console.log('selected', selected)
  return (
    <SubContainer className="card">
      {selected ? <CheckedCircle onClick={() => handleSelectedHotel(hotel.id)}>✓</CheckedCircle> : <Circle onClick={() => handleSelectedHotel(hotel.id)}></Circle>}
      <HotelAssets image={hotel.image} name={hotel.name} />
      <HotelDetails hotel={hotel} />
    </SubContainer>
  )
}

export default Hotel;

const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 95%;
  height: 300px;
  margin: 10px auto;

`;

const Circle = styled.span`
  height: 25px;
  min-height: 25px;
  width: 25px;
  min-width: 25px;
  background-color: #CDCDCD;
  border-radius: 50%;
  margin: 5px;
`;

const CheckedCircle = styled.span`
  height: 25px;
  min-height: 25px;
  width: 25px;
  min-width: 25px;
  background-color: #4ECDC4;
  border-radius: 50%;
  margin: 5px;
`;