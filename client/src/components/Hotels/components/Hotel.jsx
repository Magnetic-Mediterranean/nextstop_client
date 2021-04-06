import React from 'react';
import HotelAssets from './HotelAssets.jsx'
import HotelDetails from './HotelDetails.jsx'

const Hotel = ({ hotel }) => {
  return (
    <div>
      <HotelAssets image={hotel.image} name={hotel.name} />
      <HotelDetails hotel={hotel} />
    </div>
  )
}

export default Hotel;