import React from 'react'
import Hotel from './Hotel.jsx'

// const HotelList = ({ hotels, handleSelectedHotel , selectedHotelId}) => {
const HotelList = ({ hotels, handleSelectedHotel , selectedHotelId, city}) => {
  return (
    <div>
      {hotels.map((hotel, index) => {
        const isSelected = hotel.id === selectedHotelId
          return(
            <Hotel hotel={hotel}
            city={city}
            selected={isSelected}
            handleSelectedHotel={handleSelectedHotel} key={`hotel ${index}`} />
          )
        })}
    </div>
  )
}

export default HotelList;