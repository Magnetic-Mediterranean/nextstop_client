import React from 'react'
import Hotel from './Hotel.jsx'
import styled from 'styled-components';

const HotelList = ({ hotels, handleSelectedHotel , selectedHotelId, city}) => {
  return (
    <Body>
      <HotelInfoContainer>
        {hotels.map((hotel, index) => {
          const isSelected = hotel.id === selectedHotelId
            return(
              <Hotel hotel={hotel}
              city={city}
              selected={isSelected}
              handleSelectedHotel={handleSelectedHotel} key={`hotel ${index}`} />
            )
          })}
      </HotelInfoContainer>
      <Footer></Footer>
    </Body>
  )
}

export default HotelList;

const HotelInfoContainer = styled.div`
  width: 100%;
  margin: 40px 0px;
`;

const Body = styled.div`
  width: 90%;
  height: 100%;
`;

const Footer = styled.div`
  height: 30px;
`;