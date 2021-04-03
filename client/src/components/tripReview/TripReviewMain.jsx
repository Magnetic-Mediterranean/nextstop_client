import React from 'react';
import styled from 'styled-components';
import FlightInfo from './FlightInfo';
import HotelInfo from './HotelInfo';
import ExperiencesInfo from './ExperiencesInfo';
import CostInfo from './CostInfo';



class TripReviewMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    // get info from localstorage
  }

  render () {
    return (
      <Container>
        <Header>
          <BackButton onClick={this.props.back}> Back </BackButton>
          <PageTitle> Trip Confirmation </PageTitle>
          <CheckoutButton onClick={this.props.next}> Checkout </CheckoutButton>
        </Header>
        <FlightInfo />
        <HotelInfo />
        <ExperiencesInfo />
        <CostInfo />
        <CheckoutButton
        onClick={this.props.next}
        style={{
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          padding: "15px 30px",
          fontSize: "15px"
          }}> Checkout </CheckoutButton>
      </Container>
    )
  }
}

export default TripReviewMain;

const Header = styled.div`
  display: flex;
  justify-contents: center;
  margin-top: 50px;
  padding: 15px;
`;

const PageTitle = styled.span`
  margin: auto;
  font-size: 30px;
`;

const Container = styled.div`
  width: 90%;
  height: 100%;
  min-width: 500px;
  max-width: 1000px;
  min-height: 500px;
  margin: auto;
  background: #E4E5E0;
`;

const BackButton = styled.button`
  background: #C4C4C4;
  padding: 5px 15px;
  border-radius: 7px;
  margin: 2px;
  border-color: transparent;
  &:hover {
    cursor: pointer;
  }
`;

const CheckoutButton = styled.button`
  background: #FF6B6B;
  padding: 5px 15px;
  border-radius: 7px;
  margin: 2px;
  border-color: transparent;
  &:hover {
    cursor: pointer;
  }
`;