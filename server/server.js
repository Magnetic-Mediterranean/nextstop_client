const path = require('path');
const cors = require('cors');
const express = require('express');

const app = express();
const port = 3000;

const controller = require('./controller/controller.js');

// Static Middleware
app.use(express.static(path.join(__dirname, '../client/dist')));

// CORS
app.use(cors());

// Parse
app.use(express.json());

// Routes
app.get('/flights/:originLocationCode/:destinationLocationCode/:departureDate/:adults', controller.flights);
app.get('/hotels', controller.hotels);
app.post('/experiences', controller.experiences);
app.post('/purchase', controller.purchase);
app.get('/search/:id', controller.search);
// Listen
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});