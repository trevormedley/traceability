require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path')

app.use(express.json());
app.use(express.static("client"));



const port = process.env.PORT || process.env.SERVER_PORT;
app.listen(port, () => console.log(`We are running on port: ${port}`));