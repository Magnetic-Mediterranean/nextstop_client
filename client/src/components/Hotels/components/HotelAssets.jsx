import React from 'react';
import styled from 'styled-components';

const HotelAssets = ({ image, name }) => {
  return (
    <ImageContainer>
      <img
            className="default-image"
            src={image}
            alt={name}
            // height="226px"
            // width="226px"
          />
    </ImageContainer>
  )
}

export default HotelAssets;

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