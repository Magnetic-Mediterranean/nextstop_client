import React from 'react';
import styled from 'styled-components';
import SubContainer from '../sharedStyles/subContainer'

const HotelInfo = (props) => {

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
      <p>{props.hotel.type}</p>
      <p>{props.hotel.name}</p>
      <p>{`$${props.hotel.original_price} / night`}</p>
    </DetailsContainer>
    </SubContainer>
    </HotelInfoContainer>
  )
}

export default HotelInfo;

const HotelInfoContainer = styled.div`
  width: 100%;
`;

const SectionTitle = styled.div`
  margin-left: 23.828px;
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