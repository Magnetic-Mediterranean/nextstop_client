import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import HotelList from './components/HotelList.jsx'
import BackButton from '../../components/sharedStyles/backButton.js'

const dummyData = [
  {
    id: 1,
    name: "BEAUTIFUL STUDIO in Napa",
    type: "Hotel in Napa",
    original_price: 500,
    discounted_price: null,
    image: "https://images.unsplash.com/photo-1561409037-c7be81613c1f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8bmFwYSUyMHZhbGxleSUyMGhvdGVsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    destinationId: 123,
    destinationName: 'Napa Valley'
  },
  {
    id:2,
    name: "Private Quaint Cottage Along the Napa River 1BR",
    type: "Hotel in Napa",
    original_price: 525,
    discounted_price: 490,
    image: "https://images.unsplash.com/photo-1607816420124-038873dbd26b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjN8fG5hcGElMjB2YWxsZXklMjBob3RlbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    destinationId: 124,
    destinationName: 'Napa Valley'
  },
  {
    id: 3,
    name: "BEAUTIFUL STUDIO in Napa",
    type: "Hotel in Napa",
    original_price: 500,
    discounted_price: null,
    image: "https://images.unsplash.com/photo-1561409037-c7be81613c1f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8bmFwYSUyMHZhbGxleSUyMGhvdGVsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    destinationId: 123,
    destinationName: 'Napa Valley'
  },
  {
    id:4,
    name: "Private Quaint Cottage Along the Napa River 1BR",
    type: "Hotel in Napa",
    original_price: 525,
    discounted_price: 490,
    image: "https://images.unsplash.com/photo-1607816420124-038873dbd26b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjN8fG5hcGElMjB2YWxsZXklMjBob3RlbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    destinationId: 124,
    destinationName: 'Napa Valley'
  },
  {
    id: 5,
    name: "BEAUTIFUL STUDIO in Napa",
    type: "Hotel in Napa",
    original_price: 500,
    discounted_price: null,
    image: "https://images.unsplash.com/photo-1561409037-c7be81613c1f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8bmFwYSUyMHZhbGxleSUyMGhvdGVsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    destinationId: 123,
    destinationName: 'Napa Valley'
  },
  {
    id:6,
    name: "Private Quaint Cottage Along the Napa River 1BR",
    type: "Hotel in Napa",
    original_price: 525,
    discounted_price: 490,
    image: "https://images.unsplash.com/photo-1607816420124-038873dbd26b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjN8fG5hcGElMjB2YWxsZXklMjBob3RlbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    destinationId: 124,
    destinationName: 'Napa Valley'
  }
]


class Hotels extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // hotels: []
      hotels: dummyData,
      selectedHotelId: null,
    }
    this.getHotels = this.getHotels.bind(this)
    this.handleSelectedHotel = this.handleSelectedHotel.bind(this)
  }

  componentDidMount() {
    this.getHotels()
    const hotel = JSON.parse(window.localStorage.getItem('hotel'));
    const hotelId = JSON.parse(window.localStorage.getItem('id'))
    this.setState({selectedHotelId: hotelId})
  }

  getHotels() {
    axios.get('hotels', {
      parmas: {
       cityCode: 'PAR',
       checkInData: '2021-04-08',
       checkOutData: '2021-04-09'
      }
    })
    .then((res) => {
      this.setState({hotels: res.data})
    })
    .catch((err) => {
      console.log({err: err})
    })
  }

  handleSelectedHotel(id) {
    const filtered = this.state.hotels.filter(hotel => {
      this.setState({hotel: hotel})
      return hotel.id === id})
    if (filtered.length > 0) {
      const setHotel = window.localStorage.setItem('hotel', JSON.stringify(filtered[0]))
      // this.setState({hotel: setHotel})
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
      <HotelList hotels={this.state.hotels} handleSelectedHotel={this.handleSelectedHotel} selectedHotelId={this.state.selectedHotelId} />
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