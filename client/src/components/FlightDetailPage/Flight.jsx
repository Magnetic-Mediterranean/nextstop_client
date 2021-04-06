import React, { useState } from 'react';
import styled from 'styled-components';

const Flight = ({ FligthDetail, setfligthSelected }) => {
  const [selected, setSelected] = useState(false);

  const airlineIcon = {
    "United Airline": "icons/UnitedAirline.png",
    "Delta": "icons/delta.png",
    "Southwest": "icons/southwest.png",
    "American Airline": "icons/AA.png",
  }

  const flightLegs = (array) => {
    let display = '';
    for (let i = 0; i < array.length; i++) {
      display += array[i];
      if (i !== array.length - 1) {
        display += '-';
      }
    }
    return display;
  }

  let stops = 0;

  const stop = (FligthDetail) => {
    if (FligthDetail.numberOfStops) {
      let display = FligthDetail.airports.slice(1, FligthDetail.airports.length - 1);
      stops = display.length;
      return display;
    }
    return "Non-stop";
  }

  const convertToTime = (APIdate) => {
    let date = new Date(APIdate);
    return date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
  }

  const handleSelected = () => {
    setSelected(!selected);
    setfligthSelected(true);
  }

  return (
    <FlightContainer>
      { selected ? <Circle selected onClick={handleSelected}></Circle> : <Circle onClick={handleSelected}></Circle>}
      <div>
        {
          <Icon src={airlineIcon[FligthDetail.airline]} />
        }
        <p>{FligthDetail.airline}</p>
      </div>

      <div>
        {stop(FligthDetail)}
        {stops !== 0 && (
          <div>{stops} stop(s)</div>
        )}
      </div>

      <div>
        {flightLegs(FligthDetail.airports)}
        <br />
        {FligthDetail.duration}
      </div>

      <div> Departing: {convertToTime(FligthDetail.departureTime)} </div>
      <div> Arriving: {convertToTime(FligthDetail.arrivalTime)} </div>

      <p>${FligthDetail.price}</p>
    </FlightContainer>
  )
}

export default Flight;

const FlightContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Icon = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 5px;
  object-fit: cover;
`;

const Circle = styled.span`
  height: 25px;
  width: 25px;
  background-color: ${props => props.selected ? "Green" : "#CDCDCD"};
  border-radius: 50%;
`;