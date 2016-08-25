// connect to database with the existing bookshelf instance
var bookshelf = require('./bookshelf');

// model
// one brand has many products
var Brand = bookshelf.Model.extend({
	tableName: 'brands',
	hasTimestamps: true,
	products: function(){
		return this.hasMany(Product);
	}
});

// create a collection so we can use model methods on all of the items that 
// follow the same model (in the brands table in our DB)
var Brands = bookshelf.Collection.extend({
	model: Brand
});

// model
// many products belong to one brand
// many products have/belong to many ingredients
var Product = bookshelf.Model.extend({
	tableName: 'products',
	hasTimestamps: true,
	brand: function(){
		return this.belongsTo(Brand);
	}
});

// collection
var Products = bookshelf.Collection.extend({
	model: Product
});

// model
// many ingredients belong to many products
var Ingredient = bookshelf.Model.extend({
	tableName: 'ingredients',
	hasTimestamps: true,
	product: function(){
		return this.belongsToMany(Product);
	}
});

// collection
var Ingredients = bookshelf.Collection.extend({
	model: Ingredient
});

module.exports = Brand;
module.exports = Brands;
module.exports = Product;
module.exports = Products;
module.exports = Ingredient;
module.exports = Ingredients;
