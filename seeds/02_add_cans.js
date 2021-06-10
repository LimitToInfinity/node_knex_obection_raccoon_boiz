
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cans').del()
    .then(function () {
      // Inserts seed entries
      return knex('cans').insert([
        {kind: 'trash'},
        {kind: 'recycling'},
        {kind: 'compost'}
      ]);
    });
};
