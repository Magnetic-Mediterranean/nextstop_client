import React from 'react';
import LandingPage from './components/landingPage/LandingPage';
import TripReviewMain from './components/tripReview/TripReviewMain';
import TripPurchaseMain from './components/tripPurchase/TripPurchaseMain';
import SmallSearchBar from './components/SearchBar/SmallSearch.jsx';
import LargeSearchBar from './components/SearchBar/LargeSearch.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import Checkout from './components/Checkout/Checkout.jsx';

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
        <div>
          <NavBar />
          <SmallSearchBar size={true}/>
        </div>
        // navBar = LargeSearchBar;
        break;
      case 4:
        navBar =
      <div>
        <NavBar />
        <SmallSearchBar size={false}/>
      </div>;
        break;
      case 5:
        navBar =
      <div>
        <NavBar />
        <SmallSearchBar size={false}/>
      </div>;
        break;
      case 6:
        navBar =
        <div>
          <NavBar />
          <SmallSearchBar size={false}/>
        </div>;
        break;
      default:
        navBar =
        <div>
          <NavBar />
          <SmallSearchBar size={true}/>
        </div>;
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
            <TripReviewMain
              next={this.incrementDisplayPage}
              back={this.decrementDisplayPage}
            />
          )}

        {displayPage === 5
          && (
            <TripPurchaseMain
              next={this.incrementDisplayPage}
              back={this.decrementDisplayPage}
            />
          )}

        {displayPage === 6
          && (
            <Checkout />
          )}
      </>
    )
  }
}
export default App;

