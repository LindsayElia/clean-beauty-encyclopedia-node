// this is redundant now that we have migrate-create-tables.js
// keep?

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
        is_gluten_free: {type: 'boolean'},
        created_at: {type: 'dateTime', nullable: false},
        updated_at: {type: 'dateTime'}
    },
    products: {
        id: {type: 'serial', primary: true, nullable: false},
        brand_id: {type: 'integer', nullable: false, unsigned: true},
        name: {type: 'string', maxlength: 150, nullable: false},
        category: {type: 'string', maxlength: 150},
        application_type: {type: 'string', maxlength: 150},
        price: {type: 'decimal'},
        currency: {type: 'string', maxlength: 50},
        created_at: {type: 'dateTime', nullable: false},
        updated_at: {type: 'dateTime'}
    },
    ingredients: {
        id: {type: 'serial', primary: true, nullable: false},
        name: {type: 'string', maxlength: 150, nullable: false},
        alternate_names: {type: 'string', maxlength: 500},
        is_animal_derived: {type: 'boolean'},
        is_organic: {type: 'boolean'},
        created_at: {type: 'dateTime', nullable: false},
        updated_at: {type: 'dateTime'}
    }
};

module.exports = Schema;





