// ____________REQUIRE NODE MODULES____________

var request = require("request");
var cheerio = require("cheerio");

// var url = "http://www.wunderground.com/cgi-bin/findweather/getForecast?&query=" + 94115;
  
// request(url, function (error, response, body) {
//   if (!error) {
//     var $ = cheerio.load(body),
//       temperature = $("[data-variable='temperature'] .wx-value").html();
      
//     console.log("It’s " + temperature + " degrees Fahrenheit.");
//   } else {
//     console.log("We’ve encountered an error: " + error);
//   }
// });

var productListAndalouNaturals = ["http://andalou.com/face",
								"http://andalou.com/hair",
								"http://andalou.com/body"];
var productListAntonymCosmetics = ["https://www.antonymcosmetics.com/collections/shop",
								"https://www.antonymcosmetics.com/collections/shop"];
var productListAsterAndBay = ["http://asterandbay.com/collections/all",
								"http://asterandbay.com/collections/all?page=2"];
var productListBonnieLipBalm = ["http://bonnielipbalm.com/bonnie/products.html#!/Facial-Care/c/2851238/offset=0&sort=normal",
								"http://bonnielipbalm.com/bonnie/products.html#!/Lip-Care/c/9962196/offset=0&sort=normal",
								"http://bonnielipbalm.com/bonnie/products.html#!/Body-Care/c/2026018/offset=0&sort=normal",
								"http://bonnielipbalm.com/bonnie/products.html#!/Bath-Care/c/1252055/offset=0&sort=normal"];
var productListDermaE = ["http://dermae.com/view_category.html#1/pp~view_category/sort_by~price DESC/products_per_page~80/offset~0",
								"http://dermae.com/view_category.html#1/pp~view_category/sort_by~price DESC/products_per_page~80/offset~80/contracted_filter_pricerange~0"];
var productListEvanHealy = ["http://www.evanhealy.com/index.php/shop-by-category"];
var productListHanSkincareCosmetics = ["https://hanscc.com/product-category/eyes/",
								"https://hanscc.com/product-category/cheeks/",
								"https://hanscc.com/product-category/lips/"];
var productListIlia = ["https://iliabeauty.com/collections/"];
var productListIndieLee = ["http://indielee.com/shop/all-products"];
var productListOneLoveOrganics = ["http://shop.oneloveorganics.com/"];





