import React from 'react';
import styled from 'styled-components';
import HotelAssets from './HotelAssets.jsx'
import HotelDetails from './HotelDetails.jsx'
// import SubContainer from '../../sharedStyles/subContainer.js'

const Hotel = ({ hotel , selected, handleSelectedHotel, city}) => {
  return (
      <SubContainer className="card"
      style={{
        height: "300px",
        boxShadow: "none",
      }}>
          {selected ? <CheckedCircle onClick={() => handleSelectedHotel(hotel.id)}></CheckedCircle> : <Circle onClick={() => handleSelectedHotel(hotel.id)}></Circle>}
          <HotelAssets image={hotel.image} name={hotel.name} />
          <HotelDetails hotel={hotel}
          city={city}
          />
      </SubContainer>
  )
}

export default Hotel;

const SubContainer = styled.div`
  display: flex;
  width: 95%;
  height: 100px;
  margin: 10px auto;
  max-width: 1300px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 10px 10px -5px #cccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  &:hover {
    transform: scale(1.01);
    transition: .5s;
  }
`;

// const SubContainer = styled.div`
//     display: flex;
//     flex-direction: row;
//     justify-content: space-between;
//     width: 95%;
//     height: 300px;
//     margin: 10px auto;
// `;

const Circle = styled.span`
  height: 25px;
  width: 25px;
  min-width: 25px;
  min-height: 25px;
  background-color: #CDCDCD;
  border-radius: 50%;
  margin: 10px;
`;

const CheckedCircle = styled.span`
  height: 25px;
  width: 25px;
  min-width: 25px;
  min-height: 25px;
  background-color: #4ECDC4;
  border-radius: 50%;
  margin: 10px;
`;