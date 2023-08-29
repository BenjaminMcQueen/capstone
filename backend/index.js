const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json);
app.use(morgan('dev'));

const URI = process.env.URI
mongoose.connect