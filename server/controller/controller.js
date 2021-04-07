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

  },
  search: (req, res) => {
    var val = req.params.id;
    axios.get(`http://ec2-13-52-163-50.us-west-1.compute.amazonaws.com/search/${val}`)
      .then((result) => {
        var newArr = [];
        for(var i = 0; i < 10; i++) {
          if(result.data[i]) {
            newArr.push(result.data[i]);
          }
        }
        res.send(newArr);
      })
      .catch((error) => {
        res.status(500).send(error);
      })
  }
}
