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
    axios.get("http://ec2-18-144-174-82.us-west-1.compute.amazonaws.com/hotels/v2/shopping/hotel-offers", {
      params: {
       "cityCode": "PAR",
       "checkInDate": "2021-04-08",
       "checkOutDate": "2021-04-09"
      }
    })
  },
  experiences: (req, res) => {
    axios.post("http://ec2-18-144-174-82.us-west-1.compute.amazonaws.com/activities", req.body)
  },
  purchase: (req, res) => {

  },
  search: (req, res) => {
    var val = req.params.id;
    axios.get(`http://ec2-3-142-95-22.us-east-2.compute.amazonaws.com:3000/flights/translate?search=${val}`)
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
