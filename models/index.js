
require('dotenv').load();

var knex = require('knex')({
	client: 'pg',
	connection: (process.env.PG_DATABASE_CONNECTION || 'postgres://localhost/clean_beauty')
});
var bookshelf = require('bookshelf')(knex);

