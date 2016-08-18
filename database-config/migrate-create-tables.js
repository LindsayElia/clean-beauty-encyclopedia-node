// connect to database
var knex = require('../database-connection');

// create brands table
knex.schema.createTableIfNotExists('brands', function(table){
	table.increments();				// outputs SQL: "id" serial primary key
 	table.text('name');
 	table.text('site_url');
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
	table.increments();
	table.text('name');
	table.text('category');
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
	table.increments();
	table.text('name');
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

