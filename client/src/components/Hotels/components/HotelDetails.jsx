import React from 'react';
import styled from 'styled-components';

// const HotelDetails = ({ hotel }) => {
const HotelDetails = ({ hotel, city }) => {
  return (
    <DetailsContainer>
      {city ? <p style={{fontWeight: "bold", paddingTop: "10px", margin: "0px"}}>{`${hotel.type.toUpperCase()} IN ${city.toUpperCase()}`}</p> : <p style={{fontWeight: "bold", paddingTop: "10px"}} >{hotel.type.toUpperCase()}</p>}
      {/* <p>{`${hotel.type.toUpperCase()}`}</p> */}
      <p>{hotel.name}</p>
      {hotel.description ? <p>{`${hotel.description.slice(0,400)}...`}</p> : <p>Perfectly positioned in the heart of the city, this hotel offers the hotels guests an excellent location in the midst of the bustling metro area. Leisure guests can spend a sunny day out and about while staying with us. Take the family and explore the Academy of Sciences and Art Museums. No matter what brings you to to the city our hotels staff is waiting to welcome you. Book your stay today.</p>}
      <p>{`$${(Math.floor(hotel.price))} / night`}</p>
    </DetailsContainer>
  )
}

export default HotelDetails;

const DetailsContainer = styled.div`
  display: flex;
  width: 70%;
  height: 300px;
  background: white;
  border-radius: 8px;
  flex-direction: column;
  padding: 0px 30px 0px 30px;
  box-shadow: 0 10px 10px -5px #cccc;
  justify-content: center;
`;