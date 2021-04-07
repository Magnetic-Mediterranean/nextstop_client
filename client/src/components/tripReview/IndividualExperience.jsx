import React from 'react';
import styled from 'styled-components';
import SubContainer from '../sharedStyles/subContainer'

const Experience = (props) => {

  return (
    <SubContainer
      className="card"
      style={{
        height: "300px"
      }}>
      <ImageContainer>
        {/* <img
          className="default-image"
          src={props.hotel.image}
          alt={props.hotel.name}
        /> */}
      </ImageContainer>
      <DetailsContainer>
        {/* <p>{props.hotel.type}</p>
        <p>{props.hotel.name}</p>
        <p>{`$${props.hotel.original_price} / night`}</p> */}
      </DetailsContainer>
    </SubContainer>
  )
}

export default Experience;


const ImageContainer = styled.div`
  .default-image{
    align-items: center;
    object-fit: cover;
    border-radius: 8px;
    // border: 2px solid black;
    width: 360px;
    height: 300px;
    box-shadow: 0 10px 10px -5px #cccc;
  }
`;

const DetailsContainer = styled.div`
 display: flex;
 width: auto;
 width: 574px;
 height: 300px;
 background: white;
 border-radius: 8px;
 flex-direction: column;
 padding-left: 15px;
 box-shadow: 0 10px 10px -5px #cccc;
`;