// require modules
var request = require("request");
var cheerio = require("cheerio");
var fs = require("fs");
var sanitizeHtml = require("sanitize-html");

// product list page - page(s) containing links to all the products
// prouct detail page - page containing information about a single product
var listIndieLee = "http://indielee.com/shop/all-products";
var productData = [];

// first request, to get list of links to product detail pages
var getList = function(listUrl){
	request(listUrl, function (error, response, listBody) {
		if (error) {
			console.log("Request to " + listUrl + " encountered an error: " + error);
			return;
		}
		// if no error, continue
		// load the body of the page into cheerio so we can traverse the DOM
		var $listBody = cheerio.load(listBody);
		var links = $listBody(".product-image");
		// need this function, below, to access the href inside of the a element, instead of the whole element
		links.each(function(count, linkObj){
			var detailUrl = $listBody(linkObj).attr("href");
			console.log(detailUrl);
			// call the getDetails function
			getDetails(detailUrl);
		});
	}).on('response', function(response){
		console.log("getList responseStatusCode: " + response.statusCode);
		console.log("getList responseHeaders: " + response.headers['content-type']);
	});
};

// second request, to each url
var getDetails = function(detailUrl){
	request(detailUrl, function (err, res, detailBody) {
		if (err) {
			console.log("Request to " + detailUrl + " encountered an error: " + err);
			return;
		}
		// if no error, continue
		var $detailBody = cheerio.load(detailBody);
		var product = { name:"", price:"", size:"", imageUrl:"", imageAlt:"", ingredientsGrouping:"" };
			product.name = $detailBody(".product-name h1").text();
			product.price = $detailBody("span .price").text();
			product.size = ($detailBody(".weight").text()).slice(0, -1); // remove last character from string
			product.imageUrl = $detailBody("#image").attr("src");
			product.imageAlt = $detailBody("#image").attr("alt");
			product.ingredientsGrouping = ((($detailBody(".product-ingredients").text()).trim()).substr(11)).trim(); // remove first 11 characters from string and all spaces
		productData.push(product);
	}).on('response', function(res){
		console.log("getDetails responseStatusCode: " + res.statusCode);
		console.log("getDetails responseHeaders: " + res.headers['content-type']);
	});
};

var writeData = function(){
	fs.writeFile("brand-data/indielee.json", JSON.stringify(productData, null, 4), function(){
		console.log("value of productData from writeData: " + JSON.stringify(productData));
		console.log("File for " + listIndieLee +" written");
	});
};



getList(listIndieLee);

// setTimeout is a cheat but it's what I can get to work for now.
// need a better way to wait until the requests are all done, then calling writeData
// look into using promises?
setTimeout(function(){
	writeData();
}, 10000); // 10 seconds







