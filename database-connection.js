// specify custom path since the root folder is up one level from this one
// usually the .env is in the root folder, and we're loading this module
// at the same folder level
require('dotenv').config({path: '../.env'});

// connect to database
var knex = require('knex')({
	client: 'pg',
	connection: process.env.DATABASE_URI || 'postgres://localhost/clean_beauty'
});

module.exports = knex;
