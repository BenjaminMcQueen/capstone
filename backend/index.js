const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json);
app.use(morgan('dev'));
app.use(cors());

const dbURI = process.env.URI;
console.log(dbURI || "URI undefined for some reason");
mongoose.connect(dbURI)
  .then((result) => {app.listen(port); console.log("Listening on port", port);})
  .catch((err) => console.log(err));
