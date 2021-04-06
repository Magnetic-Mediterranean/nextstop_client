import React from 'react';
import TravelUser from './TravelUser.jsx';
import styled from 'styled-components';

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
`