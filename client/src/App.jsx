import React from "react";
import axios from "axios";
import styled from "styled-components";
import LandingPage from "./components/landingPage/LandingPage";
import TripReviewMain from "./components/tripReview/TripReviewMain";
import TripPurchaseMain from "./components/tripPurchase/TripPurchaseMain";
import SmallSearchBar from "./components/SearchBar/SmallSearch.jsx";
import LargeSearchBar from "./components/SearchBar/LargeSearch.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Hotels from "./components/Hotels";
import Checkout from "./components/TripBooked/Booked.jsx";
import FlightDetailPage from "./components/FlightDetailPage/FlightDetailPage.jsx";
import Experiences from "./components/Experiences";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayPage: 0,
      SelectedFrom: "",
      SelectedTo: "",
      dateFrom: "",
      dateTo: "",
      travelerCnt: 1,
      departFlights: [],
      returnFlights: [],
      hotels: [],
      experiences: [],
    };
    this.incrementDisplayPage = this.incrementDisplayPage.bind(this);
    this.decrementDisplayPage = this.decrementDisplayPage.bind(this);
    this.setFrom = this.setFrom.bind(this);
    this.setTo = this.setTo.bind(this);
    this.setDateFrom = this.setDateFrom.bind(this);
    this.setDateTo = this.setDateTo.bind(this);
    this.setTraveler = this.setTraveler.bind(this);
    this.getFlightData = this.getFlightData.bind(this);
    this.getHotels = this.getHotels.bind(this);
    this.getExperiences = this.getExperiences.bind(this);
    this.landingPage = this.landingPage.bind(this);
  }
  setDateFrom(event) {
    this.setState({ dateFrom: event.target.value });
  }
  setDateTo(event) {
    this.setState({ dateTo: event.target.value });
  }
  setFrom(val) {
    this.setState({ SelectedFrom: val });
  }
  setTo(val) {
    this.setState({ SelectedTo: val });
  }
  setTraveler(event) {
    this.setState({ travelerCnt: event.target.value });
  }

  getFlightData(from, to, date, headcount, flight) {
    axios
      .get(`/flights/${from}/${to}/${date}/${headcount}`)
      .then((data) => {
        this.setState({
          [flight]: data.data,
        });
      })
      .catch((err) => console.log(err));
  }

  getHotels(city, from, to) {
    axios
      .get("/hotels", {
        params: {
          cityCode: city,
          //  "cityCode": city,
          //  "checkInDate": from,
          //  "checkOutDate": to
        },
      })
      .then((res) => {
        this.setState({ hotels: res.data });
      })
      .catch((err) => {
        console.log({ err: err });
      });
  }

  getExperiences(lat, lng) {
    axios
      .post("/experiences", {
        lat: lat,
        lng: lng,
      })
      .then((res) => {
        this.setState({ experiences: res.data });
      })
      .catch((err) => {
        console.log({ err: err });
      });
  }

  incrementDisplayPage(currentPage) {
    const nextPage = this.state.displayPage + 1;
    this.setState({
      displayPage: nextPage,
    });
  }

  decrementDisplayPage(currentPage) {
    const previousPage = this.state.displayPage - 1;
    this.setState({
      displayPage: previousPage,
    });
  }
  landingPage() {
    this.setState({ displayPage: 0 });
  }

  componentDidUpdate(prevState) {
    const {
      SelectedFrom,
      SelectedTo,
      dateFrom,
      dateTo,
      travelerCnt,
    } = this.state;
    if (
      this.state.displayPage !== prevState.displayPage &&
      SelectedFrom &&
      SelectedTo &&
      dateFrom &&
      dateTo &&
      travelerCnt &&
      this.state.displayPage === 0
    ) {
      this.getFlightData(
        SelectedFrom.cityCode,
        SelectedTo.cityCode,
        dateFrom,
        travelerCnt,
        "departFlights"
      );
      this.getFlightData(
        SelectedTo.cityCode,
        SelectedFrom.cityCode,
        dateTo,
        travelerCnt,
        "returnFlights"
      );
      this.getHotels(SelectedTo.cityCode, dateFrom, dateTo);
      this.getExperiences(SelectedTo.lat, SelectedTo.lng);
    }
  }

  render() {
    const {
      displayPage,
      travelerCnt,
      dateTo,
      dateFrom,
      departFlights,
      returnFlights,
    } = this.state;
    let navBar;
    switch (displayPage) {
      case 0:
        navBar = (
          <React.Fragment>
            <NavBar goback={this.landingPage} />
            <SmallSearchBar
              size={true}
              setFrom={this.setFrom}
              setTo={this.setTo}
              incrementDisplayPage={this.incrementDisplayPage}
              setDateFrom={this.setDateFrom}
              setDateTo={this.setDateTo}
              dateFrom={this.state.dateFrom}
              dateTo={this.state.dateTo}
              setTraveler={this.setTraveler}
              dateFrom={this.state.dateFrom}
            />
          </React.Fragment>
        );
        // navBar = LargeSearchBar;
        break;
      case 4:
        navBar = (
          <React.Fragment>
            <NavBar goback={this.landingPage} />
            <SmallSearchBar
              size={false}
              setFrom={this.setFrom}
              setTo={this.setTo}
              setDateFrom={this.setDateFrom}
              setDateTo={this.setDateTo}
              dateFrom={this.state.dateFrom}
              dateTo={this.state.dateTo}
              setTraveler={this.setTraveler}
              dateFrom={this.state.dateFrom}
            />
          </React.Fragment>
        );
        break;
      case 5:
        navBar = (
          <React.Fragment>
            <NavBar goback={this.landingPage} />
          </React.Fragment>
        );
        break;
      case 6:
        navBar = (
          <React.Fragment>
            <NavBar goback={this.landingPage} />
          </React.Fragment>
        );
        break;
      case 7:
        navBar = <NavBar goback={this.landingPage} />;
        break;
      default:
        navBar = (
          <React.Fragment>
            <NavBar goback={this.landingPage} />
            <SmallSearchBar
              size={false}
              setFrom={this.setFrom}
              setTo={this.setTo}
              setDateFrom={this.setDateFrom}
              setDateTo={this.setDateTo}
              dateFrom={this.state.dateFrom}
              dateTo={this.state.dateTo}
              setTraveler={this.setTraveler}
              dateFrom={this.state.dateFrom}
            />
          </React.Fragment>
        );
      // navBar = SmallSearchBar;
    }
    let departFlight = (
      <FlexContainer>
        <img
          src="https://i.pinimg.com/originals/65/ba/48/65ba488626025cff82f091336fbf94bb.gif"
          alt="loading page"
        />
      </FlexContainer>
    );
    if (displayPage === 1 && departFlights.length !== 0) {
      departFlight = (
        <FlexContainer>
          <FlightDetailPage
            flightData={departFlights}
            incrementDisplayPage={this.incrementDisplayPage}
            decrementDisplayPage={this.decrementDisplayPage}
            departOrReturn="depart"
          />
        </FlexContainer>
      );
    }

    let returnFlight = (
      <FlexContainer>
        <img
          src="https://i.pinimg.com/originals/65/ba/48/65ba488626025cff82f091336fbf94bb.gif"
          alt="loading page"
        />
      </FlexContainer>
    );
    if (displayPage === 2 && returnFlights.length !== 0) {
      returnFlight = (
        <FlexContainer>
          <FlightDetailPage
            flightData={departFlights}
            incrementDisplayPage={this.incrementDisplayPage}
            decrementDisplayPage={this.decrementDisplayPage}
            departOrReturn="return"
          />
        </FlexContainer>
      );
    }
    return (
      // Navbar
      <>
        {navBar}
        {displayPage === 0 && (
          <LandingPage incrementDisplayPage={this.incrementDisplayPage} />
        )}

        {displayPage === 1 && departFlight}

        {displayPage === 2 && returnFlight}

        {displayPage === 3 && (
          <Hotels
            next={this.incrementDisplayPage}
            back={this.decrementDisplayPage}
            hotels={this.state.hotels}
            city={this.state.SelectedTo.city}
          />
        )}

        {displayPage === 4 && (
          <Experiences
            next={this.incrementDisplayPage}
            back={this.decrementDisplayPage}
            experiences={this.state.experiences}
          />
        )}

        {displayPage === 5 && (
          <TripReviewMain
            next={this.incrementDisplayPage}
            back={this.decrementDisplayPage}
            dateFrom={dateFrom}
            dateTo={dateTo}
          />
        )}

        {displayPage === 6 && (
          <TripPurchaseMain
            next={this.incrementDisplayPage}
            back={this.decrementDisplayPage}
            travelers={travelerCnt}
          />
        )}

        {displayPage === 7 && (
          <Checkout
            back={this.decrementDisplayPage}
            to={this.state.SelectedTo}
          />
        )}
      </>
    );
  }
}
export default App;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
