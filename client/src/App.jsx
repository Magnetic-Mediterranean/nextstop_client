import React from 'react';
import LandingPage from './components/landingPage/LandingPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayPage: 0,
    }
    this.incrementDisplayPage = this.incrementDisplayPage.bind(this);
    this.decrementDisplayPage = this.decrementDisplayPage.bind(this);

  }

  incrementDisplayPage(currentPage) {
    const nextPage = this.state.displayPage + 1;
    this.setState({
      displayPage: nextPage,
    })
  }

  decrementDisplayPage(currentPage) {
    const previousPage = this.state.displayPage - 1;
    this.setState({
      displayPage: previousPage,
    })
  }

  render() {
    const { displayPage } = this.state;
    let navBar;
    switch (displayPage) {
      case 0:
        navBar = LargeSearchBar;
        break;
      case 4:
        navBar = <div />;
        break;
      case 5:
        navBar = <div />;
        break;
      case 6:
        navBar = <div />;
        break;
      default:
        navBar = SmallSearchBar;
    }
    return (

      // Navbar
      <>
        {navBar}
        {displayPage === 0
          && (
            <LandingPage
              incrementDisplayPage={this.incrementDisplayPage} />
          )}

        {displayPage === 1
          && (
            <div> Flights </div>
          )}

        {displayPage === 2
          && (
            <div> Hotels </div>
          )}

        {displayPage === 3
          && (
            <div> Experiences </div>
          )}

        {displayPage === 4
          && (
            <div> Trip Review </div>
          )}

        {displayPage === 5
          && (
            <div> Trip Purchase </div>
          )}

        {displayPage === 6
          && (
            <div> Confirmation </div>
          )}
      </>
    )
  }
}

export default App;