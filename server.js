//npm packages

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;
  //app.use(express.static('public'))

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//the routes
require('./app/routing/apiRoutes.js')(app); 
require('./app/routing/htmlRoutes.js')(app);
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
