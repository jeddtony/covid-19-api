/_ server.js _/

// Require dependencies
const logger = require('morgan');
const express = require('express');
const { sendResponse } = require('./app/helpers');
const { fetchAuthorProfile } = require('./app/scotch');

// Create an Express application
const app = express();

// Add the Scotch author profile route
app.get('/scotch/:author', (req, res, next) => {
    const author = req.params.author;
    sendResponse(res)(fetchAuthorProfile(author));
  });

  
// Configure the app port
const port = process.env.PORT || 3000;
app.set('port', port);

// Load middlewares
app.use(logger('dev'));

// Start the server and listen on the preconfigured port
app.listen(port, () => console.log(`App started on port ${port}.`));