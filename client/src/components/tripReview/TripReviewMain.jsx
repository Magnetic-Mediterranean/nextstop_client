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
      experiences: [],
      infoLoaded: false,
      numberOfNights: '4',
      totalExperienceCost: '',
    }
    this.handleClick = this.handleClick.bind(this);
    this.calculateNumberOfNights = this.calculateNumberOfNights.bind(this);
    this.totalExperienceCost = this.totalExperienceCost.bind(this);
  }

  componentDidMount() {
    // get info from localstorage
    const departingFlight = JSON.parse(window.localStorage.getItem('depart'));
    console.log(departingFlight)
    const returningFlight = JSON.parse(window.localStorage.getItem('return'));

    const hotel = JSON.parse(window.localStorage.getItem('hotel'));

    const experiences = JSON.parse(window.localStorage.getItem('experiences'));
    console.log('this is experiences', experiences);

    this.setState({
      departingFlight: departingFlight,
      returningFlight: returningFlight,
      hotel: hotel,
      experiences: experiences,
    })

    setTimeout(() => {
      this.setState({
        infoLoaded: true,
      })
    }, 1000)
    this.calculateNumberOfNights();
    this.totalExperienceCost();

  }

  calculateNumberOfNights() {
    var date1 = new Date(this.props.dateFrom);
    var date2 = new Date(this.props.dateTo);
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    var numberOfNights = Math.ceil(timeDiff / (1000 * 3600 * 24));
  }

  totalExperienceCost() {
    var totalCost = 0;
    const { experiences } = this.state;

    for (var i = 0; i < experiences.length; i++) {
      totalCost += Number(experiences[i].price);
    }
    this.setState({
      totalExperienceCost: totalCost
    })
  }

  handleClick() {
    this.props.next();
  }


  render () {
    const { departingFlight, returningFlight, infoLoaded, hotel, experiences, numberOfNights, totalExperienceCost } = this.state;
    return (
      <>
            {!infoLoaded &&
      (
        <Container>
           <div >
          <img
          style={{
            width: "100%"
          }}
          src="https://i.pinimg.com/originals/65/ba/48/65ba488626025cff82f091336fbf94bb.gif"/>
        </div>
        </Container>
    )}
      {infoLoaded &&
      (<Container style={{overflow: 'auto'}}>
        <Header>
          <BackButton onClick={this.props.back}> Back </BackButton>
          <PageTitle> Trip Review </PageTitle>
          <CheckoutButton onClick={this.props.next}> Checkout </CheckoutButton>
        </Header>
          <FlightInfo
            departingFlight={departingFlight}
            returningFlight={returningFlight}
            departDate={this.props.dateFrom}
            returnDate={this.props.dateTo}
          />
        <HotelInfo hotel={hotel}/>
        <ExperiencesInfo
          experiences={experiences}
        />
        <CostInfo
          hotel={hotel}
          departingFlight={departingFlight}
          returningFlight={returningFlight}
          numberOfNights={numberOfNights}
          totalExperienceCost={totalExperienceCost}
        />
        <CheckoutButton
        onClick={this.handleClick}
        style={{
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          padding: "25px 70px",
          fontSize: "16px",
          marginBottom: "40px",
          marginTop: "20px",
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