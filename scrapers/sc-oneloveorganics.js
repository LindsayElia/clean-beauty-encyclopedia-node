// require modules
var request = require("request");	// https://github.com/request/request
var cheerio = require("cheerio");	// https://github.com/cheeriojs/cheerio
var fs = require("fs");				// https://nodejs.org/api/fs.html
var sanitizeHtml = require("sanitize-html");	// https://github.com/punkave/sanitize-html

// product list page - page(s) containing links to all the products
// prouct detail page - page containing information about a single product
var listOneLoveOrganics = "http://shop.oneloveorganics.com/";
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
		var $links = $listBody(".prod_box .p_img a");
		// need this function, below, to access the href inside of the a element, instead of the whole element
		$links.each(function(count, linkObj){
			var detailUrl = listUrl + $listBody(linkObj).attr("href");
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
			product.name = ($detailBody(".title").text()).trim(); // trim() removes all extra spaces
			product.price = ($detailBody(".price").text()).trim();
			product.size = $detailBody(".prod_size span").text();
			product.imageUrl = ($detailBody(".main-image a img").attr("src")).substr(2); // remove first 2 characters from string
			product.imageAlt = $detailBody(".main-image a img").attr("alt");
			product.ingredientsGrouping = (sanitizeHtml(($detailBody("#tab3").html()).trim(), {
				allowedTags: [],
				allowedAttributes: []
			})).trim();
		productData.push(product);
	}).on('response', function(res){
		console.log("getDetails responseStatusCode: " + res.statusCode);
		console.log("getDetails responseHeaders: " + res.headers['content-type']);
	});
};

var writeData = function(){
	fs.writeFile("brands/oneloveorganics.json", JSON.stringify(productData, null, 4), function(){
		console.log("value of productData from writeData: " + JSON.stringify(productData));
		console.log("File for " + listOneLoveOrganics +" written");
	});
};



// var action = Q.nfbind(getList);

getList(listOneLoveOrganics);

// setTimeout is a cheat but it's what I can get to work for now.
// need a better way to wait until the requests are all done, then calling writeData
// look into using promises?
// ?? >> http://www.edzynda.com/running-ajax-requests-sequentially/
setTimeout(function(){
	writeData();
}, 10000); // 10 seconds



// setTimeout(function(){
// 	console.log("one");
// 	setTimeout(function(){
// 		console.log("two");
// 		setTimeout(function(){
// 			console.log("three");
// 		}, 1000);
// 	}, 1000);
// }, 1000);



