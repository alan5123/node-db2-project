
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl =>{
      tbl.increments('id');
      tbl.integer('vin number').notNullable().unique().index()
      tbl.string('make').notNullable()
      tbl.string('model').notNullable()
      tbl.integer('mileage').notNullable()
      tbl.string('Transmission-Type')
      tbl.string('Status')
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
};
