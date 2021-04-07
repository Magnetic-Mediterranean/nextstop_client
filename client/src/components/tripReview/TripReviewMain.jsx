import React from 'react';
import styled from 'styled-components';
import FlightInfo from './FlightInfo';
import HotelInfo from './HotelInfo';
import ExperiencesInfo from './ExperiencesInfo';
import CostInfo from './CostInfo';
import BackButton from '../sharedStyles/backButton'
import CheckoutButton from '../sharedStyles/checkoutButton';
import Container from '../sharedStyles/container'
import Header from '../sharedStyles/header'
import PageTitle from '../sharedStyles/pageTitle'


class TripReviewMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      departingFlight: {},
      returningFlight: {},
      hotel: {},
      experiences: {},
      infoLoaded: false,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    // get info from localstorage
    // const departingFlight = JSON.parse(window.localStorage.getItem('depart'));
    // console.log('this is departingFlight', departingFlight);
    // const returningFlight = JSON.parse(window.localStorage.getItem('return'));
    // console.log('this is returningFlight', returningFlight)
    // const hotel = JSON.parse(window.localStorage.getItem('hotel'));
    // const experiences = JSON.parse(window.localStorage.getItem('experiences'));

    // dummy data
    const departingFlight = {
      airline: "Delta",
      departureTime: "2021-08-06T13:05:00",
      arrivalTime: "2021-08-08T08:30:00",
      duration: "29H25M",
      numberOfStops: 1,
      airports: ["SFO", "LAX", "ERW"],
      price: "813.53"
    };
    const returningFlight = {
      airline: "Southwest",
      departureTime: "2021-08-06T18:05:00",
      arrivalTime: "2021-08-08T05:30:00",
      duration: "12H25M",
      numberOfStops: 0,
      airports: ["SFO", "ERW"],
      price: "813.53"
    };
    this.setState({
      departingFlight: departingFlight,
      returningFlight: returningFlight,
      // hotel: hotel,
      // experiences: experiences,
      infoLoaded: true,
    })
  }

  handleClick() {

    this.props.next();
  }

  render () {
    const { departingFlight, returningFlight, infoLoaded } = this.state;
    return (
      <>
            {!infoLoaded &&
      (<Container>
        <div style={{display: "flex", justifyContent:"center"}}>
          <img src="https://i.pinimg.com/originals/65/ba/48/65ba488626025cff82f091336fbf94bb.gif"/>
        </div>
      </Container>
    )}
      {infoLoaded &&
      (<Container style={{overflow: 'auto'}}>
        <Header>
          <BackButton onClick={this.props.back}> Back </BackButton>
          <PageTitle> Trip Confirmation </PageTitle>
          <CheckoutButton onClick={this.props.next}> Checkout </CheckoutButton>
        </Header>
        <FlightInfo
          departingFlight={departingFlight}
          returningFlight={returningFlight}
        />
        <HotelInfo />
        <ExperiencesInfo />
        <CostInfo />
        <CheckoutButton
        onClick={this.handleClick}
        style={{
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          padding: "15px 30px",
          fontSize: "15px"
          }}> Checkout </CheckoutButton>
      </Container>
    )}
    </>
    )
  }
}

export default TripReviewMain;

// const Header = styled.div`
//   display: flex;
//   justify-contents: center;
//   margin-top: 20px;
//   padding: 15px;
// `;

// const PageTitle = styled.span`
//   margin: auto;
//   font-size: 30px;
//   font-weight: bold;
// `;

// const Container = styled.div`
//   width: 90%;
//   height: 100%;
//   min-width: 500px;
//   max-width: 1000px;
//   min-height: 500px;
//   margin: auto;
//   background: #ececec;
// `;

// const BackButton = styled.button`
//   background: #C4C4C4;
//   padding: 5px 15px;
//   border-radius: 7px;
//   margin: 2px;
//   border-color: transparent;
//   &:hover {
//     cursor: pointer;
//   }
// `;

// const CheckoutButton = styled.button`
//   background: #FF6B6B;
//   padding: 5px 15px;
//   border-radius: 7px;
//   margin: 2px;
//   border-color: transparent;
//   &:hover {
//     cursor: pointer;
//     background: #FFE66D;
//     transition: 0.5s;
//     border: 1px #CCCC solid;
//   }
// `;