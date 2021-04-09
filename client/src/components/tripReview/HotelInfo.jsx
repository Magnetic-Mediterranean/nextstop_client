import React from 'react';
import styled from 'styled-components';
import SubContainer from '../sharedStyles/subContainer'

const HotelInfo = (props) => {
  const hotelPrice = Number(props.hotel.price).toFixed(0);
  return (
    <HotelInfoContainer>
      <SectionTitle> Hotel Details: </SectionTitle>
      <SubContainer
        className="card"
        style={{
          height: "300px",
          boxShadow: "none",
        }}>
      <ImageContainer>
      <img
            className="default-image"
            src={props.hotel.image}
            alt={props.hotel.name}
            // height="226px"
            // width="226px"
          />
    </ImageContainer>
    <DetailsContainer>
      <p style ={{
        fontSize: "17px",
        fontWeight: "500"
      }}>{props.hotel.type}</p>
      <p>{props.hotel.name}</p>
      <p>{`$${hotelPrice} per night`}</p>
    </DetailsContainer>
    </SubContainer>
    </HotelInfoContainer>
  )
}

export default HotelInfo;

const HotelInfoContainer = styled.div`
  width: 100%;
  margin: 40px 0px;
`;

const SectionTitle = styled.div`
  margin-left: 10px;
  font-size: 20px;
`;

const ImageContainer = styled.div`
  .default-image{
    align-items: center;
    object-fit: cover;
    border-radius: 8px;
    // border: 2px solid black;
    width: 360px;
    height: 300px;
    box-shadow: 0 10px 10px -5px #cccc;
    margin-right: 40px;
  }
`;

const DetailsContainer = styled.div`
 display: flex;
 width: 70%;
 height: 300px;
 background: white;
 border-radius: 8px;
 flex-direction: column;
 padding-left: 15px;
 box-shadow: 0 10px 10px -5px #cccc;
 align-items: center;
 justify-content: center;
`;