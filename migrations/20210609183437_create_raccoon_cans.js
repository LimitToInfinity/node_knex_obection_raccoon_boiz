
exports.up = function(knex) {
  return knex.schema.createTable('raccoon_cans', t => {
    t.increments();
    // t.integer('raccoon_id').references('raccoons.id');
    t.integer('raccoon_id').references('id').inTable('raccoons');
    t.integer('can_id').references('id').inTable('cans');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('raccoon_cans');
};
