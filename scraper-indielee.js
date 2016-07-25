// Require Modules
var request = require("request");
var cheerio = require("cheerio");
// var xray = require("x-ray")();
var fs = require("fs");



var productListIndieLee = "http://indielee.com/shop/all-products";


request(productListIndieLee, function (error, response, body) {
	if (error) {
		console.log("Request to " + productListIndieLee + " encountered an error: " + error);
		return;
	}

	console.log("Request to " + productListIndieLee + " successful");
	// load the body of the page into Cheerio so we can traverse the DOM
	var $ = cheerio.load(body);
	var links = $(".prod_box .p_img a");
	links.each(function(count, linkObj){
		// console.log("count: " + count);
		// console.log("linkObj: "+ linkObj);

		var url = productListIndieLee + $(linkObj).attr("href");

		// i'm making a second request here to each link.
		// this is where I can specify what data to pull, and only save what i might use
		// save as json file type? what will be easiest for putting into a database?
		request(url).pipe(fs.createWriteStream("brands/indielee/" + count + ".txt"));
		console.log("url: " + url);
	});

});













