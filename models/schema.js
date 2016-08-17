var Schema = {
    brands: {
        id: {type: 'serial', primary: true, nullable: false},
        name: {type: 'string', maxlength: 150, nullable: false},
        website_url: {type: 'string', maxlength: 150},
        hq_country: {type: 'string', maxlength: 50},
        hq_region: {type: 'string', maxlength: 50},
        hq_postal_code: {type: 'string', maxlength: 50},
        year_founded: {type: 'integer'},
        is_vegan: {type: 'boolean'},
        contains_vegan: {type: 'boolean'},
        is_gluten_free: {type: 'boolean'}
    },
    products: {
        id: {type: 'serial', primary: true, nullable: false},
        brand_id: {type: 'integer', nullable: false, unsigned: true},
        name: {type: 'string', maxlength: 150, nullable: false},
        category: {type: 'string', maxlength: 150},
        application_type: {type: 'string', maxlength: 150},
        price: {type: 'decimal'},
        currency: {type: 'string', maxlength: 50}
    },
    ingredients: {
        id: {type: 'serial', primary: true, nullable: false},
        name: {type: 'string', maxlength: 150, nullable: false},
        alternate_names: {type: 'string', maxlength: 500},
        is_animal_derived: {type: 'boolean'},
        is_organic: {type: 'boolean'}
    }
};

module.exports = Schema;


// for reference, help getting started with bookshelf:
// http://blog.ragingflame.co.za/2014/7/21/using-nodejs-with-mysql
// note that this is with mysql instead of postgres, so not everything will be the same

// nullable = means that it will accept 'null' as a value
// postgress doesn't allow primary keys to be 'null' value, but
// knex defaults to setting columns as nullable so it doesn't hurt to specify otherwise

// unsigned = value is a positive integer, can not be negative

// should I use 'serial' instead of 'increments' with postgres?
// yes
// https://www.postgresql.org/docs/9.4/static/datatype-numeric.html

// is there a 'money' value in postgres? or use decimal?
// yes, but since currency can differ and I don't need fractional precision 
// (the values are static, we're not performin calculations on them)
// we can use decimal.
// https://www.postgresql.org/docs/9.4/static/datatype-money.html
// https://www.postgresql.org/docs/9.4/static/datatype-numeric.html#DATATYPE-SERIAL

// difference between 'unique' and 'primary' ?
// postgres documentation shows 'primary' as being equivalent to both 'unique' and 'not null'
// https://www.postgresql.org/docs/8.1/static/ddl-constraints.html

// ensure i'm not re-writing tables if they already exist...


