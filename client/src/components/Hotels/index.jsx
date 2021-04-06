import React from 'react';
import axios from 'axios';
import HotelList from './components/HotelList.jsx'

const dummyData = [
  {
    id: 1,
    name: "BEAUTIFUL STUDIO in Napa",
    type: "Hotel in Napa",
    original_price: 500,
    discounted_price: null,
    image: "foo.jpg",
    destinationId: 123,
    destinationName: 'Napa Valley'
  },
  {
    id:2,
    name: "Private Quaint Cottage Along the Napa River 1BR",
    type: "Hotel in Napa",
    original_price: 525,
    discounted_price: 490,
    image: "foo2.jpg",
    destinationId: 124,
    destinationName: 'Napa Valley'
  }
]


class Hotels extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // hotels: []
      hotels: dummyData
    }
    this.getHotels = this.getHotels.bind(this)
  }

  componentDidMount() {
    this.getHotels()
  }

  getHotels() {
    axios.get('hotels')
    .then((res) => {
      this.setState({hotels: res.data})
    })
    .catch((err) => {
      console.log({err: err})
    })
  }

  render() {
    return (
      <div>
        <button>back</button>
        <HotelList
        hotels={this.state.hotels}
        back={this.props.back}
        next={this.props.next} />

      </div>

    )
  }

}

export default Hotels;