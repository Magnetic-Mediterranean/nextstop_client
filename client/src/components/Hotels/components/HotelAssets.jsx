import React from 'react';

const HotelAssets = ({ image, name }) => {
  return (
    <div>
      <img
            className="default-image"
            src={image}
            alt={name}
            // height="226px"
            // width="226px"
          />
    </div>
  )
}

export default HotelAssets;