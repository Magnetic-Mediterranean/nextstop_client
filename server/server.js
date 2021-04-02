const path = require('path');
const express = require('express');

const app = express();
const port = 3000;

// Static Middleware
app.use(express.static(path.join(__dirname, '../client/dist')));

// Parse
app.use(express.json());

// Listen
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});