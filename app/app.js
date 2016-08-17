// ____________REQUIRE NODE MODULES & SET MIDDLEWARE____________

// dotenv - lets us use hidden global variables
require('dotenv').load();

// express - lets us use dynamic data within our views
var express = require("express");
var app = express();
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// request - lets us make HTTP requests / get & post data
// it goes inside of route block of code
var request = require("request");

// morgan - lets us log HTTP requests in terminal
var morgan = require("morgan");
app.use(morgan("tiny")); // less text in our logs??

// when is a promises library
var when = require('when');

// bring in our models & database
var db = require("./database");





// ____________START SERVER____________

app.listen(process.env.PORT || 3000, function(){
	console.log("Server starting on port: 3000");
});

