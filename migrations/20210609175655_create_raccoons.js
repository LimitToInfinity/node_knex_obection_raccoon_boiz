
exports.up = function(knex) {
  return knex.schema.createTable('raccoons', t => {
    t.increments();
    t.string('name');
    t.integer('age');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('raccoons');
};
