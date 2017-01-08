'use strict'

// import the necessary libraries
const express = require('express');
const bodyparser = require('body-parser');
//create a express variable
const app = express();
//only require the folder because de file name index.js
const api = require('./routes');

// with bodyparser librarie, parse json message
app.use(bodyparser.urlencoded({ extended: false}));
app.use(bodyparser.json());
app.use('/api',api)


module.exports = app
