const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//app setuping
const app = express();
const port = 3000;

//middleware

app.use(bodyParser.json());

//connect to mongodb
mongoose.connect('mongodb://')

