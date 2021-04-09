import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import HotelList from './components/HotelList.jsx'
import BackButton from '../../components/sharedStyles/backButton.js'

class Hotels extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedHotelId: null,
    }
    this.handleSelectedHotel = this.handleSelectedHotel.bind(this)
  }

  componentDidMount() {
    const hotel = JSON.parse(window.localStorage.getItem('hotel'));
    const hotelId = window.localStorage.getItem('id')
    this.setState({selectedHotelId: hotelId})
  }

  handleSelectedHotel(id) {
    const filteredHotel = this.props.hotels.filter(hotel => {
      this.setState({hotel: hotel})
      return hotel.id === id})
    if (filteredHotel.length > 0) {
      const setHotel = window.localStorage.setItem('hotel', JSON.stringify(filteredHotel[0]))
      const setId = window.localStorage.setItem('id', id)
      this.setState({selectedHotelId: id})
    }
  }

  render() {
    return (
      <Container>
        <Header>
          <BackButton onClick={this.props.back}>Back</BackButton>
          <p>Select a Hotel</p>
          <BackButton onClick={this.props.next}>Next</BackButton>
        </Header>
        <HotelList
        hotels={this.props.hotels}
        handleSelectedHotel={this.handleSelectedHotel}
        selectedHotelId={this.state.selectedHotelId} />
      </Container>
    )
  }

}

export default Hotels;

const Container = styled.div`
 width: 90%;
 min-width: 500px;
 max-width: 1000px;
 min-height: 500px;
 margin: auto;
 background: #ececec;
`;

const Header = styled.div`
 display: flex;
 justify-content: space-between;
 margin-top: 20px;
 padding: 15px;
`;