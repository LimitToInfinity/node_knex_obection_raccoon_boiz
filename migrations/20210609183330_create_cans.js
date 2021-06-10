
exports.up = function(knex) {
  return knex.schema.createTable('cans', t => {
    t.increments();
    t.string('kind');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cans');
};
