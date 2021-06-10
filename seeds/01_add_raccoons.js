
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('raccoons').del()
    .then(function () {
      // Inserts seed entries
      return knex('raccoons').insert([
        {name: 'Spunky', age: 5},
        {name: 'Swirly', age: 3},
        {name: 'Trendy', age: 2}
      ]);
    });
};
