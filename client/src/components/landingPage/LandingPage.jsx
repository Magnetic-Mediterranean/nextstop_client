import React from 'react';

class LandingPage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <button onClick={this.props.incrementDisplayPage}>Click Me</button>
    )
  }
}

export default LandingPage;