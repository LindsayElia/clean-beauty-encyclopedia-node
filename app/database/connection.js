// connect to database
var knex = require('knex')({
	client: 'pg',
	connection: process.env.DATABASE_URI || 'postgres://localhost/clean_beauty'
});

var bookshelf = require('bookshelf')(knex);

module.exports = knex;
module.exports = bookshelf;