import React from 'react';


class TripReviewMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render () {
    return (
      <div>
        <button onClick={this.props.back}> Back </button>
        <span> Trip Confirmation </span>
        <button onClick={this.props.next}> Checkout </button>
      </div>
    )
  }
}

export default TripReviewMain;