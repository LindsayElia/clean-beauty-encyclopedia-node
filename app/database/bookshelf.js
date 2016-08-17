var knex = require('../database-connection');
var bookshelf = require('bookshelf')(knex);
module.exports = bookshelf;