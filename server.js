/_ server.js _/

// Require dependencies
const logger = require('morgan');
const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const {updateDBService} = require('./services')

const MONGODB_URI = process.env.MONGODB_URI;
// const MONGODB_URI = 'mongodb://:@localhost:27017/covid-19-api';
// Create an Express application
const app = express();

// Add the Scotch author profile route
app.get('/test', async (req, res, next) => {
    // const author = req.params.author;
    // sendResponse(res)(fetchAuthorProfile(author));

   updateDBService()
  });

  
// Configure the app port
const port = process.env.PORT || 3000;
app.set('port', port);

// Load middlewares
app.use(logger('dev'));

// Start the server and listen on the preconfigured port
// app.listen(port, () => console.log(`App started on port ${port}.`));

mongoose
    .connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(result => {
        console.log('Connected to Database!')
        app.listen(port, () => console.log(`App started on port ${port}.`));

    })
    .catch(err => {
        console.log(err);
    });
