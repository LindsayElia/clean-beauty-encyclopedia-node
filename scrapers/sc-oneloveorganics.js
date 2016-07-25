// require modules
var request = require("request");
var cheerio = require("cheerio");
var fs = require("fs");


// product list page - page(s) containing links to all the products
// prouct detail page - page containing information about a single product
var listOneLoveOrganics = "http://shop.oneloveorganics.com/";

request(listOneLoveOrganics, function (error, response, listBody) {
	if (error) {
		console.log("Request to " + listOneLoveOrganics + " encountered an error: " + error);
		return;
	}

	console.log("Request to " + listOneLoveOrganics + " successful");
	// load the body of the page into Cheerio so we can traverse the DOM
	var $listBody = cheerio.load(listBody);
	var links = $listBody(".prod_box .p_img a");
	links.each(function(count, linkObj){
		// console.log("count: " + count);
		// console.log("linkObj: "+ linkObj);

		var detailUrl = listOneLoveOrganics + $listBody(linkObj).attr("href");

		// making a second request here to each url
		// this is where I can specify what data to pull, and only save what I might use
		// save as json file type? what will be easiest for putting into a database?
		request(detailUrl, function (err, res, detailBody) {
			if (err) {
				console.log("Request to " + detailUrl + " encountered an error: " + err);
				return;
			}

			var $detailBody = cheerio.load(detailBody);
			var name = $detailBody(".title").text();
			var price = $detailBody(".price").text();
			var size = $detailBody(".prod_size span").text();
			var imageUrl = $detailBody(".main-image a img").attr("src");
			var imageAlt = $detailBody(".main-image a img").attr("alt");
			var ingredientsGrouping = $detailBody("#tab3").html();
			console.log(name + "/////" + price + "/////" + size + "/////" + imageUrl + "/////" + imageAlt + "/////" +  ingredientsGrouping + "....................................");

			

		});
		console.log("url: " + detailUrl);
	});

});



//.pipe(fs.createWriteStream("scrapers/brands/oneloveorganics/" + count + ".txt"))








