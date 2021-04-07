import React from 'react';
import styled from 'styled-components';
import TravelUser from './TravelUser.jsx';
import Payment from './Payment.jsx';
import Billing from './BillingAdd.jsx';
class Checkout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checkoutObj: {}
    }
  }
  render() {
    return(
      <TripCheckout>
        <TravelUser />
        <Payment />
        <Billing />
      </TripCheckout>
    )
  }

}
export default Checkout;

const TripCheckout = styled.div `
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow-behavior: smooth;

`