
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('raccoon_cans').del()
    .then(function () {
      // Inserts seed entries
      return knex('raccoon_cans').insert([
        {raccoon_id: 1, can_id: 3},
        {raccoon_id: 2, can_id: 2},
        {raccoon_id: 3, can_id: 1}
      ]);
    });
};
