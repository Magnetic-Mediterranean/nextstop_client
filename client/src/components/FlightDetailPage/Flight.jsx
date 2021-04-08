import React, { useState } from 'react';
import styled from 'styled-components';
import SubContainer from '../sharedStyles/subContainer';

const Flight = ({ FligthDetail, setfligthSelected, flightSelected }) => {
  const [selected, setSelected] = useState(false);

  const airlineIcon = {
    "UNITED AIRLINES": "icons/UnitedAirline.png",
    "PHILIPPINE AIRLINES": "icons/PhilippineAirlines.png",
    "HAWAIIAN AIRLINES": "icons/haiwaiianAirline.png",
    "DELTA AIR LINES": "icons/delta.png",
    "SOUTHWEST": "icons/southwest.png",
    "AMERICAN AIRLINES": "icons/AA.png",
    "TURKISH AIRLINES": "icons/turisk.png",
    "QATAR AIRWAYS": "icons/qatar.png",
    "AIR CANADA": "icons/aircanada.png",
    "JETBLUE AIRWAYS": "icons/jetBlue.png",
    "ALASKA AIRLINES": "icons/alaska.png",
    "SPIRIT AIRLINES": "icons/spirit.jpeg"
  }

  const flightLegs = (array) => {
    let display = '';
    for (let i = 0; i < array.length; i++) {
      display += array[i];
      if (i !== array.length - 1) {
        display += ' - ';
      }
    }
    return display;
  }

  const stop = (FligthDetail) => {
    if (FligthDetail.numberOfStops) {
      let display = FligthDetail.airports.slice(1, FligthDetail.airports.length - 1);
      let length = display.length;
      let displayStop = length === 1 ? "1 stop" : `${length} stops`;

      let legs = '';
      for (let i = 0; i < display.length; i++) {
        if (i === display.length - 1) {
          legs += display[i];
        } else {
          legs += display[i] + ", ";
        }
      }
      return (
        <div>
          <BigFont>{displayStop}</BigFont>
          <SmallFont>{legs}</SmallFont>
        </div>);
    }
    return "Non-stop";
  }

  const convertToTime = (APIdate) => {
    let date = new Date(APIdate);
    return date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
  }

  const handleSelected = () => {
    setSelected(!selected);
    setfligthSelected(FligthDetail);
  }

  return (
    <FlightContainer>
      { flightSelected === FligthDetail ?
        <Circle selected onClick={handleSelected} ></Circle>
        : <Circle onClick={handleSelected}></Circle>}
      {
        <Icon src={airlineIcon[FligthDetail.airline] ? airlineIcon[FligthDetail.airline] : "icons/airlinelogo.jpg"} />
      }

      <AlignWrapper>
        <Bold> <div>{convertToTime(FligthDetail.departureTime)}</div> - {convertToTime(FligthDetail.arrivalTime)} </Bold>
        <SmallFont>{FligthDetail.airline}</SmallFont>
      </AlignWrapper>

      <AlignWrapper>
        <BigFont>{FligthDetail.duration}</BigFont>
        <SmallFont>{flightLegs(FligthDetail.airports)}</SmallFont>
      </AlignWrapper>

      <AlignWrapper>
        {stop(FligthDetail)}
      </AlignWrapper>

      <Bold>${FligthDetail.price}</Bold>
    </FlightContainer>
  )
}

export default Flight;

const SmallFont = styled.p`
  font-size: 13px;
  margin: 0;
`;

const Bold = styled.p`
  font-weight: bold;
  font-size: 19px;
  margin: 0;
`;

const BigFont = styled.p`
  font-size: 19px;
  margin: 0;
`;

const AlignWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 25%;
`;

const FlightContainer = styled.div`
  display: flex;
  width: 95%;
  height: 100px;
  margin: 10px auto;
  background: white;
  border-radius: 8px;
  box-shadow: 0 10px 10px -5px #cccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
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
  background-color: ${props => props.selected ? "#4ECDC4" : "#CDCDCD"};
  border-radius: 50%;
`;