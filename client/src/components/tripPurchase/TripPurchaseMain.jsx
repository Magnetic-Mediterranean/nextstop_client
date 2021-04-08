import React from 'react';
import styled from 'styled-components';
import TravelerList from './TravelerList';
import BillingInfo from './BillingInfo';
import BillingAddress from './BillingAddress';
import Container from '../sharedStyles/container.js';
import BackButton from '../sharedStyles/backButton.js';
import CheckoutButton from '../sharedStyles/checkoutButton.js';

class TripPurchaseMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      travellers: [1, 2],
      inputtedInfo: false,
    }
    this.compileTravelData = this.compileTravelData.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    var travelerArray = [];
    var start = 1;
    while (start <= this.props.travelers) {
      travelerArray.push(start);
      start++;
    }
    console.log('this is travelerArray', travelerArray)
    this.setState({
      travellers: travelerArray,
    })

    const costDetails = JSON.parse(window.localStorage.getItem('costDetails'));
    console.log(costDetails);
  }

  compileTravelData (keyValue, value) {
    this.setState({[keyValue]: value, inputtedInfo: true,})
  }

  handleSubmit (event) {
    event.preventDefault();

    const { inputtedInfo } = this.state;
    var verified = inputtedInfo;

    var stateObj = Object.assign({}, this.state);
      delete stateObj.inputtedInfo;
      delete stateObj.travellers;
    var keys = Object.keys(stateObj);

    keys.forEach((outerKey) => {
      var innerKeys = Object.keys(stateObj[outerKey]);
      innerKeys.forEach((innerKey) => {
        if (stateObj[outerKey][innerKey].length === 0) {
          if (innerKey === 'billingAddress2') {} else {
            verified = false;
          }
        }
      })
    })

    verified ? this.props.next() : window.alert('Please fill out all required information')

  }


  render () {
    const { travellers } = this.state;
    return (
      <SurroundingDiv>
        <Container style={{overflow: 'auto'}}>
          <Header>
            <BackButton onClick={this.props.back}> Back </BackButton>
            <PageTitle> Trip Checkout </PageTitle>
            <CheckoutButton onClick={this.handleSubmit}> Purchase! </CheckoutButton>
          </Header>

          <Section>Traveler Information: </Section>
          <TravelerList
            travellers={travellers}
            compileTravelData={this.compileTravelData}
          />
          <LineBreak />
          <Section>Billing Information: </Section>
          <BillingInfo
            compileTravelData={this.compileTravelData}
          />
          <BillingAddress
            compileTravelData={this.compileTravelData}
          />

          <CheckoutButton
            onClick={this.handleSubmit}
            style={{
              margin: "auto",
              display: "flex",
              justifyContent: "center",
              padding: "25px 70px",
              fontSize: "16px",
              marginBottom: "40px",
              marginTop: "20px",
              }}
            >
          Purchase!
          </CheckoutButton>
        </Container>
      </SurroundingDiv>
    )
  }
}

export default TripPurchaseMain;

const Div = styled.div`
  display: flex;
`;

const SurroundingDiv = styled.div`
  height: 100%
  width: 100%
  overflow: hidden;
`;

const Header = styled.div`
  display: flex;
  justify-contents: center;
  margin-top: 20px;
  padding: 15px;
`;

const LineBreak = styled.div`
  border-bottom: 2px solid black;
  margin-bottom: 4px;
`;

const PageTitle = styled.span`
  margin: auto;
  font-size: 30px;
`;

const Section = styled.div`
  font-size: 20px;
  margin-left: 10px;
`;

// const Container = styled.div`
//   width: 90%;
//   height: 100%;
//   min-width: 500px;
//   max-width: 1000px;
//   min-height: 500px;
//   margin: auto;
//   background: #E4E5E0;
//   overflow: auto;
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
//   }
// `;