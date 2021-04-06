import React from 'react'
import Hotel from './Hotel.jsx'

const HotelList = ({ hotels }) => {

  return (
    <div>
      {hotels.map((hotel, index) => {
          return(
            <Hotel hotel={hotel} key={`hotel ${index}`} />
          )
        })}
    </div>
  )
}

export default HotelList;