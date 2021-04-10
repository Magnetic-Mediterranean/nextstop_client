import React, { useState, useRef } from "react";
import styled from "styled-components";
import SubContainer from "../sharedStyles/subContainer";

const Flight = ({ FligthDetail, setfligthSelected, flightSelected }) => {
  const [selected, setSelected] = useState(false);
  const [hoverDate, sethoverDate] = useState(false);
  const displayDate = useRef();

  const airlineIcon = {
    "UNITED AIRLINES": "icons/UnitedAirline.png",
    "PHILIPPINE AIRLINES": "icons/PhilippineAirlines.png",
    "HAWAIIAN AIRLINES": "icons/haiwaiianAirline.png",
    "DELTA AIR LINES": "icons/delta.png",
    "SOUTHWEST": "icons/southwest.png",
    "AMERICAN AIRLINES": "icons/AA.png",
    "TURKISH AIRLINES": "icons/turkish.png",
    "QATAR AIRWAYS": "icons/qatar.png",
    "AIR CANADA": "icons/aircanada.png",
    "JETBLUE AIRWAYS": "icons/jetBlue.png",
    "ALASKA AIRLINES": "icons/alaska.jpeg",
    "SPIRIT AIRLINES": "icons/spirit.jpeg",
    "FRONTIER AIRLINES": "icons/frontier.png",
    "TAP PORTUGAL": "icons/TAP.png",
    "LUFTHANSA": "icons/lufthansa.png",
    "AIR FRANCE": "icons/AirFrance.png",
  };

  const concatInfo = (array, separator) => {
    let returnString = "";
    for (let i = 0; i < array.length; i++) {
      if (i === array.length - 1) {
        returnString += array[i];
      } else {
        returnString += array[i] + separator;
      }
    }
    return returnString;
  };

  const stop = (FligthDetail) => {
    if (FligthDetail.numberOfStops) {
      const display = FligthDetail.airports.slice(
        1,
        FligthDetail.airports.length - 1
      );
      const length = display.length;
      const displayStop = length === 1 ? "1 stop" : `${length} stops`;

      return (
        <div>
          <BigFont>{displayStop}</BigFont>
          <SmallFont>{concatInfo(display, ", ")}</SmallFont>
        </div>
      );
    }
    return "Non-stop";
  };

  const convertToTime = (APIdate, isArrival) => {
    const date = new Date(APIdate);
    return (
      <Time
        value={isArrival}
        onMouseEnter={() => {
          handleMouseEnter(APIdate, isArrival);
        }}
        onMouseLeave={handleMouseLeave}
      >
        {date.toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })}
      </Time>
    );
  };

  const handleSelected = () => {
    setSelected(!selected);
    setfligthSelected(FligthDetail);
  };

  const handleMouseEnter = (APIdate, isArrival) => {
    const date = new Date(APIdate);
    const weekday = date.toLocaleString("en-us", { weekday: "short" });
    const month = date.toLocaleString("default", { month: "short" });
    const day = date.toLocaleString("default", { day: "numeric" });
    const time = date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    displayDate.current = (
      <TimeAndDate arrival={isArrival ? true : false}>
        {" "}
        {time} on {weekday}, {month} {day}
      </TimeAndDate>
    );
    sethoverDate(true);
  };

  const handleMouseLeave = () => {
    sethoverDate(false);
  };

  return (
    <FlightContainer onClick={handleSelected}>
      {flightSelected === FligthDetail ? (
        <Circle selected></Circle>
      ) : (
        <Circle></Circle>
      )}
      {
        <Icon
          src={
            airlineIcon[FligthDetail.airline]
              ? airlineIcon[FligthDetail.airline]
              : "icons/airlinelogo.png"
          }
        />
      }

      <AlignWrapper>
        <Bold>
          {convertToTime(FligthDetail.departureTime, false)}-
          {convertToTime(FligthDetail.arrivalTime, true)}
        </Bold>
        {hoverDate && <div> {displayDate.current} </div>}
        <SmallFont>{FligthDetail.airline}</SmallFont>
      </AlignWrapper>

      <AlignWrapper>
        <BigFont>{FligthDetail.duration}</BigFont>
        <SmallFont>{concatInfo(FligthDetail.airports, " - ")}</SmallFont>
      </AlignWrapper>

      <AlignWrapper>{stop(FligthDetail)}</AlignWrapper>

      <Bold>${FligthDetail.price}</Bold>
    </FlightContainer>
  );
};

export default Flight;

const SmallFont = styled.p`
  font-size: 13px;
  margin: 0;
`;

const Time = styled.div`
  position: relative;
`;

const TimeAndDate = styled.div`
  top: -33px;
  left: ${(props) => (props.arrival ? "160px" : "80px")};
  background: white;
  width: 200px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 10px solid #fff;
  box-shadow: 5px 5px 5px 1px #cccc;
  position: absolute;
  &:before {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid #4ecdc4;
    border-bottom: 10px solid transparent;
    right: 50%;
    bottom: -30px;
    filter: drop-shadow(0 -0.0625rem 0.0625rem #b7b7b7);
  }
  &:after {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid #fff;
    border-bottom: 10px solid transparent;
    right: 50%;
    bottom: -27px;
  }
`;

const Bold = styled.span`
  font-weight: bold;
  font-size: 19px;
  margin: 0;
  display: flex;
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
  max-width: 1300px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 10px 10px -5px #cccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  &:hover {
    transform: scale(1.01);
    transition: 0.5s;
  }
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
  background-color: ${(props) => (props.selected ? "#4ECDC4" : "#CDCDCD")};
  border-radius: 50%;
`;
