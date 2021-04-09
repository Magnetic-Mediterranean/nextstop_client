import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import HotelList from './components/HotelList.jsx'
import BackButton from '../../components/sharedStyles/backButton.js'
import Container from '../sharedStyles/container'
import Header from '../sharedStyles/header'
import PageTitle from '../sharedStyles/pageTitle'

class Hotels extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedHotelId: null,
      infoLoaded: false,
      // showMore: false,
    }
    this.handleSelectedHotel = this.handleSelectedHotel.bind(this)
  }

  componentDidMount() {
    const hotel = JSON.parse(window.localStorage.getItem('hotel'));
    const hotelId = window.localStorage.getItem('id')
    this.setState({selectedHotelId: hotelId})

    setTimeout(() => {
      this.setState({
        infoLoaded: true,
      })
    }, 3000)
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

  // handleShowMoreClick() {
  //   this.setState({showMore: true})
  // }

  // displayTen(index) {
  //   const hotelLength = this.props.hotels.length = 1
  //   const lastHotelInSet = (index + 10) <= hotelLength ? index + 10 : this.props.hotels.length

  // }


  render() {
    const numberOfItems = this.state.showMore ? this.props.hotels.length : 10
    return (
      <>
        {!this.state.infoLoaded &&
          (
            <Container>
            <div >
              <img style={{ width: "100%"}}
              src="https://i.pinimg.com/originals/65/ba/48/65ba488626025cff82f091336fbf94bb.gif"/>
            </div>
          </Container>
          )
        }
        {this.state.infoLoaded &&
          (<Container>
            <Header>
              <BackButton onClick={this.props.back}>Back</BackButton>
              <PageTitle>Select a Hotel</PageTitle>
              <BackButton onClick={this.props.next}>Next</BackButton>
            </Header>
            <HotelList
            hotels={this.props.hotels}
            city={this.props.city}
            handleSelectedHotel={this.handleSelectedHotel}
            selectedHotelId={this.state.selectedHotelId} />
          </Container>)
        }
      </>
    )
  }

}

export default Hotels;

// const Container = styled.div`
//  width: 90%;
//  min-width: 500px;
//  max-width: 1000px;
//  min-height: 500px;
//  margin: auto;
//  background: #ececec;
// `;

// const Header = styled.div`
//  display: flex;
//  justify-content: space-between;
//  margin-top: 20px;
//  padding: 15px;
// `;