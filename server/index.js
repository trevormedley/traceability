// include and initialize the rollbar library with your access token
var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: '7bf2ec72f4a74bfb85fe85f2ad0e2849',
  captureUncaught: true,
  captureUnhandledRejections: true
});

// record a generic message and send it to Rollbar
rollbar.log("Hello world!");

require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const controller = require("./controller");

app.use(express.json());
app.use(express.static("client"));

app.get('/api/players/', controller.getPlayers);
app.post('/api/players/', controller.createPlayers);

const port = process.env.PORT || process.env.SERVER_PORT;
app.listen(port, () => console.log(`We are running on port: ${port}`));