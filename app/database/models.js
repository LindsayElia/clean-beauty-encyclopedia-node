// connect to database with the existing bookshelf instance
var bookshelf = require('./bookshelf');


var Brands = bookshelf.Model.extend({
	tableName: 'brands',
	products: function(){
		return this.hasMany(Products);
	}
});

var Products = bookshelf.Model.extend({
	tableName: 'products',
	
});

var Ingredients = bookshelf.Model.extend({
	tableName: 'ingredients'
});


module.exports = Brands;
module.exports = Products;
module.exports = Ingredients;