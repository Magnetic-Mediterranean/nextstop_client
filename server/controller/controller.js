const axios = require('axios');

module.exports = {
  flights: (req, res) => {
    axios.get("http://3.142.95.22:3000/flights/offers", {
      params: {
        "originLocationCode": "SYD",
        "destinationLocationCode": "NYC",
        "departureDate": "2021-10-06",
        "adults": 1
      }
    }
    ).then((data) => {
      res.status(200).send(JSON.stringify(data.data))
    })
      .catch((err) => console.log(err));
  },
  hotels: (req, res) => {

  },
  experiences: (req, res) => {

  },
  purchase: (req, res) => {

  }
}
