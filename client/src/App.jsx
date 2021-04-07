import React from 'react';
import LandingPage from './components/landingPage/LandingPage';
import TripReviewMain from './components/tripReview/TripReviewMain';
import TripPurchaseMain from './components/tripPurchase/TripPurchaseMain';
import SmallSearchBar from './components/SearchBar/SmallSearch.jsx';
import LargeSearchBar from './components/SearchBar/LargeSearch.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import Checkout from './components/TripBooked/Booked.jsx';
import DepartFlight from './components/FlightDetailPage/DepartFlight.jsx';
import ReturnFlight from './components/FlightDetailPage/ReturnFlight.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayPage: 6,
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
        navBar =
        <React.Fragment>
          <NavBar />
          <SmallSearchBar size={true}/>
        </React.Fragment>
        // navBar = LargeSearchBar;
        break;
      case 4:
        navBar =
        <React.Fragment>
          <NavBar />
          <SmallSearchBar size={false}/>
        </React.Fragment>;
        break;
      case 5:
        navBar =
        <React.Fragment>
          <NavBar />
          <SmallSearchBar size={false}/>
        </React.Fragment>;
        break;
      case 6:
        navBar =
        <React.Fragment>
          <NavBar />
          <SmallSearchBar size={false}/>
        </React.Fragment>;
        break;
      case 7:
        navBar = <NavBar />;
        break;
      default:
        navBar =
        <React.Fragment>
          <NavBar />
          <SmallSearchBar size={true}/>
        </React.Fragment>;
        // navBar = SmallSearchBar;
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
            <DepartFlight incrementDisplayPage={this.incrementDisplayPage} decrementDisplayPage={this.decrementDisplayPage}/>
          )}

        {displayPage === 2
          && (
            <ReturnFlight incrementDisplayPage={this.incrementDisplayPage} decrementDisplayPage={this.decrementDisplayPage}/>
          )}

        {displayPage === 3
          && (
            <div> Hotels </div>
          )}

        {displayPage === 4
          && (
            <div> Experiences </div>
          )}

        {displayPage === 5
          && (
            <TripReviewMain
              next={this.incrementDisplayPage}
              back={this.decrementDisplayPage}
            />
          )}

        {displayPage === 6
          && (
            <TripPurchaseMain
              next={this.incrementDisplayPage}
              back={this.decrementDisplayPage}
            />
          )}

        {displayPage === 7
          && (
            <Checkout back={this.decrementDisplayPage}/>
          )}
      </>
    )
  }
}
export default App;

