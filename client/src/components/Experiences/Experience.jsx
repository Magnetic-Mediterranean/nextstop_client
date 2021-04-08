import React from 'react';
import Buttons from './Buttons.jsx';
import styled from 'styled-components';
import Images from './images.jsx';
class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <TripCheckout>
        <Buttons back={this.props.back} next={this.props.next}/>
        <Images />
      </TripCheckout>
    )
  }

}

export default Experience;

const TripCheckout = styled.div `
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow-behavior: smooth;

`