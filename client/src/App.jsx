import React from 'react';
import styled from 'styled-components';
import LandingPage from './components/landingPage/LandingPage';
import TripReviewMain from './components/tripReview/TripReviewMain';
import TripPurchaseMain from './components/tripPurchase/TripPurchaseMain';
import SmallSearchBar from './components/SearchBar/SmallSearch.jsx';
import LargeSearchBar from './components/SearchBar/LargeSearch.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import Hotels from './components/Hotels';
import Checkout from './components/TripBooked/Booked.jsx';
import DepartFlight from './components/FlightDetailPage/DepartFlight.jsx';
import ReturnFlight from './components/FlightDetailPage/ReturnFlight.jsx';
import Experiences from './components/Experiences';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayPage: 0,
      SelectedFrom: '',
      SelectedTo: '',
      dateFrom: '',
      dateTo: '',
      travelerCnt: 1,
    }
    this.incrementDisplayPage = this.incrementDisplayPage.bind(this);
    this.decrementDisplayPage = this.decrementDisplayPage.bind(this);
    this.setFrom = this.setFrom.bind(this);
    this.setTo = this.setTo.bind(this);
    this.setDateFrom = this.setDateFrom.bind(this);
    this.setDateTo = this.setDateTo.bind(this);
    this.setTraveler = this.setTraveler.bind(this);

  }
  setDateFrom(event) {
    this.setState({dateFrom: event.target.value});
  }
  setDateTo(event) {
    this.setState({dateTo: event.target.value});
  }
  setFrom(val) {
    this.setState({SelectedFrom: val});
  }
  setTo(val) {
    this.setState({SelectedTo: val});
  }
  setTraveler(event) {
    this.setState({travelerCnt: event.target.value});
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
          <SmallSearchBar size={true} setFrom={this.setFrom} setTo={this.setTo} incrementDisplayPage={this.incrementDisplayPage} setDateFrom={this.setDateFrom} setDateTo={this.setDateTo} dateFrom={this.state.dateFrom} dateTo={this.state.dateTo} setTraveler={this.setTraveler}/>
        </React.Fragment>
        // navBar = LargeSearchBar;
        break;
      case 4:
        navBar =
        <React.Fragment>
          <NavBar />
          <SmallSearchBar size={false} setFrom={this.setFrom} setTo={this.setTo} setDateFrom={this.setDateFrom} setDateTo={this.setDateTo} dateFrom={this.state.dateFrom} dateTo={this.state.dateTo} setTraveler={this.setTraveler}/>
        </React.Fragment>;
        break;
      case 5:
        navBar =
        <React.Fragment>
          <NavBar />
        </React.Fragment>;
        break;
      case 6:
        navBar =
        <React.Fragment>
          <NavBar />
        </React.Fragment>;
        break;
      case 7:
        navBar = <NavBar />;
        break;
      default:
        navBar =
        <React.Fragment>
          <NavBar />
          <SmallSearchBar size={false} setFrom={this.setFrom} setTo={this.setTo} setDateFrom={this.setDateFrom} setDateTo={this.setDateTo} dateFrom={this.state.dateFrom} dateTo={this.state.dateTo} setTraveler={this.setTraveler}/>
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
            <FlexContainer>
              <DepartFlight
                incrementDisplayPage={this.incrementDisplayPage}
                decrementDisplayPage={this.decrementDisplayPage}
              />
            </FlexContainer>
          )}

        {displayPage === 2
          && (
            <FlexContainer>
              <ReturnFlight
                incrementDisplayPage={this.incrementDisplayPage}
                decrementDisplayPage={this.decrementDisplayPage}
              />
            </FlexContainer>
          )}

        {displayPage === 3
          && (
            <Hotels
            next={this.incrementDisplayPage}
            back={this.decrementDisplayPage} />
          )}

        {displayPage === 4
          && (
            <Experiences
            next={this.incrementDisplayPage}
            back={this.decrementDisplayPage} />
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
            <Checkout back={this.decrementDisplayPage} />
          )}
      </>
    )
  }
}
export default App;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;