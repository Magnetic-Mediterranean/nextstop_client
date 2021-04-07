import React from 'react';
import styled from 'styled-components';
import Confetti from 'react-confetti';
import LeftBox from './LeftBox.jsx';
class Checkout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checkoutObj: {}
    }
  }
  render() {
    return(
      <TripCheckout id='tripCheckout'>
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
        />
        <LeftBox back={this.props.back} destination='Paris' type='none' price='1234' total='2468'/>
      </TripCheckout>
    )
  }

}
export default Checkout;

const TripCheckout = styled.div `
  display: flex;
  flex-direction: column ;
  height: 90%;
  width: 100%;
  overflow: hidden;
  top: 10px;
  position: relative;

`;