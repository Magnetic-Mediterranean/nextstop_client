import React from 'react';

const HotelDetails = ({ hotel }) => {
  return (
    <div>
      <p>{hotel.type}</p>
      <p>{hotel.name}</p>
      <p>{`$${hotel.original_price} / night`}</p>
    </div>
  )
}

export default HotelDetails;