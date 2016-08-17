// connect to database
var knex = require('../database-connection');

// create brands table
knex.schema.createTableIfNotExists('brands', function(table){
	table.increments('brand_id');	// outputs to SQL: "brand_id" serial primary key
 	table.text('brand_name');		// use .string or .text ? >> https://www.postgresql.org/docs/9.4/static/datatype-character.html
 	table.text('website_url');
 	table.text('hq_country');
 	table.text('hq_region');
 	table.text('hq_postal_code');
 	table.integer('year_founded');
 	table.boolean('is_vegan');
 	table.boolean('contains_vegan');
 	table.boolean('is_gluten_free');
 	table.timestamps();				// adds two columns: "created_at" timestamptz, "updated_at" timestamptz
}).then(function(){
	console.log("brands table has been created");
}).catch(function(error){
	console.log("error creating brands table: ");
	console.log(error);
});

// create products table
knex.schema.createTableIfNotExists('products', function(table){
	table.increments('prod_id');
	table.text('prod_name');
	table.text('prod_category');
	table.text('application_type');
	table.decimal('price');
	table.text('currency');
	table.timestamps();
}).then(function(){
	console.log("products table has been created");
}).catch(function(error){
	console.log("error creating products table: ");
	console.log(error);
});

// create ingredients table
knex.schema.createTableIfNotExists('ingredients', function(table){
	table.increments('ingr_id');
	table.text('ingr_name');
	table.text('alternate_names');
	table.boolean('is_animal_derived');
	table.boolean('is_organic');
	table.timestamps();
}).then(function(){
	console.log("ingredients table has been created");
}).catch(function(error){
	console.log("error creating ingredients table: ");
	console.log(error);
});

