import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import HotelList from './components/HotelList.jsx'

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
      selectedHotelId: null
    }
    this.getHotels = this.getHotels.bind(this)
    this.handleSelectedHotel = this.handleSelectedHotel.bind(this)
  }

  componentDidMount() {
    this.getHotels()
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
    this.setState({selectedHotelId: id})
  }

  render() {
    return (
      <div>
      <HeaderContainer>
        <Button onClick={this.props.back}>Back</Button>
        <p>Select a Hotel</p>
        <Button onClick={this.props.next}>Next</Button>
      </HeaderContainer>
      <HotelList hotels={this.state.hotels} handleSelectedHotel={this.handleSelectedHotel} selectedHotelId={this.state.selectedHotelId} />
      </div>
    )
  }

}

export default Hotels;

const HeaderContainer = styled.div`
  display: flex;
  // flex-direction: row;
  justify-content: space-between;
  padding: 15px;
  margin: 15px;
`;

const Button = styled.button`
  font-size: 14px;
  font-weight: 700;
  border: 0px;
  border-radius: 3px;
  appearance: none;
  cursor: pointer;
`;