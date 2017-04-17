
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'userone', password: 'pw1'},
        {id: 2, username: 'usertwo', password: 'pw2'},
        {id: 3, username: 'userthree', password: 'pw3'}
      ]);
    });
};
