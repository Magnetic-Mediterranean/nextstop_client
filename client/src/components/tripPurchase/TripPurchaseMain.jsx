import React from 'react';
import styled from 'styled-components';
import TravelerList from './TravelerList';
import BillingInfo from './BillingInfo';
import BillingAddress from './BillingAddress';

class TripPurchaseMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      travellers: [1, 2],
    }
    this.compileTravelData = this.compileTravelData.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {

  }

  compileTravelData (keyValue, value) {
    if (value.dateOfBirth) {
      value.dateOfBirth = value.dobMonth + ' ' + value.dobDay + ' ' + value.dobYear;
      delete value.dobMonth;
      delete value.dobDay;
      delete value.dobYear;
    }
    this.setState({[keyValue]: value})
  }

  handleSubmit (event) {
    event.preventDefault();
    console.log(this.state);
    this.props.next();
  }


  render () {
    const { travellers } = this.state;
    return (
      <SurroundingDiv>
        <Container>
          <Header>
            <BackButton onClick={this.props.back}> Back </BackButton>
            <PageTitle> Trip Checkout </PageTitle>
            <CheckoutButton onClick={this.props.next}> Purchase! </CheckoutButton>
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
              padding: "15px 30px",
              fontSize: "15px"
            }}
          > Purchase! </CheckoutButton>


        </Container>
      </SurroundingDiv>
    )
  }
}

export default TripPurchaseMain;

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

const Container = styled.div`
  width: 90%;
  height: 100%;
  min-width: 500px;
  max-width: 1000px;
  min-height: 500px;
  margin: auto;
  background: #E4E5E0;
  overflow: auto;
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