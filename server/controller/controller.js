const axios = require('axios');

module.exports = {
  flights: (req, res) => {
    axios.get("http://3.142.95.22:3000/flights/offers", {
      params: {
        "originLocationCode": `${req.params.originLocationCode}`,
        "destinationLocationCode": `${req.params.destinationLocationCode}`,
        "departureDate": `${req.params.departureDate}`,
        "adults": `${req.params.adults}`
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
