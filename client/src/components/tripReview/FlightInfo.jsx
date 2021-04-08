import React from 'react';
import styled from 'styled-components';
import SubContainer from '../sharedStyles/subContainer'

const FlightInfo = ({ departingFlight, returningFlight, departDate, returnDate }) => {
  let stops = 0;
  const stop = (FligthDetail) => {

    if (FligthDetail.numberOfStops) {
      let display = FligthDetail.airports.slice(1, FligthDetail.airports.length - 1);
      stops = display.length;
      return display;
    }
    return "Non-stop";
  };

  const flightLegs = (array) => {
    let display = '';
    for (let i = 0; i < array.length; i++) {
      display += array[i];
      if (i !== array.length - 1) {
        display += '-';
      }
    }
    return display;
  };

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

  const convertToTime = (APIdate) => {
    let date = new Date(APIdate);
    return date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
  }

  const departureDate = new Date(departDate).toUTCString();
  console.log(departDate)
  const returningDate = new Date(returnDate).toUTCString();

  return (
    <FlightInfoContainer>
      <SectionTitle> Flight Details: </SectionTitle>
      <SubTitle>{`Departing flight on ${departureDate}`}</SubTitle>
      <SubContainer style={{justifyContent: "space-around"}}>

      <InnerDiv>
        {
          <Icon src={airlineIcon[departingFlight.airline] ? airlineIcon[departingFlight.airline] : "icons/airlinelogo.jpg"} />
        }
        <p style={{marginTop: "0px"}}>{departingFlight.airline}</p>
      </InnerDiv>

      <InnerDiv>
        {stop(departingFlight)}
        {stops !== 0 && (
          <InnerP>{stops} stop(s)</InnerP>
        )}
      </InnerDiv>

      <InnerDiv style={{
        marginLeft: "-15px",
        marginRight: "-15px"
      }}>
      <div style={{
          display:"flex",
          justifyContent: "center"}}>
        {flightLegs(departingFlight.airports)}
        <br />
        {departingFlight.duration}
        </div>
      </InnerDiv>

      <InnerDiv> Depart: {convertToTime(departingFlight.departureTime)} </InnerDiv>
      <InnerDiv> Arrive: {convertToTime(departingFlight.arrivalTime)} </InnerDiv>

      <InnerP>${departingFlight.price}</InnerP>

      </SubContainer>
      <SubContainer style={{justifyContent: "space-around"}}>

      <InnerDiv>
        {
          <Icon src={airlineIcon[returningFlight.airline] ? airlineIcon[returningFlight.airline] : "icons/airlinelogo.jpg"} />
        }
        <p style={{marginTop: "0px"}}>{returningFlight.airline}</p>
      </InnerDiv>

      <InnerDiv>
        {stop(returningFlight)}
        {stops !== 0 && (
          <div>{stops} stop(s)</div>
        )}
      </InnerDiv>

      <InnerDiv style={{
        marginLeft: "-15px",
        marginRight: "-15px"
      }}>
        <div style={{
          display:"flex",
          justifyContent: "center"}}>
        {flightLegs(returningFlight.airports)}
        <br />
        {returningFlight.duration}
        </div>
      </InnerDiv>

      <InnerDiv> Depart: {convertToTime(returningFlight.departureTime)} </InnerDiv>
      <InnerDiv> Arrive: {convertToTime(returningFlight.arrivalTime)} </InnerDiv>

      <InnerP>${returningFlight.price}</InnerP>

      </SubContainer>
    </FlightInfoContainer>
  )
}

export default FlightInfo;

const FlightInfoContainer = styled.div`
width: 100%;
margin: 40px 0px;
`;

const SectionTitle = styled.div`
  margin-left: 23.828px;
  font-size: 20px;
`;

const SubTitle = styled.div`
  margin-left: 23.828px;
  font-size: 15px;
`;

const Icon = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 5px;
  object-fit: contain;
`;

const InnerDiv = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 16.6%;
  font-family: 'Roboto', sans-serif;
`;

const InnerP = styled.p`
  margin: auto;
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
`;