const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json);
app.use(morgan('dev'));
app.use(cors());

const dbURI = process.env.URI;
console.log(dbURI || "URI undefined for some reason");
mongoose.connect(dbURI)
  .then((result) => {app.listen(3000); console.log("Listening on port 3000");})
  .catch((err) => console.log(err));
