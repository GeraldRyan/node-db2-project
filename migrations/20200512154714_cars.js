
exports.up = function(knex) {
  // create cars table
  return knex.schema.createTable('cars', tbl=>{
    tbl.increments();

    tbl.integer('VIN', 255).notNullable();
    tbl.string('make', 255).notNullable();
    tbl.string('model', 255).notNullable();
    tbl.integer('mileage', 255).notNullable();
    tbl.string('transmission_type', 255);
    tbl.string('title_status', 255)
    
  })
};

exports.down = function(knex) {
  
};
